import React from 'react';
import Project from "../Project";
import './portfolio.css';

function PortfolioSection() {

    const projects = [
        {
            name: "Chatty",
            isWeb: false,
            link: null,
            code: 'https://github.com/justindevs/chatty',
            logo: 'chatty.png'
        },
        {
            name: "OpenDSA",
            isWeb: false,
            link: null,
            code: 'https://github.com/justindevs/OpenDSA',
            logo: 'opendsa.png'
        },
        {
            name: "glowing-shard",
            isWeb: true,
            link: 'https://justindevs.github.io',
            code: 'https://github.com/justindevs/glowing-shard',
            logo: 'glowingshard.png' // glowing-shard image is in the public domain https://www.rawpixel.com/image/5961524/free-public-domain-cc0-photo
        },
        {
            name: "OpenDSA2",
            isWeb: false,
            link: null,
            code: 'https://github.com/justindevs/OpenDSA',
            logo: 'opendsa.png'
        },
        {
            name: "glowing-shard2",
            isWeb: true,
            link: 'https://justindevs.github.io',
            code: 'https://github.com/justindevs/glowing-shard',
            logo: 'glowingshard.png'
        },
        {
            name: "Chatty2",
            isWeb: false,
            link: null,
            code: 'https://github.com/justindevs/chatty',
            logo: 'chatty.png'
        },
    ];

    return (
        <>
            <div className="flex-row band">
                {projects.map((project) => (
                    <Project
                        key={project.name}
                        project={project}
                    />
                ))}
            </div>

        </>
    );
}

export default PortfolioSection;