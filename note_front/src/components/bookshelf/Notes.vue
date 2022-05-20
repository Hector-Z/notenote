<template>
  <div>
    <el-row type="flex" class="row-bg" :gutter="20" style="flex-wrap: wrap">
      <el-col :span="5" v-for="(item,i) in notes" :key="i">
        <el-card class="box-card" style="width: 100%" shadow="hover">
          <div slot="header" class="clearfix">
            <span>{{ item.name }}</span>
            <el-tooltip content="删除此笔记" placement="top">
              <el-button style="float: right; padding: 3px 0" type="text" @click="deleteNote(item.id)">
                <i class="el-icon-delete"></i></el-button>
            </el-tooltip>
            <el-tooltip content="编辑笔记标题与简介" placement="top">
              <el-button style="float: right; padding: 3px 0;margin-right: 10px" type="text" @click="editInfo(item)">
                <i class="el-icon-s-tools"></i></el-button>
            </el-tooltip>
            <el-tooltip content="查看笔记内容" placement="top">
              <el-button style="float: right; padding: 3px 0" type="text">
                <i class="el-icon-view"></i></el-button>
            </el-tooltip>
            <el-tooltip content="编辑笔记内容" placement="top">
              <el-button style="float: right; padding: 3px 0" type="text" @click="editNote(item.id)">
                <i class="el-icon-edit"></i></el-button>
            </el-tooltip>
          </div>
          <div class="text item">
            {{ item.abs }}
          </div>
        </el-card>
      </el-col>

      <el-col :span="5">
        <el-card class="box-card" style="width: 100%" shadow="hover">
          <div slot="header" class="clearfix">
            <span>新增笔记本</span>
          </div>
          <div class="text item" style="text-align: center">
            <i class="el-icon-circle-plus-outline" style="font-size: 40px;cursor: pointer" @click="addNote"></i>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row style="position: fixed; bottom: 10px; right: 10px">
      <el-button type="primary" icon="el-icon-edit" circle @click="editCategory"></el-button>
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
  },
  methods: {
    editInfo(note){
      this.$emit('editInfo', note)
    },

    editNote(id) {
      this.$router.push ({
        path:'/note/edit',
        name:'NoteEdit',
        params:{
          noteId:id
        }
      })
    },

    addNote(){
      this.$emit('addNote')
    },

    deleteNote(id){
      var _this = this
      this.$confirm('此操作将永久删除该笔记, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        _this.axios.get('note/delete/'+id.toString())
          .then(function (response){
            if (response.status === 200) {
              _this.$message({
                type: 'success',
                message: '删除成功!'
              });
              _this.$emit('updateInfo')
            }
          })
          .catch(function (error){
            console.log(error)
          })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });

    },

    editCategory() {
      this.$emit('editCategory')
    },


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
