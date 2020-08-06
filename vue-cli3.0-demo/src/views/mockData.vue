<!--  -->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="job" label="职业"> </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="count"
      :current-page="page"
      :page-size="pageSize"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      tableData: [],
      count: 30,
      page: 1,
      pageSize: 2
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios('/api/user', {
        params: {
          page: this.page,
          pageSize: this.pageSize
        }
      }).then(res => {
        //  debugger
        console.log(res.data)
        this.count=res.data.count
        this.tableData = res.data.data
      })
    },
    // 分页相关函数
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.page = val
      this.getData()
    }
  }
}
</script>
<style lang="scss" scoped></style>
