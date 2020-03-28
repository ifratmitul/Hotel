import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../Contex'
import Loading from './Loading'

function RoomContainer ({context}){

    const {loading, sortedRooms, rooms} = context;

    if(loading)
    {
      return <Loading/>
    }
            return (
                        <>
                            
                            <RoomFilter rooms = {rooms}/>
                            <RoomList rooms = {sortedRooms}/>
                
                
                        </>
                        )


}

export default withRoomConsumer(RoomContainer)





//This thing could be done similarly  like the code below.

// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../Contex'
// import Loading from './Loading'
// export default function RoomContainer() {

    
//     return (

//         <RoomConsumer>

//         {
//             (value) => {
//                 console.log(value);
//                 const {loading, sortedRooms, rooms} = value
//                 if(loading){
//                     return <Loading/>
//                 }
//                 return (
//                 <div>
//                     Hello from rooms container
//                     <RoomFilter rooms = {rooms}/>
//                     <RoomList rooms = {sortedRooms}/>
        
        
//                 </div>
//                 );
//             }
//         }
//     </RoomConsumer>

//     )
// }
