/*
set sidebar open or close,and some app setting
 */
const state = {
    barState:{
      showNavbar:false,
      showTabbar:true,
      navBarTitle:"",
    },     
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
    SET_BARSTATE(state, data){
      state.barState.showNavbar = data.showNavbar
      state.barState.showTabbar = data.showTabbar
      state.barState.navBarTitle = data.title 
    }
  }
  const actions = {
    _setBarState({ commit }, meta){
      commit('SET_BARSTATE',meta)
    }
  }
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
  