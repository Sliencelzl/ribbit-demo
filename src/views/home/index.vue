<template>
  <div class="xtx_Home_page">
    <!-- 首页入口分类+广告 -->
  <div class="home_entry">
    <home-category/>
  </div>
  </div>
</template>

<script>
import HomeCategory from '@/views/home/components/home-category.vue'
export default {
    name:'xtx_Home_page',
    components:{ HomeCategory }
}
</script>

<style scoped lang="less">
@import '../../assets/styles/variables.less';
.xtx_Home_page{
    color: @xtxColor;
    width: 1240px;
    margin: auto;
}
</style>