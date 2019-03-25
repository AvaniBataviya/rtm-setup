import React, {Component} from 'react';
import './App.css';
import {Provider} from "mobx-react";
import AppContainer from "./component/AppContainer";
import RootStore from "./store/RootStore";

interface IApp {
    rootStore: RootStore
}

class App extends Component<IApp> {
    render() {
        return (
            <Provider rootStore={this.props.rootStore}>
                <AppContainer/>
            </Provider>
        );
    }
}

export default App;
