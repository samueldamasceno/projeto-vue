<template>
    <div>
        <HomeHeader/>
        <SecaoContinue/>
        <SecaoSugestoes/>
        <SecaoTopLivros/>
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import SecaoContinue from '@/components/SecaoContinue.vue';
import SecaoSugestoes from '@/components/SecaoSugestoes.vue';
import SecaoTopLivros from '@/components/SecaoTopLivros.vue';

export default {
    name: 'HomePage',
    components: {
        HomeHeader,
        SecaoContinue,
        SecaoSugestoes,
        SecaoTopLivros
    },

}
</script>

