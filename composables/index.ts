// Enables auto import for this export
export { useNewCard } from './nested/useNewCard'

/**
 * ?export,import について俺が知らなかったけど知ったことをここに書いてく
 * exportは変数や関数をそのファイル外に出力する
 * !これをモジュール化という
 * export defaultというものでreturnの省略ができるがリファクタリングの面でやめといた方がいい
 * importの仕方も変わるからめんどっちい
 * 基本は、
 * export const XXX = () => {
 * const YYY =; //?定義
 * 
 * const ZZZ:string = onMounted(() => YYY.value -calc-)//?計算
 * 
 * return{ YYY, ZZZ };//?出力するもの
 * }
 * こんな感じ
 * 
 * functionはわからん
 * function log(引数) {
 * const count = ref(0);
 * console.log(引数:count)←処理
 * return count;←戻り値 なくても良い
 * }
 */