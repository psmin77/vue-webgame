import Vue from 'vue';
import TicTactoe from "./TicTacToe.vue";

new Vue({
    render: createElement => createElement(TicTactoe)
}).$mount('#root');