import {RouterState, RouterStore} from "mobx-state-router";
import AuthStore from "./AuthStore";
import {observable} from "mobx";
import {routes} from "../routes";

const notFound = new RouterState('notFound');

export default class RootStore {

    routerStore: RouterStore;
    @observable authStore: AuthStore;

    constructor(localStorage: any) {
        this.routerStore = new RouterStore(this, routes, notFound);
        this.authStore = new AuthStore(this, localStorage);
    }
}