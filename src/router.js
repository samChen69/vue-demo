
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

var foo = function(resolve) {
    require.ensure(['./view/foo/foo.vue'], () => {
        resolve(require('./view/foo/foo.vue'))
    }, 'foo')
};
var too = function(resolve) {
    require.ensure(['./view/too/too.vue'], () => {
        resolve(require('./view/too/too.vue'))
    }, 'too')
};
//设置路径参数
var user = function(resolve) {
    require.ensure(['./view/user/user.vue'], () => {
        resolve(require('./view/user/user.vue'))
    }, 'user')
};
var routes = [
	{path:'/foo',component:foo},
	{path:'/too',component:too},
	{path:'/user/:username',name:'user',component:user},
	{path:'/a/:username',redirect: { name: 'user' }},
	{path:'/b/:username',component:user,alias:'/c/:username'},
]

var router = new VueRouter({routes})

export default router;