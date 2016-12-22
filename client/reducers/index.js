import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import categories from './categories';
import podcasts from './podcasts';

const rootReducer = combineReducers({categories, podcasts, routing: routerReducer});

export default rootReducer;