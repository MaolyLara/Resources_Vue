<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <App-Greet />
    <!--<App-Greet/>
    <App-Greet?>-->
    <hr />
    <center>
      <App-UserData names="Raúl Garcia" city="Manaus" mail="raul@gmail.com" :age= 2></App-UserData> <hr>
      <App-UserData names="Ivanna Garcia"  mail="ivanna@gmail.com" :age= "1"></App-UserData> <hr>
      <App-UserData names="Alfert Garcia" city="Caracas" mail="alfert@gmail.com" :age="37"></App-UserData> <hr>
    </center>
    <send inline-template>
      <h1>
        Linear- Template
        <br />
        <button>Send</button>
      </h1>
    </send>
  </div>
</template>

<script>
//import greet from './components/greet'
import MessageGreet from "./components/MessageGreet.vue";

export default {
  name: "app",
  components: {
    "App-Greet": MessageGreet,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
