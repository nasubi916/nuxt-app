<script setup lang="ts">

const foo = useFoo()

const { count, double } = useNum()

</script>

<template>
    <div>
        <h1>hello japanese</h1>
        {{foo}}<br>
        count:{{count}} ||
        double:{{double}}<br>
        <button>add</button>
    </div>
</template>