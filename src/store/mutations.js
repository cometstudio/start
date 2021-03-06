import * as types from "./types"
import { defaultState, defaultUser } from './defaults'

export default {
    [types.RESET_STORE](state){
        Object.assign(state, defaultState())
    },
    [types.START_LOADING](state){
        state.loading += 1
    },
    [types.STOP_LOADING](state){
        state.loading -= 1
    },
    [types.SET_LOCALE]: (state, locale) => {
        state.locale = locale
    },
    [types.SET_API_TOKEN]: (state, api_token) => {
        if(api_token === undefined){
            // Set token being stored
            state.api_token = window.localStorage.getItem('api_token')
        }else{
            // Save token in the local storage
            window.localStorage.setItem('api_token', api_token)
            // Set state token
            state.api_token = api_token
        }
    },
    [types.USER_SET]: (state, user) => {
        if(user === undefined){
            // Get user being stored
            let storedUser = window.localStorage.getItem('user')
            // Set default user if no stored one
            state.user = storedUser === null ? defaultUser() : JSON.parse(storedUser)
        }else{
            // Save user in the local storage
            window.localStorage.setItem('user', JSON.stringify(user))
            // Set state user
            state.user = user
        }
    },
}