import { defaultUser } from './defaults'

export default {
    loading: state => {
        return state.loading > 0
    },
    locale: state => {
        return state.locale
    },
    user: state => {
        return state.user.id === null ? defaultUser() : state.user
    },
}