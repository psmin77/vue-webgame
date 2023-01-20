import Vue from 'vue';
import VueRouter from 'vue-router';
import NumberBaseball from '../number-baseball/NumberBaseball'
import ResponseCheck from '../response-check/ResponseCheck'
import RockScissorsPaper from '../rock-scissors-paper/RockScissorsPaper'
import LottoGenerator from '../lotto/LottoGenerator'
import GameMatcher from "./GameMatcher.vue";

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    routes: [
        { path: '/number-baseball', component: NumberBaseball },
        { path: '/response-check', component: ResponseCheck },
        { path: '/rock-scissors-paper', component: RockScissorsPaper },
        { path: '/lotto-generator', component: LottoGenerator },
        { path: '/game/:name', component: GameMatcher } // :name 값이 동적으로 매칭됨
    ],
});