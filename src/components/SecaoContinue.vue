<template>
    <section class="secao-continue">
        <h2 class="titulo-sec">Continue Lendo:</h2>
        <div class="fundo-livros">
            <button class="botao-nav anterior" @click="scrollEsq">&#10094;</button>
            <div class="livros" ref="livros">
                <AppLivro
                    v-for="livro in livros"
                    :key="livro.id"
                    :titulo="livro.titulo"
                    :autor="livro.autor"
                    :capa="livro.capa"
                />
            </div>
            <button class="botao-nav proximo" @click="scrollDir">&#10095;</button>
        </div>
    </section>
</template>
  
<script>
import AppLivro from './AppLivro.vue';
  
export default {
    name: 'SecaoContinue',
    components: {
        AppLivro
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

    methods: {
        scrollEsq() {
            this.$refs.livros.scrollBy({
                left: -600,
                behavior: 'smooth'
            });
        },

        scrollDir() {
            this.$refs.livros.scrollBy({
                left: 600,
                behavior: 'smooth'
            });
        }
    }
};
</script>
  
<style scoped lang="scss">
@import '../assets/scss/variables';
  
.secao-continue {
    margin: 50px 0;
  
    .titulo-sec {
        font-size: 2rem;
        font-family: $fonte1;
        color: $cor4;
        text-align: left;
        margin-left: 50px;
        margin-bottom: 20px;
    }
  
    .fundo-livros {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: $cor4;
        padding: 20px;
        margin: 0 20px;
        border-radius: 10px;
    }
  
    .livros {
        display: flex;
        overflow-x: hidden;
        overflow-y: hidden;
        scroll-behavior: smooth;
        margin: 0 50px;
        margin-top: 20px;
        white-space: nowrap;
    }
  
    .botao-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.5);
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        color: white;
        padding: 15px;
        cursor: pointer;
        z-index: 5;
        transition: background-color 0.3s;
  
        &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        }
  
        &.anterior {
        left: 10px;
        }

        &.proximo {
        right: 10px;
        }
    }
}
</style>
  
  