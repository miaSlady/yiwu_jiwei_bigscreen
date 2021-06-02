<template>
  <div>
    <component :is="componentConfig.side" />
    <Center />
  </div>
</template>

<script>
import Center from './center'
import { TAB_MAP } from '@/assets/js/config'
const {
  overview,
  party_manage,
  village_resolution,
  resources,
  village_engineering,
  farmers_build,
  property_manage,
  labor_employment,
  aid_relief
} = TAB_MAP
const COMPONENT_MAP = {
  [overview]: {
    side: () => import('./side/overview')
  },
  [party_manage]: {
    side: () => import('./side/party_manage')
  },
  [village_resolution]: {
    side: () => import('./side/village_resolution')
  },
  [resources]: {
    side: () => import('./side/resources')
  },
  [village_engineering]: {
    side: () => import('./side/village_engineering')
  },
  [farmers_build]: {
    side: () => import('./side/farmers_build')
  },
  [property_manage]: {
    side: () => import('./side/property_manage')
  },
  [labor_employment]: {
    side: () => import('./side/labor_employment')
  },
  [aid_relief]: {
    side: () => import('./side/aid_relief')
  }
}
export default {
  data () {
    return {}
  },
  components: {
    Center
  },
  computed: {
    tabId () {
      return this.$route.meta.tabId
    },
    componentConfig () {
      return COMPONENT_MAP[this.tabId]
    }
  },
  methods: {},
  mounted () {}
}
</script>
<style lang='less' scoped>
</style>
