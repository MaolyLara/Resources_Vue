<template>
  <div id="app">
    <h2>{{titles}}</h2>
    <div class="container">
      <div class="form">
        <div class="form-grupo">
          <label>Name</label>
          <input type="text" class="form-control" v-model="registered.name1">
        </div>
        <div class="form-grupo">
          <label>school</label>
          <input type="text" class="form-control" v-model="registered.school">
        </div>
        <br>
        <button class="btn btn-primary" @click="addStudent">Save</button>
      </div>
      <hr>
      <div class="row">
        <div class="col-5" v-for="registered in registered">
          <div class="card">
            <div class="form-grupo">
              <h2>{{registered.name1}}</h2>
              <hr>
              <p>{{registered.school}}</p>
              <hr>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titles: 'Welcome to Your Team Getter',
      registered:{
        name1: ' ',
        school: ' '
      },
      registered:[
       
      ]
    }
  },
  methods:{
    addStudent: function() {
      const{name1, school} = this.registered;  
      this.registered.push({
        name1,
        school
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
