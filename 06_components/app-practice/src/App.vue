<template>
  <div id="app">
    <!--
      header
      main
        img - imagens [props] {global}
      footer
    -->
    <div class="container">
      <div class="row">
        <h1>Hello Team Getter</h1>
      </div>
      <div class="row">
        <h1>Team Getter</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import './public/CSS/bootstrap.min.css'
</style>
<!--
  npm install bootstrap
  // @import '../node_modules/bootsbrap/dist/css/bootsbrap.min.css';
-->