import {RouterState, RouterStore} from "mobx-state-router";

const checkForUserLoginIn = (fromState: any, toState: any, routerStore: RouterStore) => {
    const {
        rootStore: {authStore}
    } = routerStore;
    if (authStore.user) {
        return Promise.resolve();
    } else {
        authStore.setSignInRedirect(toState);
        return Promise.reject(new RouterState('signIn'));
    }
};

export const routes = [
    {
        name: 'home',
        pattern: '/'
    },
    {
        name: 'signIn',
        pattern: '/signIn'
    },
    {
        //test route
        name: 'department',
        pattern: '/departments/:id',

        // write logic to load data on component load i.e here call department store load item method
        // (first make department store, add method and add in root store)
        // onEnter: (fromState:any, toState:any, routerStore:RouterStore) => {
        //     const { rootStore: { departmentStore } } = routerStore;
        //     departmentStore.loadItems(toState.params.id);
        //     return Promise.resolve();
        // },

        // Check user login before enter
        beforeEnter: checkForUserLoginIn,
    },
    {
        name: 'notFound',
        pattern: '/not-found'
    }
];