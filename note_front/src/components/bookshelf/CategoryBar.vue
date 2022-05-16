<template>
  <div>
    <el-tabs v-model="currentCid" @tab-click="handleClick">
      <el-tab-pane v-for="(item,i) in categories" :label="item.name" :key="i" :name="item.id.toString()"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "CategoryBar",
  data() {
    return {
      currentCid:0,
      categories:[]
    }
  },
  mounted() {
    var _this = this;
    this.axios.get("/categories")
      .then(function (response){
        if (response.status === 200)
          _this.categories = response.data
      })
  },
  methods: {
    handleClick() {
      console.log(this.currentCid);
      this.$emit('categorySelect')
    }
  }
}
</script>

<style scoped>

</style>
