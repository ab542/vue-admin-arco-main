export default {
  path: 'elder_institution_list',
  name: 'elder_institution_list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.elder_institution.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table-elder-institution', // The midline path complies with SEO specifications
      name: 'search-table-elder-institution',
      component: () => import('@/views/list/search-table/index_elder_institution.vue'),
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
