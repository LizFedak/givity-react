import React, { Component } from 'react';
import './ExperienceCardHolder.css';
import ExperienceCard from './ExperienceCard';

class ExperienceCardHolder extends React.Component {
    render() {
        return (
            <div className="card-deck-container">
                <div className="card-deck-title">Introducing Airbnb Adventures</div>
                <div className="card-deck-subtitle">Multi-day trips led by local experts—activities, meals, and stays included</div>
                <div className="card-deck">
                    <ExperienceCard/>
                    <ExperienceCard/>
                    <ExperienceCard/>
                    <ExperienceCard/>
                    <ExperienceCard/>
                    <ExperienceCard/>
                </div>
                <div className="card-deck-CTA-link">Show all adventures<i class="fas fa-angle-right"></i></div>
            </div>

        )
    }
}

export default ExperienceCardHolder;