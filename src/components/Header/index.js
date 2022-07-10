import React from 'react';

import Navigation from "../Navigation";

function Header(props) {
    const {
        sections = [],
        currentTarget,
        setCurrentTarget,
        setcurrentSection,
    } = props;

    const handleNavigation = (section) => {
        setcurrentSection(section)
        setCurrentTarget(section.id);
    }

    return (
        <header className="flex-row px-1">
            <a data-testid="link" href="/">
                    <span>
                        <div className="circular--portrait">
                            <img src={require('../../assets/justin-avatar.png')} alt='justin face logo'/>
                        </div>
                    </span>
            </a>
            <h2 className="align-self-center">
                Justindevs
            </h2>
            <Navigation
                currentTarget={currentTarget}
                sections={sections}
                handleNavigation={handleNavigation}
            />
        </header>
    );
}

export default Header;