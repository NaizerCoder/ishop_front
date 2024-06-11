<template>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{name:'one'}">One </RouterLink>
        <RouterLink :to="{name:'two'}">Two</RouterLink>
      </nav>
    </div>
    <RouterView></RouterView>
</template>

<script>

</script>

<style>
</style>
