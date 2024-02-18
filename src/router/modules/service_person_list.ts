export default {
  path: 'service_person_list',
  name: 'service_person_list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.service_person.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table-service-person', // The midline path complies with SEO specifications
      name: 'search-table-service-person',
      component: () => import('@/views/list/search-table/index_service_person.vue'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
        roles: ['user'],
      },
    },
    {
      path: 'card',
      name: 'card',
      component: () => import('@/views/list/card/index.vue'),
      meta: {
        locale: 'menu.list.cardList',
        requiresAuth: true,
        roles: ['user'],
      },
    },
  ],
}
