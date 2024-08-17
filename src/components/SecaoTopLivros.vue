<template>
    <section class="secao-top-livros">
        <h2 class="titulo-sec">Top Livros da Semana:</h2>
        <div class="fundo-livros">
            <button class="botao-nav anterior" @click="scrollEsq">&#10094;</button>
            <div class="livros" ref="livros">
                <div
                    class="livro-item"
                    v-for="(livro, index) in topLivros"
                    :key="livro.id"
                >
                    <span class="numero">{{ index + 1 }}</span>
                    <AppLivro
                        :titulo="livro.titulo"
                        :autor="livro.autor"
                        :capa="livro.capa"
                        tamanho="grande"
                    />
                </div>
            </div>
            <button class="botao-nav proximo" @click="scrollDir">&#10095;</button>
        </div>
    </section>
</template>

<script>
import AppLivro from './AppLivro.vue';

export default {
    name: 'SecaoTopLivros',
    components: {
        AppLivro
    },
    props: {
        topLivros: {
            type: Array,
            required: true
        }
    },

    methods: {
        scrollEsq() {
            this.$refs.livros.scrollBy({
                left: -1000,
                behavior: 'smooth'
            });
        },

        scrollDir() {
            this.$refs.livros.scrollBy({
                left: 1000,
                behavior: 'smooth'
            });
        }
    }
};
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

.secao-top-livros {
    margin: 70px 0;
    background-color: $cor5;
    border-top: 6px solid $cor3;
    border-bottom: 6px solid $cor3;
    padding: 40px 0;

    .titulo-sec {
        font-size: 2.5rem;
        font-family: $fonte1;
        color: $cor3;
        text-align: center;
        margin-bottom: 30px;
    }

    .fundo-livros {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 20px 0;
        background-color: $cor4;
        margin: 0 0;
        border-radius: 0;
    }

    .livros {
        display: flex;
        align-items: center;
        overflow-y:hidden;
        overflow-x: hidden;
        scroll-behavior: smooth;
        white-space: nowrap;
        height: auto;
        padding: 30px 20px;
        margin: 0 20px;

        .livro-item {
            position: relative;
            margin: 0 10px;

            .numero {
                position: absolute;
                top: -10px;
                left: -10px;
                background-color: $cor3;
                color: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
                font-weight: bold;
                font-family: $fonte1;
                z-index: 6;
                transition: all 0.4s ease-in-out;
            }

            &:hover {
                transform: scale(1.1);
            }
        }
    }

    .botao-nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.7);
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        z-index: 5;
        transition: background-color 0.3s;

        &:hover {
            background-color: rgba(0, 0, 0, 0.9);
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
