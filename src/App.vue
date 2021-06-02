<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted () {
    const scale = document.documentElement.style.fontSize
    window.scale = parseInt(scale) || 1
  },
  components: {
  }
}
</script>

<style>
  p,ul{
    margin-bottom: 0;
  }
</style>
