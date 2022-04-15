//加法功能-Hook
import { ref, watch } from 'vue';
const useAdd= ({ num1, num2 })  =>{
    const totalNum = ref(0)
    watch([num1, num2], ([num1, num2]) => {
        addFn(num1, num2)
    })
    const addFn = (num1, num2) => {
        totalNum.value = num1 + num2
    }
    return {
        totalNum,
        addFn
    }
}
export default useAdd