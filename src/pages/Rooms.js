import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'
export default function Rooms() {
    return (
        <>
            <Hero hero  = "roomsHero">
                <Banner title = "Rooms" >
                    <Link to = "/" className = " btn-primary">Go Back to Home</Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </>
    )
}
