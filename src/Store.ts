import { createStore } from 'redux';
import { photosReducer } from './photosReducer';

export const store = createStore(photosReducer);
