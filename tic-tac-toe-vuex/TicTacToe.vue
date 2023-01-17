<template>
    <div>
        <div> {{ turn }}님의 턴입니다. </div>
        <table-component :table-data="tableData" />
        <div v-if="winner">{{winner}}님의 승리!</div>
    </div>
</template>

<script>
import TableComponent from "./TableComponent.vue";
import EventBus from "./EventBus";

export default {
    components: {
        TableComponent,
    },
    data() {
        return {
             tableData: [
                 ['', '', ''],
                 ['', '', ''],
                 ['', '', ''],
             ],
            turn: 'O',
            winner: '',
        };
    },
    methods: {
        onChangeData() {
            // this.tableData[1][0] = 'X'; 작동하지 않음
            this.$set(this.tableData[1], 0, 'X'); // Vue.set과 동일
        },
        onClickTd(rowIndex, cellIndex){
            this.$set(this.tableData[rowIndex], cellIndex, this.turn);

            let win = false;
            if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
                win = true;
            }
            if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
                win = true;
            }
            if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
                win = true;
            }
            if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
                win = true;
            }

            if (win) { // 이긴 경우 (3줄 달성)
                this.winner = this.turn;
                this.turn = 'O';
                this.tableData = [['','',''],['','',''],['','','']];

            } else {
                let all = true;
                this.tableData.forEach( row => { // 무승부 검사
                    row.forEach( cell => {
                        if (!cell) {
                            all = false;
                        }
                    });
                });
                if (all) { // 무승부
                    this.turn = 'O';
                    this.winner = '';
                    this.tableData = [['','',''], ['','',''], ['','','']];
                } else {
                    this.turn = this.turn === 'O' ? 'X' : 'O';
                }
            }
        }
    },
    created() {
        EventBus.$on('clickTd', this.onClickTd);
    }
};
</script>

<style>
    table {
        border-collapse: collapse;
    }
    td {
        border: 1px solid black;
        width: 40px;
        height: 40px;
        text-align: center;
        vertical-align: middle;
    }
</style>