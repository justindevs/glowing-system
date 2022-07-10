import React from 'react';

function ResumeSection() {

    const skills = [
        'angularjs 1.x',
        'Angular 2+',
        'Spring Boot',
        'Spring Security',
        'Spring Cloud',
        'AWS',
        'AWS Lambda',
        'Azure',
        'Azure Spring Cloud',
        'Terraform',
        'Sprint Planning'
    ];

    return (
        <div className="flex-col">
            <h2>
                Skillset
            </h2>
            <ul>
                {skills.map((skill) => (
                    <li className="mx-1" key={skill}>{skill}</li>
                ))}
                <li>
                    <a className="resume-link" href="https://drive.google.com/file/d/108xkGqA9paIGmKvxzLAIs3_2pSz93GJs/view?usp=sharing">
                        Download Resume Now
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ResumeSection;