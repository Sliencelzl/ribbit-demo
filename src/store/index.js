import { createStore } from 'vuex'
//vuex持久化插件
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'

export default createStore({
  state: {
    
  },
  getters:{
   
  },
  mutations: {
   
  },
  actions: {
    
  },
  modules: {
    user,
    cart,
    category
  },
  //配置vuex持久化插件
  plugins: [
      createPersistedstate({
         key: 'erabbit-client-pc-store',
         paths: ['user', 'cart']
        })
      ]
})
