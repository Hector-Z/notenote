<template>
  <div>
    <category-bar @categorySelect="getNotes" ref="categoryBar"></category-bar>
    <notes ref="notes" @editInfo="handledEditInfo" @addNote="handleAddNote" @updateInfo="getNotes" @editCategory="handleEditCategory"></notes>
    <note-edit-form ref="noteEditForm" @updateInfo="getNotes"></note-edit-form>
  </div>
</template>

<script>
import Notes from "./Notes";
import CategoryBar from "./CategoryBar";
import NoteEditForm from "./NoteEditForm";
export default {
  name: "Bookshelf",
  components:{Notes, CategoryBar, NoteEditForm},
  data() {
    return {

    }
  },
  methods:{
    getNotes(){
      var _this = this;
      var categoryCid = this.$refs.categoryBar.currentCid
      this.axios.get('categories/'+categoryCid+'/notes')
        .then(function (response){
          if(response.status === 200) {
            console.log(response)
            _this.$refs.notes.notes = response.data
          }

        })
    },

    handledEditInfo(noteInfo) {
      this.$refs.noteEditForm.dialogFormVisible = true
      this.$refs.noteEditForm.isCreate = false
      this.$refs.noteEditForm.form = noteInfo
    },

    handleAddNote(){
      this.$refs.noteEditForm.dialogFormVisible = true
      this.$refs.noteEditForm.isCreate = true
      this.$refs.noteEditForm.form = {}
      this.$refs.noteEditForm.cid = this.$refs.categoryBar.currentCid
    },

    handleEditCategory(){
      this.$refs.categoryBar.edit()
    }
  }
}
</script>

<style scoped>

</style>
