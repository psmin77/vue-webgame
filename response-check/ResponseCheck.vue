<template>
    <div>
        <div id="screen" :class="state" @click="onClickScreen">{{ message }}</div>
        <template v-if="result.length">
            <div> 평균 시간 : {{ average }} ms </div>
            <button @click="onReset"> 리셋 </button>
        </template>
    </div>
</template>

<script>
    let startTime = 0;
    let endTime = 0;
    let timeout = null;

    export default {
        data() {
            return {
                result: [],
                state: 'waiting',
                message: '클릭하면 시작합니다.',
            }
        },
        computed: {
            average() {
                return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
            }
        },
        methods: {
            onReset() {
                this.result = [];
            },

            onClickScreen() {
                if ( this.state === 'waiting' ) { // 대기 중일 때
                    this.state = 'ready';
                    this.message = '초록색이 되면 클릭하세요.'

                    timeout = setTimeout( () => {
                        this.state = 'now';
                        this.message = '지금 클릭하세요.'
                        startTime = new Date();
                    }, Math.floor(Math.random() * 1000) + 2000 ); // 2~3초

                } else if ( this.state === 'ready' ) { // 준비 중일 때
                    clearTimeout(timeout);
                    this.state = 'waiting';
                    this.message = '아직 대기중입니다. 다시 시작하려면 클릭하세요.';

                } else if ( this.state === 'now' ) { // 진행 중일 때
                    endTime = new Date();
                    this.state = 'waiting'
                    this.message = '클릭하면 다시 시작합니다.'
                    this.result.push(endTime - startTime);
                }
            }
        }
    };
</script>

<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
    }
    #screen.waiting {
        background-color: aqua;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now {
        background-color: greenyellow;
    }
</style>