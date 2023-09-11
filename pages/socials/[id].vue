<!--
    Page description for a single social activity: image, title, schedule, description

-->
<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" :src = "activity.picture.url" :alt = "activity.picture.alt" />
            <div id = "data-container">
                <p class = "data">Title: <span class="infos">{{ activity.title }}</span></p>
                <p class = "data">Time: <span class="infos">{{ activity.date + ": &nbsp;" + activity.startT + " - " + activity.endT }}</span> </p>
                <p class = "data">Location: <span class="infos">{{ activity.location }}</span> </p>

            </div>
        </div>
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


  /* Head: title, description, site_name */
  useHead({
    title: activity.value.title + " - CYZ Summer School",
    meta: [
      {
        name: "description",
        content: activity.value.description
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


</style>