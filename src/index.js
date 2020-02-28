import React from 'react';
import ReactDOM from "react-dom";
import ParentComponent from './rootcontainer/root';
import { createStore } from "redux";
import allReducers from './reducers/combine-reducers';
import { Provider } from 'react-redux';

const reduxStore = createStore(allReducers)



ReactDOM.render( <Provider store={reduxStore}>
                    <ParentComponent></ParentComponent>
                </Provider>
                    , document.getElementById('root'))