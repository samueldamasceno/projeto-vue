<template>
    <div class="livro">
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
