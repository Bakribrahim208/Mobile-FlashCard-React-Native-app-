import React from 'react-native'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import decks from './reducer/index'
import logger from 'redux-logger'

const reducers = combineReducers({ decks })
const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store