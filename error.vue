<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
    Possibility to return to last available page (second level path) or to Home page
-->
<template>
    <NuxtLayout>
        <main class="error">
            <h1>Oops, something went wrong with your request</h1>
          <NuxtLink :to = "path" v-if="!!path">RETURN TO {{ lastAvailable }} PAGE</NuxtLink>
          <NuxtLink to = "/">RETURN TO HOME PAGE</NuxtLink>
        </main>
    </NuxtLayout>
</template>

<script setup>

  const lastAvailable = ref("")
  const route = useRoute()
  const path = computed(() => {
    const pathArray = route.path.split('/')
    /* check path */
    if(getAvailablePaths().includes(pathArray[1])){
      lastAvailable.value = pathArray[1].toUpperCase().replace("-", " ")
      do{
        pathArray.pop()
      }while (pathArray.length > 2)
      return pathArray.join('/')
    }
    else{
      return null
    }
  })


</script>

<style>
.error a{
  color: #022338;
}
</style>
