import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		token:'',
		userinfo:'zjk'
	},
    mutations: {
		setlogin(state,userinfo){
			state.userinfo = userinfo;
		},
	},
    actions: {
		AtmSetUsering(context,data){
			context.commit('setlogin',data)
		}
	}
})
export default store