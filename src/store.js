import { createStore } from 'redux';

import courseReducer from './reducers/reducers.js';

const store = createStore(courseReducer);

export default store;
