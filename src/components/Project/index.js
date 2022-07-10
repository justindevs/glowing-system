import React from 'react';
import './project.css';

function Project({project}) {
    return (
        <div>
            <div className="item-2">
                <div href={project.code}
                   target="_blank"
                   rel="noreferrer"
                   className="card">
                    <div className="thumb">
                        <img src={require(`../../assets/${project.logo}`)} alt={project.logo} />
                    </div>
                    <article>
                        <h1>{project.name}</h1>

                    </article>
                    <a href={project.code}
                       target="_blank"
                       rel="noreferrer">CODE</a>
                    {project.isWeb && (
                        <a href={project.link}
                           target="_blank"
                           rel="noreferrer">VISIT</a>
                    )}
                    {!project.isWeb && (
                        <span>Not a web app</span>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Project;