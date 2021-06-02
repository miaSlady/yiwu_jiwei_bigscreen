<template>
  <div class="bg">
    <div class="pop">
      <div class="header">
        <span>农民建房详情</span>
        <img src="./img/close.png" alt="" @click="$emit('close', true)" />
      </div>
      <div class="content">
        <div class="searchBox">
          <span class="r20">村社名称</span>
          <el-cascader
            class="r20"
            :options="CITYOPTIONS"
            :props="props2"
            collapse-tags
            v-model="search.id1"
            clearable
          />
          <span class="r20">工程状态</span>
          <el-cascader
            class="r20"
            :options="options2"
            :props="props2"
            collapse-tags
            v-model="search.id3"
            clearable
          />
          <p class="btn r20" @click="handleSearch">查询</p>
          <p class="btn r20" @click="handleReset">重置</p>
        </div>
        <div class="myList">
          <div class="head">
            <span>序号</span>
            <span>镇街</span>
            <span>村社</span>
            <span>户主</span>
            <span>面积</span>
            <span>状态</span>
            <span>审批时间</span>
            <span>操作</span>
          </div>
          <ul v-if="tableData.length" class="body">
            <li v-for="(v, i) in tableData" :key="i">
              <span>{{ v.time }}</span>
            </li>
          </ul>
          <div class="noMore" v-else>暂无更多数据</div>
        </div>
        <div class="pageBox">
          <el-pagination
            :page-size="pagination.size"
            :current-page.sync="pagination.current"
            @current-change="pageChange"
            layout="prev, pager, next"
            :total="pagination.total"
          >
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
        { value: 1, label: '已到账' },
        { value: 2, label: '未到账' }
      ],
      options2: [
        { value: 1, label: '在建' },
        { value: 2, label: '完工' }
      ]
    }
  },
  methods: {
    pageChange (val) {
      this.pagination.current = val
      this.handleSearch()
    },
    handleSearch () {},
    handleReset () {
      this.pagination.current = 1
      this.search = {}
      this.handleSearch()
    },
    initData () {}
  },
  mounted () {
    this.initData()
  }
}
</script>
<style lang='less' scoped src="./css/common.less"/>
