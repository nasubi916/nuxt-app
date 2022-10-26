<template>
	<div class="container-fluid">
		<h1>Next Page</h1>
		<NuxtLink to="/">Home!!!</NuxtLink>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: 'custom',
	middleware:'route',
	//?ここで設定
})

/**
 * * comment
 * ! careful
 * ? question
 * TODO todo list
 * @param layout
 */

</script>

メタデータを変更することでレイアウトを変えられる