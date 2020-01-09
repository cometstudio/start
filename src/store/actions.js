import * as types from "./types"
import axios from 'axios'

export default {
    [types.RESET_STORE]: ({commit}) => {
        return new Promise((resolve, reject) => {
            commit(types.START_LOADING)

            axios.post('/api/user/logout')
                .then(() => {
                    window.localStorage.clear()
                    commit(types.RESET_STORE)
                    resolve()
                }).catch((error) => {
                    reject(error)
            }).then(()=>{
                commit(types.STOP_LOADING)
            })
        })
    },
    [types.SET_LOCALE]: ({ commit }, locale) => {
        if(locale === undefined){
            // Get locale being stored
            let storedLocale = window.localStorage.getItem('locale')
            // Set state locale if stored
            if(storedLocale !== null) commit(types.SET_LOCALE, storedLocale)
        }else{
            // Save locale in the local storage
            window.localStorage.setItem('locale', locale)
            // Set state locale
            commit(types.SET_LOCALE, locale)
        }
    },
    [types.USER_SIGNUP]: ({ commit, dispatch }, payload)=>{
        return new Promise((resolve, reject) => {
            commit(types.START_LOADING)

            axios.post('/api/user/signup', payload)
                .then((response) => {
                    dispatch(types.USER_LOGIN, payload)
                    resolve(response)
                }).catch((error) => {
                    reject(error)
                }).then(()=>{
                    commit(types.STOP_LOADING)
                })
        })
    },
    [types.USER_LOGIN]: ({ commit }, payload)=>{
        return new Promise((resolve, reject) => {
            commit(types.START_LOADING)

            axios.post('/api/user/login', payload)
                .then((response) => {
                    commit(types.SET_API_TOKEN, response.data.api_token)
                    commit(types.USER_SET, response.data.user)
                    resolve(response.data.user)
                }).catch((error) => {
                    reject(error)
                }).then(()=>{
                    commit(types.STOP_LOADING)
                })
        })
    },
    [types.USER_SAVE]: ({ commit }, payload)=>{
        return new Promise((resolve, reject) => {
            commit(types.START_LOADING)

            axios.post('/api/user', payload)
                .then((response) => {
                    commit(types.USER_SET, response.data.user)
                    resolve(response.data)
                }).catch((error) => {
                    reject(error)
                }).then(()=>{
                    commit(types.STOP_LOADING)
                })
        })
    },
    [types.USER_SET]: (context, payload) => {
        context.commit(types.USER_SET, payload)
    },
    [types.SET_API_TOKEN]: (context, payload) => {
        context.commit('setApiToken', payload)
    },
}