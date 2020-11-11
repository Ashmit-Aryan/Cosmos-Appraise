const state = {
  apod:[]
};

const getters = {
  allApod: (state) => state.apod,
  length: (state) => state.apod.length
};

const actions={
AddApod({commit},apod){ 
  commit('addNewApod', apod)
}
};

const mutations={
addNewApod: (state,apod) => state.apod.unshift(apod)
};

export default{
  state,
  getters,
  actions,
  mutations
}