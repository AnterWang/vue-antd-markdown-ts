// 动态路由表，可传输给服务端存储用
import Layout from '@/views/layout';
const asyncRoutes = [
    {
        path: '/',
        redirect: '/dashboard',
        name: 'dashboard',
        component: Layout,
        firstRoute: true,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: ()=> import('@/views/dashboard'),
                meta: { title: '首页', icon: 'bell' },
            }
        ]
    },
    {
        path: '/note',
        redirect: '/note',
        name: 'note',
        component: Layout,
        firstRoute: true,
        children: [
            {
                path: '/note',
                name: 'note',
                component: ()=> import('@/views/note/index'),
                meta: { title: '表单哈哈', icon: 'windows' }
            },
        
        ]
    },

]
export default asyncRoutes