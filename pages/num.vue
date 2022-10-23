<script setup lang="ts">
const foo = useFoo()
const { count, double, inc, dec } = useNum();
const card =useNewCard();

/**
 * type User = {
  firstName: string;
  lastName: string;
  age: number;
};
 * ?こうやって先に型宣言することができる
 */
</script>

<template>
    <div>
        <h1>hello japanese</h1>
        {{foo}}<br>
        count:{{count}} ||
        double:{{double}}<br>
        <button type="button" @click="inc"> +++ </button>
        <button type="button" @click="dec"> --- </button>
        card:{{card}}
        <br>
        <NuxtLink to="/">Home</NuxtLink>
    </div>
</template>