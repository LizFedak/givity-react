import React, { Component } from 'react';

import './ExperienceCard.css';

class ExperienceCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="image-div">
                <img src="https://getmyboat-user-images1.imgix.net/images/5afeaddc28bbb/boat-rentals-milna-splitsko-dalmatinska-zupanija-0-processed.jpg?auto=format%2Cenhance%2Credeye&fit=crop&h=None&ixlib=python-3.0.0&quality=80&w=None" className="img-in-image-div"/>
                </div>
                <div className="info-box">
                    <div className="item-title">CROATIA</div>
                    <div className="item-description">Night time SUP Glow tour in Split</div>
                    <div className="item-description">From $47/person</div>
                    <div className="rating-block"><i className="fas fa-star"></i>4.97 (429)</div>
                </div>
            </div>
     





        
        )
    }
}

export default ExperienceCard;