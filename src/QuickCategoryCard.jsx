import React, { Component } from 'react';
import './QuickCategoryCard.css';

class QuickCategoryCard extends React.Component {
    render() {
        return (
            <div className="category-card">
                <img src="https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/18306/is-vacay-a-word.jpg?itok=AZgVNRMS" className="category-card-image"/>
                <div className="category-card-title"><p>Volunteer</p></div>
            </div>
        )
    }
}

export default QuickCategoryCard;