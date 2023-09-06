<!--
    Home page: Welcome
-->
<template>
    <main>
        <h2>
          Welcome!!!
        </h2>
        <img id = "main-img" src = "~/assets/img/home-image.jpg" />
        <h1>
            CYZ Summer School
        </h1>
    </main>
</template>

<script>
  definePageMeta({
    layout: "forindex",
  });
</script>

<script setup>
  /* Head: title, description, site_name */
  useHead({
    title: "Home - CYZ Summer School",
    meta: [
      {
        name: "description",
        content: "Hi here is the CYZ Summer School"
      },
      {
        name: "site_name",
        content: "CYZ Summer School"
      }
    ]
  })
</script>
<style>
    #main-img {
    width: 80%;
    max-width: 1000px;
    height: auto;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info-group {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
</style>