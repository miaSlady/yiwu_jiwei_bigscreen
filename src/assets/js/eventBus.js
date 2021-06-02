import Vue from 'vue'
const EVENT_TYPES = {
  getIds: 'getIds', // 5个tab获取id
  showIds: 'showIds'// 5个tab展示相应类型
}
const eventBus = new Vue({
  data () {
    return {
      EVENT_TYPES
    }
  }
})

export default eventBus
