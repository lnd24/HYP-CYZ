<!--
    Page description for a single location.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" :src = "url" />
            <div id = "data-container">
                <p class = "data">Title: <span>{{ activity.title }}</span></p>
                <p class = "data">Type: <span>{{ activity.type }}</span></p>
                <p class = "data">City: <span>{{ activity.schedule.location }}</span></p>
                <p class = "data">Date: <span>{{ activity.schedule.date + ":  " + activity.schedule.startT + " - " + activity.schedule.endT }}</span></p>
            </div>
        </div>
      <h2>Description</h2>
      <!--
          v-html allows us to change the structure of a HTML element.
          It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
          This function is a composable that is available anywhere, without requiring to be imported.
      -->
      <p id = "description" v-html = "newLineOnFullStop(activity.description)"></p>
      <!-- <SmallCard :title = "dog.location.name" :subtitle = "dog.location.city" :link = "'/locations/' + dog.location.id" /> -->
    </main>
</template>

<script setup>
  const route = useRoute()
  const id = route.params.id
  // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
  const { data: activity } = await useFetch('/api/activities/' + id)
  const url = '/img/' + activity.value.picture[0].url

</script>

<style>
    #main-img {
    width: 30%;
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

    .data {
        font-weight: bolder;
        font-size: 20pt
    }

    .data span {
        font-weight: 100;
        font-size: 15pt;
    }

    #description {
        padding: 0 20px 0 20px;
        font-size: 15pt;
    }
</style>