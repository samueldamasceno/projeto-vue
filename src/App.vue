<template>
  <div id="app">
    <Transition name="navbar">
      <NavBar v-if="isMenuVisible" />
    </Transition>
    <AppHeader @toggle-menu="toggleMenu" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    AppHeader,
  },

  data() {
    return {
      isMenuVisible: false,
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
      console.log(this.isMenuVisible);
    },
  },
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
