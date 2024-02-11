import React from 'react'; 
import "./Apply-section.css"; 

function Apply_section() { 
    const handleApplyCick = () => {
        window.open('https://pennclubs.com/club/pennapps'); 
    }
    return ( 
        <div className="Apply-section"> 
        <div className="overall-text-container center">
            <div className="text-container1"> 
                <p>Be leaf it or not, </p> 
            </div>  
            <div className="text-container2"> 
                <p>applications are open!</p> 
            </div> 
            <div className="text-container3" >
                Hosted at the nation&#39;s first university, PennApps <br></br>
                is the original college hackathon. Come join us to <br></br>
                learn something new, build an app, or start a <br></br>
                company. Let&#39;s continue to make history together.
            </div>
            <div className="button-container">
            <button className="apply-button" onClick={handleApplyCick}>APPLY</button>
            </div>
        </div>
        </div> 
    ) 
} 

export default Apply_section; 