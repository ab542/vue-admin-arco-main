export default {
  path: 'user_list',
  name: 'user_list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.user.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table-user', // The midline path complies with SEO specifications
      name: 'search-table-user',
      component: () => import('@/views/list/search-table/index_user_list.vue'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'card',
      name: 'card',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
}
