import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import CV from 'react-cv'
import {CVData} from "./Datas/CVData";

class App extends Component {
    render() {
        return (
            <div>
                <CV {...CVData} />
            </div>
        )
    }

}

export default App;
