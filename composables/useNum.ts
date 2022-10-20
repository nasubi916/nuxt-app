import { ref, computed } from '#imports'//? Refの明示的インポート

export const useNum = () => {//* 関数名には先頭に必ずuseをつける
    const count = ref(0);
    const double = computed(() => count.value * 2);

	return { count, double };
};