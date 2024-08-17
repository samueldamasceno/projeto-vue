<template>
    <div>
        <img src="../assets/menu-icon.svg" alt="Menu Icon" class="menu-icon" @click="toggleMenu"/>
        <Transition name="navbar">
            <NavBar v-if="isMenuVisible" />
        </Transition>
        <div class="content">
            <RouterView />
        </div>
        <HomeFooter />
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar.vue';
    import HomeFooter from '@/components/HomeFooter.vue';

    export default {
        name: 'PaginaPrincipal',
        components: {
            NavBar,
            HomeFooter,
        },
        data() {
            return {
                isMenuVisible: false
            }
        },
        methods: {
            toggleMenu() {
                this.isMenuVisible =!this.isMenuVisible;
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

.menu-icon {
    height: 50px;
    width: 50px;
    position: fixed;
    left: 15px;
    top: 15px;
    z-index: 11;
    cursor: pointer;
    transition: filter 0.3s ease-in-out;

    &:hover {
        filter: drop-shadow(
            0 0 8px $cor5b
        );
    }
}
</style>