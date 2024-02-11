import React, { useState, useEffect } from 'react';
import "./About-section.css"; 
import PennLogo from "./penn-logo.png"; 

function About_section() {
    return (
        <div className="About-section-background">
            <div id="about-section" className="text-container4">
                <h1>About</h1>
            </div> 

            <div className="text-container5">
                <h2>The College Hackathon</h2>
            </div>
            <div className="text-container6">
            In the context of a hackathon, the word "hack" is used to describe how multiple technologies can be used <br></br>
            together in a new and innovative way. Teams of up to four people spend the weekend working on <br></br>
            innovative software and hardware solutions to real-world problems. These projects range in platform and <br></br>
            application, including elements of web development, mobile applications, drones, and more. However, <br></br>
            many times the most important aspect of a hackathon is the community it generates and skills that <br></br>
            inexperienced hackers walk away with.
            </div>

            <div className="text-container5">
                <h2>The PennApps difference</h2>
            </div>
            <div className="text-container6">
            Founded in the fall of 2009, PennApps was the nation's first student-run college hackathon. Since then, it <br></br>
            has spurred a revolution in the way engineering students develop and showcase their skills, spawning an <br></br>
            entire "league" of hackathons across the nation. In past years, over a thousand students from the U.S. and <br></br>
            other countries like Switzerland, Canada, England, and Singapore have converged in Philadelphia for the <br></br>
            spring and fall editions of the event for a weekend of creation and discovery. Both beginners and experts <br></br>
            alike will work together, learn and compete to become better engineers and work on awesome projects. <br></br>
            This year, PennApps is expanding its focus on learning by emphasizing the collaboration of new and <br></br>
            experienced hackers, and providing more learning opportunities and workshops throughout the weekend.
            </div>

            <div id="apply-section" className="text-container4">
                <h1>Apply</h1>
            </div>

            <div className='text-container5'>
                <h2>The Application Process</h2> 
            </div>
            <div className="text-container6">
            Thousands of qualified candidates apply to participate in PennApps every year, however our space can <br></br>
            only support a limited number of participants and as much as we'd like to take everyone, it just isn't <br></br>
            possible. We think that the fairest way to decide who we invite is by asking everyone to tell us a little bit <br></br>
            about themselves, so that we can invite people who have demonstrated interest and skill. <br></br>
            <br></br>
            We don't expect everyone to have been to a hackathon before, in fact, we love first-time hackers having <br></br>
            been there ourselves when we started! We're just trying to bring those who most want to really build <br></br>
            something awesome and learn something new, and while we can't invite everyone, we're striving to <br></br>
            continue building a community of diverse and amazing hackers at PennApps. Just show us what you've <br></br>
            made, tell us about why you want to be at PennApps, and we'll do our best to get you here! Applications <br></br>
            are currently open.
            </div>

            <div>
                <div className="footer-content">
                    <div className="footer-left">
                        <div>PENNAPPS</div>
                        <div>© 2022 PennApps</div>
                        <div>contact@pennapps.com</div>
                    </div>
                    <div className="footer-right">
                        <div>Code of Conduct</div>
                        <div>Facebook</div>
                        <div>Twitter</div>
                        <div>Instagram</div>
                    </div>
                </div>
                <div className="footer-support">
                    <p>Organized with support from</p>
                    <img src={PennLogo} />
                </div>
            </div>
        </div>
    )
}

export default About_section; 