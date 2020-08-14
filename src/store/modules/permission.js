import { constantRoutes } from '@/router';
import { getUserRoles } from '@/api/login';
import Layout from '@/views/layout';

const componentTo = (data) => { // 路由懒加载
  return () => import(`@/views${data}`)
}

const permission = {
  state: {
    routes: [],
    addRoutes: [],
    authList: {}
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(routes); // 异步路由 合并路由
    },
    SET_AUTH_LIST: (state, authList) => {
      state.authList = authList;
    }
  },
  actions: {
    // 获取用户权限
    GetUserInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        getUserRoles()
          .then((res) => {
            const data = res.data || [];
            var arr = []; // 生成的路由表

            // 操作权限 - 递归
            const authList = {};
            const iterate = (list) => {
              list.forEach((item) => {
                if (!item.component && item.accessUrl) {
                  authList[item.menuId] = true;
                }
                if (Array.isArray(item.accessDTOList)) {
                  iterate(item.accessDTOList);
                }
              });
            };
            iterate(data);
            commit('SET_AUTH_LIST', authList);

            for (const a in data) {
              // 动态 ---------处理服务端返回的路由

            }
            arr.push({
              // 最后置入404
              path: '*',
              redirect: '/404',
              hidden: true
            });
            commit('SET_ROUTES', arr);
            resolve(res);
          })
          .catch((err) => {
            console.log('err...', err);
            reject(err);
          });
      });
    }
  }
};
export default permission;
