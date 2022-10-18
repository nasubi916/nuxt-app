<script setup lang="ts">
import data from "../../data.json"
const route = useRoute()
const id = Number(route.params.id)
const MyFavGame = data.find(res => res.id === id)
</script>

<template>
    <div class="container mt-5">
        <div class="card" style="width:18rem;">
            <div class="card-header">
                {{MyFavGame.name}}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list group item">順位：{{MyFavGame.id}}位</li>
            </ul>
            <ul class="list-group list-group-flush">
                <li class="list group item">ジャンル：{{MyFavGame.genre}}</li>
            </ul>
        </div>
        <NuxtLink to="/MyFavGame">戻るか？</NuxtLink>
    </div>
</template>