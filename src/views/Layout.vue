<template>
  <!-- 顶部通栏 -->
  <App_top_nav/>
  <!-- 吸顶 -->
  <AppHeaderSticky/>
  <!-- 头部组件 -->
  <AppHeader/>
  <!-- 内容容器 -->
  <main class="app-body">
      <router-view/>
  </main>
  <!-- 底部组件 -->
  <app-footer/>
</template>

<script>
import App_top_nav from '@/components/App_top.vue'
import AppHeader from '@/components/App_header.vue'
import AppFooter from '@/components/App_footer.vue'
import AppHeaderSticky from '@/components/App_header_sticky.vue'
import { useStore } from 'vuex'
export default {
  components: { App_top_nav , AppHeader , AppFooter,AppHeaderSticky},
    name:'Layout',
    setup(){
      const store = useStore()
      store.dispatch('category/getList')
      return{ 
        
      }
    }
}
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>