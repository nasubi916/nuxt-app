import { ref, computed } from "#imports"; //? 明示的インポート
import type { Ref } from "vue";

export const inc = (count: Ref<number>) => () => count.value++;
export const dec = (count: Ref<number>) => () => count.value--;

export const useNum = () => {
  //* 関数名には先頭に必ずuseをつける
  const count = useState("count",()=>(0))
  const double = computed(() => count.value * 2);

  return {
    count:readonly(count),
    double,
    inc: inc(count),
    dec: dec(count),
  };
};
