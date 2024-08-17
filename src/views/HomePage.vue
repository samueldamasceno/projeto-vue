<template>
    <div>
        <HomeHeader/>
        <SecaoLivros 
            titulo="Continue lendo: "
            :livros="livros"
        />
        <SecaoLivros
            titulo="Sugestões para você: "
            :livros="livros"
        />
        <SecaoTopLivros
            :topLivros="livros"
        />
        <SecaoLivros
            titulo="Acabaram de chegar: "
            :livros="livros"
        />
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader.vue';
import SecaoLivros from '@/components/SecaoLivros.vue';
import SecaoTopLivros from '@/components/SecaoTopLivros.vue';

export default {
    name: 'HomePage',
    components: {
        HomeHeader,
        SecaoTopLivros,
        SecaoLivros,
    },
    data() {
        return {
            livros: [
                { id: 1, titulo: 'Livro 1', capa: 'capa.jpg' },
                { id: 2, titulo: 'Livro 2', capa: 'capa2.jpg' },
                { id: 3, titulo: 'Livro 3', capa: 'capa3.jpg' },
                { id: 4, titulo: 'Livro 4', capa: 'capa4.jpg' },
                { id: 5, titulo: 'Livro 5', capa: 'capa5.jpg' },
                { id: 6, titulo: 'Livro 6', capa: 'capa6.jpg' },
                { id: 7, titulo: 'Livro 7', capa: 'capa7.jpg' },
                { id: 8, titulo: 'Livro 8', capa: 'capa8.jpg' },
                { id: 9, titulo: 'Livro 9', capa: 'capa9.jpg' },
                { id: 10, titulo: 'Livro 10', capa: 'capa10.jpg' },
                { id: 11, titulo: 'Livro 11', capa: 'capa11.jpg' },
                { id: 12, titulo: 'Livro 12', capa: 'capa12.jpg' },
                { id: 13, titulo: 'Livro 13', capa: 'capa13.jpg' },
            ]
        };
    },


}
</script>

