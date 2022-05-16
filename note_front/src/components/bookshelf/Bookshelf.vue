<template>
  <div>
    <category-bar @categorySelect="getNotes" ref="categoryBar"></category-bar>
    <notes ref="notes"></notes>
  </div>
</template>

<script>
import Notes from "./Notes";
import CategoryBar from "./CategoryBar";
export default {
  name: "Bookshelf",
  components:{Notes, CategoryBar},
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
    }
  }
}
</script>

<style scoped>

</style>
