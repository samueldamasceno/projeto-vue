<template>
    <header class="header">
        <input type="text" placeholder="Pesquise um livro ou autor aqui!" />
    </header>
</template>

<script>
    export default {
        name: 'AppHeader',
    };
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

.header {
    position: relative;
    background-color: $cor2;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    height: 200px;
    overflow: hidden;

    input {
        flex: 1;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: $cor5;
        border: 3px solid $cor4;
        border-radius: 8px;
        position: relative;
        text-align: center;
        margin-left: 20%;
        margin-right: 20%;
        z-index: 10;
    }
}
</style>
