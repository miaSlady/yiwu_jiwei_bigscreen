<template>
<div class="bg">
  <div class="pop">
    <div class="header">
      <span>问题监督详情</span>
      <img src="./img/close.png" alt="" @click="$emit('close',true)">
    </div>
    <div class="content">
      <div class="searchBox">
        <span class="r20">村社名称</span>
        <el-cascader
          class="r20"
          :options="CITYOPTIONS"
          :props="props"
          collapse-tags
          v-model="search.id"
          clearable/>
        <p class="btn r20" @click="handleSearch">查询</p>
        <p class="btn r20" @click="handleReset">重置</p>
      </div>
      <div class="myList">
        <div class="head">
          <span>序号</span>
          <span>镇街</span>
          <span>村社</span>
          <span>处置结果</span>
          <span>提交时间</span>
          <span>事项详情</span>
          <span>操作</span>
        </div>
        <ul v-if="tableData.length" class="body">
          <li v-for="(v,i) in tableData" :key="i">
            <span>{{v.time}}</span>
          </li>
        </ul>
        <div class="noMore" v-else>
          暂无更多数据
        </div>
      </div>
      <div class="pageBox">
        <el-pagination
          :page-size="pagination.size"
          :current-page.sync="pagination.current"
          @current-change="pageChange"
          layout="prev, pager, next"
          :total="pagination.total">
        </el-pagination>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      CITYOPTIONS,
      search: {},
      props: { multiple: true },
      pagination: {
        current: 1,
        total: 0,
        size: 10
      },
      tableData: [

      ]
    }
  },
  methods: {
    pageChange (val) {
      this.pagination.current = val
      this.handleSearch()
    },
    handleSearch () {

    },
    handleReset () {
      this.pagination.current = 1
      this.search.id = []
      this.handleSearch()
    },
    initData () {

    }
  },
  mounted () {
    this.initData()
  }
}

</script>
<style lang='less' scoped src="./css/common.less"/>
