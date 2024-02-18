export default {
  path: 'service_provider_list',
  name: 'service_provider_list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.service_provider.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table-service-provider', // The midline path complies with SEO specifications
      name: 'search-table-service-provider',
      component: () => import('@/views/list/search-table/index_service_provider.vue'),
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
