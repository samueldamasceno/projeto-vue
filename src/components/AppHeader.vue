<template>
    <header class="header">
        <img src="../assets/menu-icon.svg" alt="Menu Icon" class="menu-icon" @click="$emit('toggle-menu')"/>
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

    .menu-icon {
        height: 50px;
        width: 50px;
        position: absolute;
        left: 15px;
        top: 15px;
        z-index: 5;
        cursor: pointer;
        transition: filter 0.5s ease-in-out;

        &:hover {
            filter: drop-shadow(
                0 0 8px $cor5b
            );
        }
    }

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

    /* &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('../assets/background1.jpg');
        background-size: cover;
        background-position: center;
        opacity: 0.2;
        background-repeat: no-repeat;
        filter: grayscale(100%);
        z-index: 0;
    } */
}
</style>
