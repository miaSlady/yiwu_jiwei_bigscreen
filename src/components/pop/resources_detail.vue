<template>
<div class="bg">
  <div class="pop" >
    <div class="header">
      <span>资产资源详情</span>
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
        <span class="r20">资产性质</span>
        <el-cascader
          class="r20"
          :options="options1"
          :props="props2"
          collapse-tags
          v-model="search.id1"
          clearable/>
        <span class="r20">处置方式</span>
        <el-cascader
          class="r20"
          :options="options2"
          :props="props2"
          collapse-tags
          v-model="search.id2"
          clearable/>
        <p class="btn r20" @click="handleSearch">查询</p>
        <p class="btn r20" @click="handleReset">重置</p>
      </div>
      <div class="myList">
        <div class="head">
          <span>序号</span>
          <span>镇街</span>
          <span>村社</span>
          <span>资产名称</span>
          <span>金额</span>
          <span>资产性质</span>
          <span>处置方式</span>
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
        { value: 1, label: '经营性资产' },
        { value: 2, label: '非经营性资产' }
      ],
      options2: [
        { value: 1, label: '出租' },
        { value: 2, label: '出售' },
        { value: 3, label: '合资' }
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
      this.search = {}
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
