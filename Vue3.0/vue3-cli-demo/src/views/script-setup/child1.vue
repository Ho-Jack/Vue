<script>
console.log('script');//多次实例组件,只触发一次
export default {
    setup() {
        console.log('setupFn');//每次实例化组件都触发
    }
}
</script>