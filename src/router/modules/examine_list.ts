export default {
  path: 'examine_list',
  name: 'examine_list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.examine.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table-examine-product', // The midline path complies with SEO specifications
      name: 'search-table-examine-product',
      component: () => import('@/views/list/search-table/index_examine_product.vue'),
      meta: {
        locale: 'menu.examine.product',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
    {
      path: 'search-table-examine-institution',
      name: 'search-table-examine-institution',
      component: () => import('@/views/list/search-table/index_examine_institution.vue'),
      meta: {
        locale: 'menu.examine.institution',
        requiresAuth: true,
        roles: ['admin'],
      },
    },
  ],
}
