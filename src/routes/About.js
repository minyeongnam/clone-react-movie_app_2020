import { func } from 'prop-types';
import React from 'react';
import './About.css';

function About(props) {
    return (
        <div className="about__container">
            <span>"Freedom is the freedom to say taht two plus two make four. If that is granted, all else follows."</span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About;