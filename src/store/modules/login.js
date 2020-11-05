export default {
    state: {
        loginTitle: 'Login',
        userDetails: null,
        authenticated:false,
    },
    mutations: {
        setUserDetail(state, payload) {
            state.userDetails = (payload)
            state.authenticated = true
        },
        removeUserDetail(state) {
            state.userDetails = null
            state.authenticated = false
        }
    },
    actions: {
        async setUserDetail(state, payload) {
            state.commit('setUserDetail', payload)
        },
        async removeUserDetail(state) {
            state.commit('removeUserDetail')
        }
    },
    getters: {
        getUserDetail: state => state.userDetails,
        getSampleText: state => state.loginTitle,
        getAuthentication: state => state.authenticated,
    }
}