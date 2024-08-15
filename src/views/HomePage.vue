<template>
    <div>
        <Transition name="navbar">
            <NavBar v-if="isMenuVisible" />
        </Transition>
        <AppHeader @toggle-menu="toggleMenu" />
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'HomePage',
    components: {
        AppHeader,
        NavBar
    },

    data() {
        return {
            isMenuVisible: false
        };
    },

    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        }
    }

}
</script>

<style lang="scss" scoped>

</style>