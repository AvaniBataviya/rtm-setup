import {action, observable} from "mobx";
import RootStore from "./RootStore";
import {RouterState} from "mobx-state-router";

interface IUser {
    email: string,
    password: string,
}

const defaultState = new RouterState('home');
const signIn = new RouterState('signIn');

export default class AuthStore {

    rootStore: RootStore;
    @observable localStorage: any;
    @observable user: IUser | null = null;
    @observable signInRedirect: RouterState = defaultState;

    constructor(rootStore: RootStore, localStorage: any) {
        this.localStorage = localStorage;
        this.rootStore = rootStore;
    }

    @action
    setUser(user: IUser) {
        this.user = user;
        this.rootStore.routerStore.goTo(this.signInRedirect);
    };

    @action
    clearUser() {
        this.user = null;
    };

    @action
    setSignInRedirect(routerState: RouterState) {
        this.signInRedirect = routerState;
    }

    resetSignInRedirect() {
        this.setSignInRedirect(defaultState);
    }

    signOut() {
        this.clearUser();
        this.rootStore.routerStore.goTo(signIn);
    }
}