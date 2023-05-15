import React from "react";
import "./CSS-files/Home-css/Card.css";



const Card = (Props) => {
    return (
        <>
            {Props.details.map((value, index) => (
                <div className="card" key={index}>
                    <h5>#{value.id} {value.department}</h5>
                    <div className="card-image">
                        <img id="Photo" src={value.img} alt="" />
                    </div>
                    <div>
                        <p className="card-name">{value.name}</p>
                        <p className="card-email">{value.email}</p>
                        <p className="card-phone">{value.phonenumber}</p>
                        <p className="card-gender">{value.branch}</p>
                        <a type="button" className="btn btn-block text-muted card-btn" data-bs-toggle="modal" data-bs-target="#Profile">
                            History
                        </a>
                    </div>
                </div>
            ))}
        </>
    )
}
export default Card;