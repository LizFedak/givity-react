import React, { Component } from 'react';
import './QuickCategoryCardHolder.css';
import QuickCategoryCard from './QuickCategoryCard';

class QuickCategoryCardHolder extends React.Component {
    render() {
        return (
            <div className="QuickCategoryCardHolder">
                <QuickCategoryCard/>
                <QuickCategoryCard/>
                <QuickCategoryCard/>
                <QuickCategoryCard/>
            </div>

        )
    }
}

export default QuickCategoryCardHolder;