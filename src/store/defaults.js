export const defaultUser = () => {
    return {
        id: null,
        name: '',
    }
}

export const defaultState = () => {
    return {
        loading: 0,
        locale: 'en',
        api_token: '',
        user: defaultUser(),
    }
}