<script setup lang="ts">
import data from "../../data.json"
</script>

<template>
    <div>
        <div v-for="value in data">
            {{value.id}}:
            <NuxtLink :to='"/MyFavGame/"+value.id'>{{value.name}}</NuxtLink>
        </div>
    </div>

</template>

