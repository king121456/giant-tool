<template>
  <div >
      <div class="sidebar">
          <main-menu></main-menu>
      </div>
      <div class="content" style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
          <router-view ></router-view>
      </div>
  </div>
</template>

<script>
  import MainMenu from './MainMenu'

  export default {
    name: 'landing-page',
    components: {MainMenu},
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
    .sidebar{
        position: fixed;
        width: 15%;
        overflow-x:hidden;
        overflow-y: auto;
        left:0;
        bottom: 0;
        top:0;
        background-color: #545c64;
    }

    .content{
        position: relative;
        max-width: 65%;
        margin: 0 auto;
        padding: 20px 15px;
        height: 100%
    }
</style>
