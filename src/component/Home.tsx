import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import RootStore from "../store/RootStore";

interface IHome {
    rootStore: RootStore;
}

@inject('rootStore')
@observer
export default class Home extends Component {

    render() {
        const {rootStore} = this.props as IHome;

        return (
            <div>Home</div>
        )
    }
}