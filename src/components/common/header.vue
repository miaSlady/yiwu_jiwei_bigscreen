<template>
<div class="header">
  <div class="l">
    <p @click="$router.push('/overview')"><img src="./img/home.png" alt="">首页</p>
    <p v-if="type!=1" @click="$router.go(-1)"><img src="./img/back.png" alt="">返回上一级</p>
  </div>
  <p class="c">村务清廉钉办</p>
  <p class="r"></p>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    type () {
      return this.$route.query.type || 1
    }
  },
  methods: {

  },
  mounted () {

  }
}

</script>
<style lang='less' scoped src="./css/header.less">
