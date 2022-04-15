
<template>
    <div>
        num1:
        <input v-model.number="num1" style="width:100px" />
        <br />num2:
        <input v-model.number="num2" style="width:100px" />
    </div>
    <span>加法等于:{{ addNum }}</span>
    <br />
    <span>减法等于:{{ subNum }}</span>
    <br />
    <span>平均等于:{{ averageNum }}</span>
</template>

<script setup>
import { ref } from 'vue'
import useAdd from './useAdd.js'
import { useSub } from './useSub.js'
import {useAverage} from './useAverage.js'

const num1 = ref(2)
const num2 = ref(1)
//加法功能-自定义Hook（将响应式变量或者方法形式暴露出来）
const { totalNum:addNum, addFn } = useAdd({ num1, num2 })
// addFn(num1.value, num2.value)
//减法功能-自定义Hook (将响应式变量或者方法形式暴露出来)
const { totalNum:subNum, subFn } = useSub({ num1, num2 })
// subFn(num1.value, num2.value)

//平均功能-自定义Hook- hook传入参数值来其他hook暴露出来的变量
const { averageNum, averageFn} = useAverage(addNum)
averageFn(addNum.value)
</script>
