/*
set sidebar open or close,and some app setting
 */
const state = {
    showHeaderNavBar:false,
    showBottomTabBar:true,
    opened: sessionStorage.getItem('open')
      ? sessionStorage.getItem('open')
      : 'false',
    msgIsShow: false,
    showDriver: localStorage.getItem('driver')
      ? localStorage.getItem('driver')
      : 'yes'
  }
  const mutations = {
    SET_OPENED(state, payload) {
      state.opened = String(payload)
      sessionStorage.setItem('open', payload)
    },
    SET_MSGISOPEN(state) {
      state.msgIsShow = !state.msgIsShow
    },
    SET_DRIVER(state, payload) {
      state.showDriver = payload
      localStorage.setItem('driver', payload)
    },
    SET_HEADER_NAVBAR(state,data){
        state.showHeaderNavBar = data
    }
  }
  const actions = {
      _showNavBar({ commit },data){
          commit('SET_HEADER_NAVBAR',data)
      }
  }
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  