<template>
  <div>
    <mavon-editor
      v-model="note.contentMd"
      @save = "saveNote"
    ></mavon-editor>
  </div>
</template>

<script>
export default {
  name: "NoteEdit",
  data() {
    return {
      note:{
        contentMd:'',
        contentHtml:'',
      }
    }
  },
  mounted() {
    if (this.$route.params.noteId) {
      this.loadNote(this.$route.params.noteId)
    }
  },
  methods: {
    loadNote(id){
      var _this = this
      this.axios.get('/note/'+id.toString())
        .then(function (response) {
          if (response.status === 200) {
            _this.note = response.data.object
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    saveNote(value, render){
      var _this = this
      var url = 'update/content/note/'+this.note.id
      this.note.contentMd = value
      this.note.contentHtml = render
      this.axios.post(url, this.note)
        .then(function (response) {
          if (response.status === 200) {
            _this.$message({
              type:'success',
              message:'保存成功！'
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>

</style>
