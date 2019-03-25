import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import RootStore from "../store/RootStore";
import {RouterView} from "mobx-state-router";
import NotFound from "./NotFound";
import SignIn from "./SignIn";
import Home from "./Home";

interface IAppContainer {
    rootStore: RootStore;
}

const viewMap = {
    home: <Home/>,
    notFound: <NotFound/>,
    signIn: <SignIn/>,
};

@inject('rootStore')
@observer
export default class AppContainer extends Component {

    render() {
        const {rootStore} = this.props as IAppContainer;
        const {routerStore} = rootStore;

        return <RouterView routerStore={routerStore} viewMap={viewMap}/>;
    }
}