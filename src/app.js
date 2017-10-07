
//这里是入口文件，在这里进行全局的模块引用，以及全局的上下文管理
import Vue from 'vue';
import iview from 'iview';
import router from './router.js'
Vue.use(iview)
//全局引入iview的css
import 'iview/dist/styles/iview.css'; 
import app from './view/app.vue';

new Vue({
	el:'#app',
	template: '<app />',
	components:{app},
	router,
	// watch:{
	// 	'$route'(to,from){
	// 		console.log(arguments)
	// 	}
	// }
})
