<template>
  <div>
    <el-row type="flex" class="row-bg" gutter="20">
      <el-col :span="5" v-for="(item,i) in notes" :key="i">
        <el-card class="box-card" style="width: 100%" shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{ item.name }}</span>
            <el-tooltip content="编辑笔记标题与简介" placement="top">
              <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-s-tools"></i></el-button>
            </el-tooltip>
            <el-tooltip content="查看笔记内容" placement="top">
              <el-button style="float: right; padding: 3px 0; margin-right: 10px" type="text"><i class="el-icon-view"></i></el-button>
            </el-tooltip>
            <el-tooltip content="编辑笔记内容" placement="top">
              <el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-edit"></i></el-button>
            </el-tooltip>
          </div>
          <div class="text item">
            {{ item.abs }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Notes",
  data(){
    return {
      notes:[]
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>
