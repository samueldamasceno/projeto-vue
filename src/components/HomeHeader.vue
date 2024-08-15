<template>
    <header class="header">
        <input type="text" placeholder="Pesquise um livro ou autor aqui!" />
    </header>
</template>

<script>
    export default {
        name: 'HomeHeader',
    };
</script>

<style scoped lang="scss">
@import '../assets/scss/variables';

.header {
    position: relative;
    background: rgb(35,157,96);
    background: linear-gradient(135deg, rgba(35,157,96,1) 0%, rgba(163,211,131,1) 100%);
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    overflow: hidden;
    border-bottom: 6px solid $cor2;

    input {
        flex: 1;
        padding: 20px;
        border: none;
        border-radius: 5px;
        background-color: $cor5;
        border: none;
        border-radius: 8px;
        position: relative;
        font-family: $fonte1;
        text-align: center;
        font-size: 2rem;
        margin-left: 20%;
        margin-right: 20%;
        z-index: 3;
        transition: box-shadow 0.3s ease-in-out;

        &::placeholder {
            transition: all 0.3s ease-in-out;

            @media screen and (max-width: 800px) {
                font-size: 1.5rem;
            }
        }

        &:focus {
            outline: none;
            border: none;
            box-shadow: 0 0 10px $cor4b;
        }

        &:hover {
            cursor: text;
            
            &::placeholder {
                color: $cor3;
            }
        }
    }
}
</style>
