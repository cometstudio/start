<template>
    <div class="other layout">
        <div class="main">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    .main {
        grid-area: main;
        padding: 1rem;
    }

    .layout{
        display: grid;
        height: 100%;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        grid-template-areas:
                "main";

    }
</style>