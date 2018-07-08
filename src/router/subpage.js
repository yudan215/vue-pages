import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Home'
// import SubPage from '@/pages/subpage/main.js'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        // {
        //     path: '/subpage',
        //     name: 'subpage',
        //     component: SubPage
        // }
    ]
})