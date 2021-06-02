import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import '@/assets/css/init.less'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import scroll from 'vue-seamless-scroll'

import EventBus from '@/assets/js/eventBus.js'
import Title from '@/components/common/m_title'

import 'element-ui/lib/theme-chalk/index.css'
import {
  Message,
  Tabs,
  Rate,
  Carousel,
  CarouselItem,
  Checkbox,
  Cascader,
  Dialog,
  Popover,
  Pagination,
  DatePicker
} from 'element-ui'

import * as echarts from 'echarts'
import VueClipboard from 'vue-clipboard2'
Vue.use(scroll)
Vue.use(Viewer)
Vue.prototype.$eventBus = EventBus
Vue.component('m-title', Title)

Vue.prototype.$message = Message
Vue.use(Popover)

Vue.prototype.$echarts = echarts
Vue.use(Tabs)
Vue.use(Rate)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Checkbox)
Vue.use(Cascader)
Vue.use(Dialog)
Vue.use(Popover)
Vue.use(Pagination)
Vue.use(DatePicker)

Vue.use(VueClipboard)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
