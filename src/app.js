
//这里是入口文件，在这里进行全局的模块引用，以及全局的上下文管理
import Vue from 'vue';
//import iview from 'iview';


new Vue({
	el:'#app',
	template: '<div>{{ msg }}</div>',
	data:{
		msg:'hello,this is vue components'
	}
})