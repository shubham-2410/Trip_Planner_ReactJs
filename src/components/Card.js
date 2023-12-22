import React, { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {
    const [readMore, readMoreSet] = useState(false);

    function readMoreHandler() {
        readMoreSet(!readMore);
    }

    const desc = readMore ? info : info.substring(0, 200);

    return (
        <div className="card">
            <div>
                <img src={image} alt="image" className="image"/>
            </div>
            <div className="tour-info">
                <div className="tour-details">
                    <h2 className="tour-price">₹ {price}</h2>
                    <h2 className="tour-name">{name}</h2>
                </div>
                <div className="tour-desc">
                    {desc}
                    <span  className="read-more" onClick={readMoreHandler}>
                        {
                            readMore ? ` Show less` : `....Read More`
                        }
                    </span>
                </div>
            </div>

            <button className="red-btn" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;