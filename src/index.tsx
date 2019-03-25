import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootStore from "./store/RootStore";
import {HistoryAdapter} from "mobx-state-router";
import {history} from "./utils/history";
import 'bootstrap/dist/css/bootstrap.min.css';

const rootStore = new RootStore(window.localStorage);
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

ReactDOM.render(<App rootStore={rootStore}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
