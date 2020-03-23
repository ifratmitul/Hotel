import React, { Component } from 'react'

import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa'
class Services extends Component {

    state = {
        services : [
            {

                icon: <FaCocktail/>,
                title: "Free Cocktail",
                info : 'Lorem doesnt work here, Blah blah blah !'

            },
            {

                icon: <FaHiking/>,
                title: "Free Hiking",
                info : 'Lorem doesnt work here, Blah blah blah !'

            },
            {

                icon: <FaShuttleVan/>,
                title: "Free Van for kidnapping",
                info : 'Lorem doesnt work here, Blah blah blah !'

            },
            {

                icon: <FaBeer/>,
                title: "Free Beer",
                info : 'Lorem doesnt work here, Blah blah blah !'

            }

        ]
    }
    render() {
        return (

                <section className = "services">
                    <Title title = "Services "/>
                    <div className = "services-center">
                        {this.state.services.map((item, index) => {
                            return (<article key = {index} className ="service">
                                <span>{item.icon} </span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                                </article>
                                );
                      })  }
                    </div>

                </section>
               

        )
    }
}

export default Services
