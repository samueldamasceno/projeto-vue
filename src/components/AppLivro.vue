<template>
    <div :class="['livro', tamanhoClass]">
        <img :src="capa || require('../assets/capa-padrao.jpg')" :alt="titulo" @error="handleImageError" />
        <p>{{ titulo }}</p>
    </div>
</template>
  
<script>
    export default {
        name: 'AppLivro',

        props: {
            titulo: {
                type: String,
                required: true
            },
            autor: {
                type: String,
                required: false
            },
            capa: {
                type: String,
                required: false
            },
            tamanho: {
                type: String,
                default: 'normal'
            }
        },

        computed: {
            tamanhoClass() {
                return this.tamanho === 'grande' ? 'livro-grande' : 'livro-normal';
            }
        },

        methods: {
            handleImageError(event) {
                event.target.src = require('../assets/capa-padrao.jpg');
            }
        }
    };
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

.livro {
    min-width: 120px;
    width: 120px;
    height: 200px;
    text-align: center;
    margin: 0 10px;
    border-radius: 10px;
    transition: all 0.4s;
    transform-origin: center;

    &:hover {
        transform: scale(1.05);
    }

    &.livro-grande {
        min-width: 180px;
        width: 180px;
        height: 300px;
    }

    img {
        width: 100%;
        height: calc(100% - 40px);
        object-fit: cover;
        border-radius: 8px;
    }

    p {
        font-size: 1rem;
        color: $cor5;
    }
}
</style>
