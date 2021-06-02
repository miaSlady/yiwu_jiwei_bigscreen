<template>
<div class="villageItem">
  <el-popover
    placement="right"
    trigger="hover">
    <div class="m_popBox">
      <p>{{detail.name}}</p>
      <ul>
        <li v-for="(v,i) in villageBox" :key="i">
          <p>{{v.name}}</p>
          <p>{{v.value}}<span class="per">{{v.per}}</span></p>
        </li>
      </ul>
    </div>
    <div class="button" slot="reference">
      <p>{{detail.name}}</p>
      <p>活跃人数3%</p>
    </div>
  </el-popover>
</div>
</template>

<script>

export default {
  props: ['detail', 'villageBox'],
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }
}

</script>
<style lang='less' scoped src="./villageItem.less">
