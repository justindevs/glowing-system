import React from 'react';

function AboutSection() {
    return (
        <div className='flex-row space-around'>
            <img src={require('../../assets/justin-about.png')}/>
            <div className="about-me">
                My name is Justin and I am a software engineer. I have two degrees in Computer Science from
                the University of Wisconsin. I have worked on large scale enterprise and SaaS web applications.
                I have the most experience in angularJS 1.x, Angular2+, and Spring Boot frameworks. I carry
                an AWS certification, however I have experience using both AWS and Azure including serverless
                infrastructure.
            </div>
        </div>
    );
}

export default AboutSection;