import Vue from 'vue'
import App from './App.vue'
import ButtonSend from './components/ButtonSend.vue'
import UserData from './components/UserData.vue'

//Vue.component('greet', {
//  template: ' <h1> Hello Team Getter from main.js </h1>'
//})
 
//Vue.component('send', button);  --- global scope

Vue.component('send', ButtonSend);
Vue.component('App-UserData', UserData);
new Vue({
  el: '#app',
  render: h => h(App)
})

// vue init webpack-simple app-components

