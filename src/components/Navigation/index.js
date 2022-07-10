import React from 'react';

function Navigation(props) {
    const {
        sections = [],
        currentTarget,
        handleNavigation,
    } = props;

    return (
        <nav>
            <ul className="flex-row">
                {sections.map((section) => (
                    <li
                        className={`mx-1 ${currentTarget === section.id && 'navActive'}`}
                        key={section.id}
                    >
                        <span onClick={() => {handleNavigation(section)}}>
                            {section.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;