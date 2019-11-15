import React from 'react';
import './App.css';
import { RusInput } from './Components/RusInput.js';
import { EngInput } from './Components/EngInput.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            rusName: '',
            engName: ''
        };
        this.handleInputData = this.handleInputData.bind(this);
    }
    handleInputData(name) {
        this.setState({
            rusName: name,
            engName: name
        });
    }
    render() {
        return (
            <fragment>
                <RusInput
                    value={this.state.rusName}
                    handler={this.handleInputData}
                />
                <EngInput
                    value={this.state.engName}
                    handler={this.handleInputData}
                />
            </fragment>
        );
    }
}

export default App;
