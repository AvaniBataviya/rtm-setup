import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import RootStore from "../store/RootStore";

interface ISignIn {
    rootStore: RootStore;
}

@inject('rootStore')
@observer
export default class SignIn extends Component {

    render() {
        const {rootStore} = this.props as ISignIn;

        return (
            <div>signIn</div>
        )
    }
}