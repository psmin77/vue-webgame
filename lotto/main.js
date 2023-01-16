import Vue from 'vue';
import LottoGenerator from "./LottoGenerator.vue";

new Vue({
    render: createElement => createElement(LottoGenerator)
}).$mount('#root');