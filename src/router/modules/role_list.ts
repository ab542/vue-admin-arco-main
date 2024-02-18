export default {
  path: 'role_list',
  name: 'role_list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.role.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table-role', // The midline path complies with SEO specifications
      name: 'search-table-role',
      component: () => import('@/views/list/search-table/index_role_list.vue'),
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
