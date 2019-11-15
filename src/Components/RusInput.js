import React from 'react';

export class RusInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        this.props.handler(e.target.value)
    }
    render () {
        return <input value={this.props.value} onInput={this.handleChange}></input>
    }
}