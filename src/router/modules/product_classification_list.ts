export default {
  path: 'product_classification_list',
  name: 'product_classification_list',
  component: () => import('@/views/list/index.vue'),
  meta: {
    locale: 'menu.product_classification.list',
    requiresAuth: true,
    icon: 'icon-list',
  },
  children: [
    {
      path: 'search-table-product-classification', // The midline path complies with SEO specifications
      name: 'search-table-product-classification',
      component: () => import('@/views/list/search-table/index_product_classification.vue'),
      meta: {
        locale: 'menu.list.searchTable',
        requiresAuth: true,
        roles: ['user'],
      },
      // props: {
      //   // 将参数 listType 设置为路由的 props
      //   listType: 'product',
      // },
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
