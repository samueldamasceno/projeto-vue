<template>
  <div id="app">
    <RouterView />
  </div>
</template>


<script>
export default {
  name: 'App',
};
</script>


<style lang="scss">
@import '@/assets/scss/global.scss';

#app {
  
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  main {
    flex: 1;
  }
}
</style>
