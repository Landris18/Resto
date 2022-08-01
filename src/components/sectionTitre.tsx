import React from 'react';


const SectionTitre = (props : any) => {
    return (
        <>
            <h1 className="section-titre" style={{color: "#222"}}>  
                {props.text}
                <hr style={{width: "20%", marginTop: 10,  border: "1px solid #edbb28"}}/>
            </h1>
        </>
    )
}


export default SectionTitre;

