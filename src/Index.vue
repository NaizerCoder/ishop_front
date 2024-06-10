<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink :to="{name:'one'}">One</RouterLink>
        <RouterLink :to="{name:'two'}">Two</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
