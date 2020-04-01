import React, { Component } from 'react'
// import items from './data'
// import Room from './components/Room';
import Client from './Contentful'
 const RoomContext =  React.createContext();

// Client.getEntries(
// {    content_type: "beachResort"}
// ).then((response) => console.log(response.items));

// Client.getSpace('viobxop2ftyp')
// .then((space) => space.getEntries())
// .then((response) => console.log(response.items))
// .catch(console.error)

 class RoomProvider extends Component {
     state = {
         rooms : [],
         sortedRooms:[],
         featuredRooms: [],
         loading:true,

         type: 'all',
         capacity:1,
         price: 0,
         minPrice: 0,
         maxPrice : 0,
         minSize : 0,
         maxSize : 0,
         breakfast : false,
         pets : false
     }

     //getData 

     getData = async () => {
         try {
             let response = await Client.getEntries({
                content_type: "beachResort", 
                order: "fields.price" 
             });
             let rooms = this.formateData(response.items)
             //console.log(rooms)
    
             let maxPrice = Math.max(...rooms.map(item =>item.price));
             let maxSize = Math.max(...rooms.map(item =>item.size));
                
             let featuredRooms = rooms.filter(room => room.featured === true);
             this.setState({
                 rooms, featuredRooms, sortedRooms : rooms, 
                 loading : false,
                 price : maxPrice,
                 maxPrice,
                 maxSize
             })

         }catch (error){
             console.log(error)
         }
     }
     
     componentDidMount(){
        this.getData()

     }

     formateData(items){
           let tempItems =  items.map(item => {
               let id = item.sys.id;
               let images = item.fields.images.map(image => image.fields.file.url);
               let room = {...item.fields, images, id}
               return room;
           }) 
           return tempItems
     }
    
     getRoom = (slug) =>{
         let tempRooms = [...this.state.rooms];
         const room = tempRooms.find((room) => room.slug === slug );
         return room;
     }

     handleChange = event =>{
         const target = event.target;
         const value = target.type === 'checkbox' ? target.checked : target.value;
         const name = event.target.name;
         this.setState({
             [name] : value
         }, this.filterRooms)

        //  const value = event.target.value;

     }

     filterRooms = () =>{
            let {
                rooms, type, capacity, price, minSize , maxSize, breakfast, pets
            } = this.state
            //For the rooms
            let tempRooms = [...rooms];
            //for no of guests 
            capacity =  parseInt(capacity)
            //filter by capacity
            
            if(capacity !==1){
                tempRooms = tempRooms.filter(room => room.capacity >= capacity)
            }
            if (type !== 'all'){
                tempRooms = tempRooms.filter(room => room.type === type)
            }

            price = parseInt(price);
            
            tempRooms =  tempRooms.filter (room => room.price <= price);

            // size = parseInt(size)
            tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
            
            if(breakfast){
                tempRooms = tempRooms.filter(room => room.breakfast === true)

            }

            if(pets){
                tempRooms = tempRooms.filter(room => room.pets === true)
            }
                
            
            this.setState({
                sortedRooms : tempRooms
            })
     }



    render() {
        return (
            <RoomContext.Provider value = {{...this.state, getRoom : this.getRoom, handleChange : this.handleChange}}> 
            {this.props.children}
            </RoomContext.Provider>
        )
    }
}
const RoomConsumer =  RoomContext.Consumer;
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context = {value} />}
        </RoomConsumer>
    }
}
export {RoomProvider, RoomConsumer, RoomContext}

