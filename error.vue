<!--
    This is an error page.
    Whenever a route that doesn't exist is called, this page will be shown.
-->
<template>
    <NuxtLayout>
        <main>
            <h1>Oops, something went wrong with your request</h1>
          <NuxtLink :to = "path" v-if="!!path">RETURN TO THE LAST AVAILABLE PAGE</NuxtLink>
          <NuxtLink to = "/">RETURN TO HOME PAGE</NuxtLink>
        </main>
    </NuxtLayout>
</template>

<script setup>
  const route = useRoute()
  const availablePath = ["speakers", "lectures", "activities", "about", "contact", "daily-schedule"]
  const path = computed(() => {
    const pathArray = route.path.split('/')
    if(availablePath.includes(pathArray[1])){
      do{
        pathArray.pop()
      }while (pathArray.length > 2)
      const p = pathArray.join('/')
      return p
    }
    else{
      return null
    }
  })


</script>