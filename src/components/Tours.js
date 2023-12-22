import React from "react";
import Card from "./Card";

function Tours({tours , removeTour}) {
    return (
        <div className="container">
            <h2 className="head">Plan for Love</h2>
            <div className="card-container">
                {
                    tours.map((tour) => {
                        // <Card id={tour.id} name={tour.name} info={tour.info} image={tour.image} price={tour.price} removeTour={removeTour}></Card>
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;