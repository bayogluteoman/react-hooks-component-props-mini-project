import React from 'react';

export default function About(props) {
    if(!props.image){
        return(
            <div>
                <aside>
                <img src="https://via.placeholder.com/215" alt="blog logo" />
                <p>{props.about}</p>
                </aside>
            </div>
        )
    }
    else{
        return (
            <div>
                <aside>
                    <img src={props.image} alt="blog logo" />
                    <p>{props.about}</p>
                </aside>
            </div>
        )
    }
    
}
