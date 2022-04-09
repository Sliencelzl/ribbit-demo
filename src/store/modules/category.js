import { findAllCategory } from "@/api/category"
import { topCategory } from "@/api/constants"
//分类模块
export default {
    namespaced: true,
    state() {
        return {
            list: topCategory.map(item => ({ name: item }))
        }
    },
    mutations: {
        setList(state, payload) {
            state.list = payload
        },
        show(state,id){
            const currCategory = state.list.find(item => item.id === id)
            currCategory.open = true
        },
        hide(state,id){
            const currCategory = state.list.find(item => item.id === id)
            currCategory.open = false
        }
    },
    actions: {
        async getList({ commit }) {
            const data = await findAllCategory()
            console.log(data.result)
            data.result.forEach(top => {
                top.open = false
            });
            commit('setList', data.result)
        }
    }
}