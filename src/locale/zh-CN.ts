import localeMessageBox from '@/components/message-box/locale/zh-CN'
import localeLogin from '@/views/login/locale/zh-CN'

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN'
/** simple */
import localeMonitor from '@/views/dashboard/monitor/locale/zh-CN'

import localeCardList from '@/views/list/card/locale/zh-CN'
import localeSearchTable from '@/views/list/search-table/locale/zh-CN'

import localeGroupForm from '@/views/form/group/locale/zh-CN'
import localeStepForm from '@/views/form/step/locale/zh-CN'

import localeBasicProfile from '@/views/profile/basic/locale/zh-CN'

import localeDataAnalysis from '@/views/visualization/data-analysis/locale/zh-CN'
import localeMultiDAnalysis from '@/views/visualization/multi-dimension-data-analysis/locale/zh-CN'

import localeError from '@/views/result/error/locale/zh-CN'
import localeSuccess from '@/views/result/success/locale/zh-CN'

import locale403 from '@/views/exception/403/locale/zh-CN'
import locale404 from '@/views/exception/404/locale/zh-CN'
import locale500 from '@/views/exception/500/locale/zh-CN'

import localeUserInfo from '@/views/user/info/locale/zh-CN'
import localeUserSetting from '@/views/user/setting/locale/zh-CN'
/** simple end */
import localeSettings from './zh-CN/settings'

export default {
  'menu.dashboard': '主页',
  'menu.service_product.list': '服务产品管理',
  'menu.product_classification.list': '产品分类管理',
  'menu.order.list': '订单管理',
  'menu.service_person.list': '服务人员管理',
  'menu.role.list': '角色管理',
  'menu.user.list': '用户管理',
  'menu.elder_institution.list': '养老机构管理',
  'menu.service_provider.list': '服务供应商管理',
  'menu.examine.list': '审核管理',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.institution_certification': '机构申请认证',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,
  /** simple */
  ...localeMonitor,
  ...localeSearchTable,
  ...localeCardList,
  ...localeStepForm,
  ...localeGroupForm,
  ...localeBasicProfile,
  ...localeDataAnalysis,
  ...localeMultiDAnalysis,
  ...localeSuccess,
  ...localeError,
  ...locale403,
  ...locale404,
  ...locale500,
  ...localeUserInfo,
  ...localeUserSetting,
  /** simple end */
}
