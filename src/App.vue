<template>
  <div class="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
    const default_layout = 'default'

    export default {
        name: 'app',
        computed: {
            layout(){
                return (this.$route.meta.layout || default_layout) + '-layout'
            }
        }
    }
</script>

<style lang="scss">
  @import "scss/app";
</style>
