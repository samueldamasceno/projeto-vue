<template>
    <section class="secao-livros">
        <h2 class="titulo-sec">{{ titulo }}</h2>
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
    name: 'SecaoLivros',
    components: {
        AppLivro
    },
    props: {
        titulo: {
            type: String,
            required: true
        },
        livros: {
            type: Array,
            required: true
        },
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

.secao-livros {
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
        align-items: center;
        overflow-x: hidden;
        overflow-y: hidden;
        scroll-behavior: smooth;
        margin: 0 50px;
        margin-top: 10px;
        padding: 20px 0;
        white-space: nowrap;
        height: auto;
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
  