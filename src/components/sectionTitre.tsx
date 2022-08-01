import React from 'react';


const SectionTitre = (props : any) => {
    return (
        <h1 className="section-titre" style={{color: "#222"}}>  
            {props.text}
        </h1>
    )
}


export default SectionTitre;

