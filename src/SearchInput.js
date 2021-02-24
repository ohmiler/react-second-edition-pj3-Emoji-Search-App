import React, { Component } from 'react'
import './SearchInput.css'

export default class SearchInput extends Component {

    render() {
        return (
            <div className="component-search-input">
                <div>
                <input onChange={this.props.textChange} />
                </div>
            </div>
        )
    }
}
