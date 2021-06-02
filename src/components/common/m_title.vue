<template>
<div class="title">
  <p><i></i><slot name="title"></slot></p>
  <p><slot name="more"></slot></p>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {},
  mounted () {}
}

</script>
<style lang='less' scoped>
.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
  &>p:nth-child(1){
    font-size: 20px;
    position: relative;
    display: flex;
    align-items: center;
    color:#D7FFFF;
    i{
      display: block;
      width: 2px;
      height: 18px;
      background: #D7FFFF;
      margin-right: 4px;
    }
  }
  &>p:nth-child(2){
    font-size: 16px;
    color: #5dffff;
    cursor: pointer;
  }
}
</style>
