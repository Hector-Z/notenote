<template>
  <div>
    <NavMenu></NavMenu>
    <router-view/>
  </div>
</template>

<script>
  import NavMenu from "./common/NavMenu";
  export default {
    name: "Index",
    components:{NavMenu}
  }
</script>

<style scoped>

</style>
