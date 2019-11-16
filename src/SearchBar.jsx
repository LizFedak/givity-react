import React, { Component } from 'react';
import './SearchBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from './logo.svg';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="searchbar">
                <form>
                <table cellspacing="0" cellpadding="0">
                    <tr>
                    <td className="search-td">
                        <input type="text" name="search-input" placeholder='Try "Gift wrapping for children"' className="search-input"/>
                    </td>
                    <td>
                        <button type="button" name="dates" className="date-button"><img className="date-field-calendar" src="../date_range-24px.svg"/>Date</button>
                    </td>    
                    <td>
                        <button type="button" name="guests" className="guests-button"><img className="guests-add-count" src="../person_add-24px.svg"/>Guests</button>
                    </td>
                    <td>
                        <button type="submit" className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
                    </td>
                    </tr>
                </table>
                </form>
            </div>
        )
    }
}

export default SearchBar;






