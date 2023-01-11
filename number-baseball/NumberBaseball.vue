<template>
    <div>
        <h1> {{ result }}</h1>
        <form @submit.prevent="onSubmitForm">
            <input ref="answer" minlength="4" maxlength="4" v-model="value" />
            <button type="submit">입력</button>
        </form>
        <div> 시도: {{tries.length}} </div>
        <ul>
            <li v-for="t in tries">
                <div> {{ t.try }}</div>
                <div> {{ t.result }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    for (let i=0; i<4; i+=1) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
};

export default {
    data() {
        return {
            answer: getNumbers(), // ex) [1,2,3,4]
            tries: [], // 시도 횟수
            value: '', // 입력
            result: '', // 결과
        }
    },
    methods: {
        onSubmitForm() {
            if ( this.value == this.answer.join('') ) { // 정답인 경우 (숫자 + 자리수까지)
                this.tries.push({
                    try: this.value,
                    result: '홈런'
                });
                this.result = '홈런';
                alert('게임을 다시 실행합니다.');
                this.value = '';
                this.answer = getNumbers();
                this.tries = [];
                this.$refs.answer.focus();

            } else { // 정답 아닐 때
                if ( this.tries.length >= 9 ) { // 10번 째 시도
                    this.result = `제한 횟수 10번 실패! <br> 답은 ${this.answer.join(',')} 입니다.`;
                    alert('게임을 다시 실행합니다.');
                    this.value = '';
                    this.answer = getNumbers();
                    this.tries = [];
                    this.$refs.answer.focus();

                } else {
                    let strike = 0;
                    let ball = 0;
                    // 입력한 문자를 숫자 배열로 변환
                    const answerArray = this.value.split('').map(v => parseInt(v));

                    for (let i = 0; i < 4; i += 1) {
                        if (answerArray[i] === this.answer[i]) { // 숫자와 자릿수 모두 일치하면
                            strike++;
                        } else if (this.answer.includes(answerArray[i])) { // 숫자만 일치하면
                            ball++;
                        }
                    }
                    this.tries.push({
                        try: this.value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`
                    });
                    this.value = '';
                    this.$refs.answer.focus();
                }
            }
        }
    },
};
</script>

<style>

</style>