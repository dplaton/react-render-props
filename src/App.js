import React from 'react';
import logo from './logo.svg';
import './App.css';
import GridView from './GridView';
import ListView from './ListView';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-body">
                <h2>Grid view</h2>
                <GridView />
                <h2>List view</h2>
                <ListView />
            </div>
        </div>
    );
}

export default App;
