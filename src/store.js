import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import { reducers } from "./reducers/reducer";
//import { sagas } from "./sagas/index";
import { createBrowserHistory } from 'history';

// add the middlewares
let middlewares = [];
const history = createBrowserHistory();
// add the router middleware
middlewares.push(routerMiddleware(history));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

/*
const history = createBrowserHistory();
    const store = createStore(reducers, undefined, compose(
        applyMiddleware(routerMiddleware(history)),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ));

/*
// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(createBrowserHistory(), store);
*/
const store = createStore(reducers, middleware);
//sagaMiddleware.run(sagas);

// export
export { store };
