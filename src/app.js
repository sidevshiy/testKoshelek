import Vue from 'vue';
import App from './App.vue';
import myCore from './plugins/myCore';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/wss://stream.binance.com:9443/ws/';
Vue.use(myCore);

function createApp(){
  return new Vue({
    render: h => h(App),
  })
}


export default createApp;