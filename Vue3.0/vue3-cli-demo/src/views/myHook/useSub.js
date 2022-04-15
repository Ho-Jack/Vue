//减法功能-Hook
import { ref, watch } from 'vue';
export function useSub  ({ num1, num2 }){
    const totalNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        subFn(num1, num2)
    })
    const subFn = (num1, num2) => {
        totalNum.value = num1 - num2
    }
    return {
        totalNum,
        subFn
    }
}