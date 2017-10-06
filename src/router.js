
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

var routes = [
	{path:'/foo',component:foo},
	{path:'/too',component:too}
]

var router = new VueRouter({routes})

export default router;