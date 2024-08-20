<template>
    <header :class="['header', headerClass]">
        <img src="../assets/menu-icon.svg" alt="Menu Icon" class="menu-icon" @click="toggleMenu"/>
        <input type="text" placeholder="Pesquise um livro ou autor aqui!" />
        <Transition name="navbar">
            <NavBar v-if="isMenuVisible" />
        </Transition>
    </header>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: 'HomeHeader',
    components: {
        NavBar
    },

    props: {
        headerBehavior: {
            type: String,
            default: 'dinamico',
            validator: value => ['dinamico', 'pequeno', 'grande'].includes(value)
        }
    },

    data() {
        return {
            isScrolled: false,
            isMenuVisible: false
        };
    },

    computed: {
        headerClass() {
            if (this.headerBehavior === 'pequeno') {
                return 'header-pequeno';
            } else if (this.headerBehavior === 'grande') {
                return 'header-grande';
            } else if (this.headerBehavior === 'dinamico') {
                return this.isScrolled ? 'header-pequeno header-fixado' : 'header-grande';
            }
            return '';
        }
    },

    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        },

        handleScroll() {
            if (this.headerBehavior === 'dinamico') {
                this.isScrolled = window.scrollY != 0;
                console.log('isScrolled:', this.isScrolled);
            }
        }
    },

    mounted() {
        if (this.headerBehavior === 'dinamico') {
            window.addEventListener('scroll', this.handleScroll);
        }
    },

    beforeUnmount() {
        if (this.headerBehavior === 'dinamico') {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
};
</script>


<style scoped lang="scss">
@import '../assets/scss/variables';

.header {
    position: relative;
    top: 0;
    background: rgb(35,157,96);
    background: linear-gradient(135deg, rgba(35,157,96,1) 0%, rgba(163,211,131,1) 100%);
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
    width: 100%;
    border-bottom: 6px solid $cor2;
    transition: all 0.3s ease-in-out;

    &.header-pequeno {
        height: 70px;
        padding: 5px 15px;
    }

    &.header-fixado {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 6;
    }

    .menu-icon {
        height: 50px;
        width: 50px;
        cursor: pointer;
        transition: filter 0.3s ease-in-out;
        z-index: 10;

        &:hover {
            filter: drop-shadow(0 0 8px $cor5b);
        }
    }

    input {
        flex: 1;
        padding: 20px;
        border: none;
        border-radius: 5px;
        background-color: $cor5;
        text-align: center;
        font-family: $fonte1;
        font-size: 2rem;
        margin-left: 20px;
        margin-right: 20px;
        transition: all 0.3s ease-in-out;

        &::placeholder {
            color: $cor2;
            transition: color 0.3s ease-in-out;
        }

        &:focus {
            outline: none;
            box-shadow: 0 0 10px $cor4b;
        }

        &:hover {
            cursor: text;
            &::placeholder {
                color: $cor4b;
            }
        }
    }

    &.header-pequeno input {
        padding: 10px;
        font-size: 1.5rem;
    }
}
</style>
