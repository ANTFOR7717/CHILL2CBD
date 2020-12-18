export const state = () => ({
   name:  {
     default: "name"
   },
   sizes: {
     default: [2.00, 3.00, 4.00]
   },
   prices: {
     default: [2.00, 3.00, 4.00]
   },
   url: {
     type: String
   },
   company: {
     default: "company"
   },
   snip: {
     default: "custom"
  },
  description: {
    default: "description"
  }





})

export const mutations = {

  setSnip(state, snip) {
    state.snip = snip
  },

  setName(state, name) {
    state.name = name
  },

  setSizes(state, size) {
    state.sizes = size
  },

  setPrices(state, prices) {
    state.prices = prices
  },

  setUrl(state, url) {
    state.url = url
  },

  setCompany(state, company) {
    state.company = company
  },

  setDescription(state, description) {
    state.description = description
  },

}

export const getters = {

  getSnip(state) {
    return state.snip
  },

  getName(state) {
    return state.name
  },

  getSize(state) {
    return state.sizes
  },

  getPrice(state) {
    return state.prices
  },

  getUrl(state) {
    return state.url
  },

  getCompany(state) {
    return state.company
  },

  getDescription(state) {
    return state.description
  },

}
