<template>
<div class="bg">
  <div class="pop">
    <div class="header">
      <span>党员详情</span>
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
        <span class="r20">12积分</span>
        <el-cascader
          class="r20"
          :options="options1"
          :props="props2"
          collapse-tags
          v-model="search.id4"
          clearable/>
        <span class="r20">是否村干部</span>
        <el-cascader
          class="r20"
          :options="options2"
          :props="props2"
          collapse-tags
          v-model="search.id4"
          clearable/>
        <p class="btn r20" @click="handleSearch">查询</p>
        <p class="btn r20" @click="handleReset">重置</p>
      </div>
      <div class="myList">
        <div class="head">
          <span>序号</span>
          <span>镇街</span>
          <span>村社</span>
          <span>姓名</span>
          <span>性别</span>
          <span>年龄</span>
          <span>学历</span>
          <span>职务</span>
          <span>联系方式</span>
          <span>12积分</span>
          <span>扣分事项</span>
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
      props2: { multiple: false },
      pagination: {
        current: 1,
        total: 0,
        size: 10
      },
      tableData: [],
      options1: [
        { value: 1, label: '12~9分' },
        { value: 2, label: '8~7分' },
        { value: 3, label: '6~0分' }
      ],
      options2: [
        { value: 1, label: '是' },
        { value: 2, label: '否' }
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
<style lang='less' scoped >
@import "./css/common.less";
</style>
