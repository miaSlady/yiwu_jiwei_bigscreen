<template>
<div class="box">
    <p>
        <input type="text" v-model="pxValue" placeholder="请输入"/> px
    </p>
    <p>{{value}}</p>
    <button @click="clear">清空</button>
    <button
            v-clipboard:copy="value"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
    >复制
    </button>
</div>
</template>

<script>
export default {
  data () {
    return {
      pxValue: '',
      unit: '%'
    }
  },
  computed: {
    value () {
      return (this.pxValue / 1080 * 100).toFixed(2) + 'vh'
    }
  },
  methods: {
    onCopy () {
      this.$message.success('复制成功')
    },
    onError () {
      this.$message.error('复制失败')
    },
    clear () {
      this.pxValue = ''
    }
  },
  mounted () {

  }
}

</script>
<style lang='less' scoped>
.color{
    width: 0;
    height: 0;
    border-bottom: 100px solid red;
    border-left: 100px solid transparent;
}
.box{
  padding:30px;
  font-size: 20px;
  input,p{
    color:#000;

  }
}
button{
  padding:10px;
  background: pink;
  color:#fff;
  border-radius: 5px;
  margin-right: 20px;
}

</style>
