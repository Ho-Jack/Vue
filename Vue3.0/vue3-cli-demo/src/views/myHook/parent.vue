
<template>
    <div>
        num1:<input v-model.number="num1" style="width:100px" />
        <br />
        num2:<input v-model.number="num2" style="width:100px" />
    </div>
    <span>加法等于:{{ addNum }}</span>
    <br />
    <span>减法等于:{{ subNum }}</span>
</template>

<script setup>
import { ref } from 'vue'
import useAdd from './useAdd.js'
import { useSub } from './useSub.js'

const num1 = ref(2)
const num2 = ref(1)
//加法功能-自定义Hook
const { addNum, add } = useAdd({ num1, num2 })
add(num1.value, num2.value)
//减法功能-自定义Hook
const { subNum, sub } = useSub({ num1, num2 })
sub(num1.value, num2.value)
</script>
