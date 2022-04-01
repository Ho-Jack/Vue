
<template>
    <div style="display:flex;flex-direction:column;">
        <p>
            num1:
            <input v-model.number="num1" />
        </p>
        <p>
            num2:
            <input v-model.number="num2" />
        </p>
    </div>

    <span>加法等于:{{ addNum }}</span>
    <br />
    <span>减法等于:{{ subNum }}</span>

    <p>{{ myscript }}</p>
</template>

<script setup>
import { ref, watch, getCurrentInstance } from 'vue'
const num1 = ref(1)
const num2 = ref(2)
//加法功能-Hook
const useAdd = ({ num1, num2 }) => {
    const addNum = ref(0)
    watch([num1, num2], ([num1, num2], [prevNum1, prevNum2]) => {
        add(num1, num2)
    })
    const add = (num1, num2) => {
        console.log(num1, num2);
        addNum.value = num1 + num2
    }
    return {
        addNum,
        add
    }
}
const { addNum, add } = useAdd({ num1, num2 })
add(num1.value, num2.value)
//减法功能-Hook
// watch()
const useSub = ({ num1, num2 }) => {
    const subNum = ref(0)
    const sub = () => {
        subNum.value = num1 + num2
    }
    return {
        addNum,
        sub
    }
}
const { subNum, sub } = useSub({ num1, num2 })

</script>
