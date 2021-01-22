<template>
  <div >
      <div class="sidebar">
          <main-menu></main-menu>
      </div>
      <div class="content">
          <div style="margin-top: 3px;padding:10px;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);background: #cfdac8;border-radius: 5px">
              <router-view ></router-view>
          </div>
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
        background-color: #7c9473;
    }

    .content{
        position: absolute;
        left: 15%;
        width: 85%;
        margin: 0 auto;
        padding: 20px 15px;
        height: 100%;
        background-color:#f8f8f8;
    }
</style>
