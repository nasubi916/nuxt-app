<template>
	<div>
		<Navbar />
		<slot />
		<LazyImg /><!--? 表示されるまで読み込まれないようにする-->
	</div>
</template>
