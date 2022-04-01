<script lang='jsx'>
import { defineComponent, useSlots } from "vue";
export default defineComponent({
  setup() {
    // 获取插槽数据
    const slots = useSlots();
    // 渲染组件
    return () => (
      <div>
        {slots.default?slots.default():''}
        {slots.title?slots.title():''}
      </div>
    );
  },
});
</script>