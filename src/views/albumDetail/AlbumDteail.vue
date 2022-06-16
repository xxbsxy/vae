<template>
<Top/>
<Tab/>
<router-view></router-view>
</template>

<script>
 export default { name: 'AlbumDteail', }
</script>
<script setup>
import Tab from './Tab.vue'
import Top from './Top.vue'

</script>
<style scoped lang='less'>

</style>