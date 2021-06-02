<template>
<div class="bg">
  <div class="pop" style="width:82vw;">
    <div class="header">
      <span>村务详情</span>
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
        <span class="r20">会议类型</span>
        <el-cascader
          class="r20"
          :options="options1"
          :props="props2"
          collapse-tags
          v-model="search.id4"
          clearable/>
        <span class="r20">会议时间</span>
        <div class=" m_dropDown">
          <div class="inputBox r20">
            <p class="input">{{search.beginTime}}</p>
            <span class="r10">至</span>
            <p class="input">{{search.endTime}}</p>
          </div>
          <el-date-picker
            class="hideBox"
            v-model="myDate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
        <p class="btn r20" @click="handleSearch">查询</p>
        <p class="btn r20" @click="handleReset">重置</p>
      </div>
      <div class="myList">
        <div class="head">
          <span>序号</span>
          <span>镇街</span>
          <span>村社</span>
          <span>会议时间</span>
          <span>会议类型</span>
          <span>会议纪要</span>
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
import { CUSTOMDATE } from '@/assets/js/config.js'
export default {
  watch: {
    myDate (newValue, oldValue) {
      this.search.beginTime = newValue[0]
      this.search.endTime = newValue[1]
    }
  },
  data () {
    return {
      myDate: null,
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
        { value: 1, label: '村民代表大会' },
        { value: 2, label: '村务联席会议' }
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
      this.initData()
      this.handleSearch()
    },
    initData () {
      this.getTime()
    },
    getTime () {
      // 获取近一周时间
      const today = new Date().getTime()
      const before7 = today - 7 * 24 * 60 * 60 * 1000
      const day1 = CUSTOMDATE(before7, 1, '-'); const day2 = CUSTOMDATE(today, 1, '-')
      this.myDate = [day1, day2]
      this.search.beginTime = day1
      this.search.endTime = day2
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
