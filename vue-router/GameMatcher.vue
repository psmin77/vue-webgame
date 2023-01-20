<template>
    <div v-if="currentGame === 'number-baseball'">
        <number-baseball></number-baseball>
    </div>
    <div v-else-if="currentGame === 'response-check'">
        <response-check></response-check>
    </div>
    <div v-else-if="currentGame === 'lotto-generator'">
        <lotto-generator></lotto-generator>
    </div>
    <div v-else>일치하는 게임이 없습니다.</div>
</template>

<script>
import NumberBaseball from '../number-baseball/NumberBaseball'
import ResponseCheck from '../response-check/ResponseCheck'
import LottoGenerator from '../lotto/LottoGenerator'

export default {
    components: {
        NumberBaseball,
        ResponseCheck,
        LottoGenerator
    },
    mounted() {
        console.log(this.$router);
        console.log(this.$route);
    },
    computed: {
        currentGame() {
            return this.$route.params.name;
        }
    }
}
</script>