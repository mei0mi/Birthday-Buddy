import React from "react";

export default function Friend(props){
    return (
        <div key={props.name} className="friend">
          <img src={props.img} className='image' alt={props.name} />
          <div className="name-age-container">
          <h3 className='name'>{props.name}</h3>
          <p className='age'>{props.age}</p>

          </div>
        </div> 
    )
}