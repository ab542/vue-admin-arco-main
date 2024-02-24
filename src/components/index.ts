import { BarChart, LineChart, PieChart, RadarChart } from 'echarts/charts'
import { DataZoomComponent, GraphicComponent, GridComponent, LegendComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { App } from 'vue'
import Breadcrumb from './breadcrumb/index.vue'
import Chart from './chart/index.vue'
// import SvgIcon from './svg-icon/index.vue';
// Manually introduce ECharts modules to reduce packing size

use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
])

export default {
  install(Vue: App) {
    Vue.component('Chart', Chart)
    Vue.component('Breadcrumb', Breadcrumb)
    // 在 Vue 实例中使用 Element UI
    // 使用 app.use() 方法注册 Element Plus 组件
    Vue.component('ElementPlus', ElementPlus)
  },
}
