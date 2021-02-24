import React, { Component } from 'react'
import "./EmojiResultRow.css";

export default class EmojiResultRow extends Component {

    render() {

         const codePointHex = this.props.symbol.codePointAt(0).toString(16);
         console.log(codePointHex);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <div
                className="component-emoji-result-row copy-to-clipboard"
                data-clipboard-text={this.props.symbol}
            >
                <img alt={this.props.title} src={src} />
                <span className="title">{this.props.title}</span>
                <span className="info">Click to copy emoji</span>
            </div>
        )
    }
}
