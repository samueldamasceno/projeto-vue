<template>
    <div>
        <HomeHeader :headerBehavior="headerBehavior" />
        <div class="content">
            <RouterView />
        </div>
        <HomeFooter />
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import HomeFooter from '@/components/HomeFooter.vue';

export default {
    name: 'PaginaPrincipal',
    components: {
        HomeHeader,
        HomeFooter,
    },
    computed: {
        headerBehavior() {
            return this.$route.meta.headerBehavior || '';
        }
    }
};
</script>
