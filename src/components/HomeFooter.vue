<template>
    <div>
        <footer>

        </footer>
    </div>
</template>

<script>
    export default {
        name: 'HomeFooter',
    }
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

footer {
    position: relative;
    bottom: 0;
    left: 0;
    height: 60px;
    width: 100%;
    background-color: $cor4;
    color: $cor1;
    padding: 20px;
    text-align: center;
    border-top: 6px solid $cor3;
}
</style>