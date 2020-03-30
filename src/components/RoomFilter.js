import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Contex'
import Title from '../components/Title'
export default function RoomFilter({rooms}) {

    const context =  useContext(RoomContext);
    // console.log(context);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast,pets 
    } = context

    const getUnique = (items, value) =>{
        return [... new Set(items.map (item => item[value]))]
    }
    let types = getUnique(rooms, 'type');
    //get all
    types = ['all', ...types]
    types = types.map((item, index) =>{
    return <option value = {item} key =  {index}>{item}</option>
    })

    let guests = getUnique(rooms, 'capacity');
    // guests = [1, ...guests]
    guests = guests.map((item, index) => {
        return <option value = {item} key = {index}> {item}</option>
    })
    
    return (
        <section className = "filter-container">
            <Title title = "search room"/>
            <form className = "filter-form"> 
          
             <div className = "form-group">
                 <label htmlFor = "type">room type</label>
                 <select name = "type" id = "type" value = {type} className = "form-control" onChange = {handleChange}>
                   {types}
                 </select>
             </div>


             <div className = "form-group">
                 <label htmlFor = "capacity">Guest</label>       
                 <select name = "capacity" id = "capacity" value = {capacity} className = "form-control" onChange = {handleChange}>
                   {guests}
                 </select>
             </div>
             
             
             

            </form>
        </section>
    )
}
