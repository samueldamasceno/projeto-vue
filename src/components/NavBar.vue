<template>
    <div class="navbar">
        <div class="container-itens">
            <img src="../assets/home-icon.svg" alt="Home Icon" />
            <img src="../assets/search-icon.svg" alt="Search Icon" />
            <img src="../assets/discover-icon.svg" alt="Discover Icon" />
            <img src="../assets/profile-icon.svg" alt="Profile Icon" />
        </div>
        <div class="container-itens">
            <img src="../assets/create-icon.svg" alt="Create Icon" />
            <img src="../assets/settings-icon.svg" alt="Settings Icon" />
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'NavBar',
};
</script>
  
<style scoped lang="scss">
@import '../assets/scss/variables';

.navbar {
    background-color: $cor4;
    width: 80px;
    height: 100vh;
    left: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    transform: translateX(0);
    z-index: 5;

    img {
        margin-bottom: 10px;
        cursor: pointer;
        width: 40px;
        height: 40px;
        transition: filter 0.5s ease-in-out;
        }

    .container-itens {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        &:first-child{
            margin-top: 80px;

            img {
                &:hover {
                    filter: drop-shadow(
                        0 0 8px $cor1b
                    )
                }
            }
        }

        &:nth-child(2) {
            margin-top: auto;
            margin-bottom: 5px;

            img {
                &:hover {
                    filter: drop-shadow(
                        0 0 8px $cor3b
                    )
                }
            }
        }
    }
}

.navbar-enter-active, .navbar-leave-active {
    transition: transform 0.5s ease-in-out;
}

.navbar-enter-active {
    transform: translateX(-100%);
}

.navbar-leave-active {
    transform: translateX(0);
}

.navbar-enter-from, .navbar-leave-to {
    transform: translateX(-100%);
}

.navbar-enter-to, .navbar-leave {
    transform: translateX(0);
}

</style>