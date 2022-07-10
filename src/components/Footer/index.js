import React from 'react';

function Footer() {
    const socials = [
        {
            name: 'Github',
            logo: 'github.png',
            link: 'https://github.com/justindevs',
        },
        {
            name: 'LinkedIn',
            logo: 'linkedin.png',
            link: 'https://www.linkedin.com/in/justindevs',
        },
        {
            name: 'Credly',
            logo: 'credly.png',
            link: 'https://www.credly.com/users/justin-gottschalk',
        },
    ];

    return (
        <div className="flex-row px-1 just-center">
            {socials.map((social) => (
              <a href={social.link} key={social.name}>
                <img
                    className="social-logo"
                    src={require(`../../assets/${social.logo}`)}
                    alt={social.name}
                />
              </a>
            ))}
        </div>
    );
}

export default Footer;