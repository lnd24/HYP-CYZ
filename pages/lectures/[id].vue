<!--
    Page description for a single dog.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <div class = "info-group">
            <div id = "data-container">
                <p class = "data">Title: <span>{{ lecture.title }}</span>  </p>
                <p class = "data">Speakers: <span>{{ speakers }}</span>
                </p>
              <p class = "data">Schedule: <span>{{ lecture.date + ": &nbsp;" + lecture.startT + " - " + lecture.endT + ", " + lecture.location }}</span> </p>
            </div>
        </div>
        <h2>Description</h2>
        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.
        -->
        <p id = "description" v-html = "newLineOnFullStop(lecture.description)"></p>

      <div>
        <h3>More Info about the Speakers</h3>
        <div class = "info-group">
          <SmallCard v-for="s of lecture.speakers" :title = "s.name + ' ' + s.surname" :link = "'/speakers/' + s.alias" />
        </div>
      </div>
    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: lecture } = await useFetch('/api/lectures/' + id)
    const speakers = computed(() => {
      return getSpeakers(lecture.value)
    })


    /* Head: title, description, site_name */
    useHead({
      title: lecture.value.title + " - CYZ Summer School",
      meta: [
        {
          name: "description",
          content: lecture.value.description
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

    .data span {
        font-weight: 100;
        font-size: 15pt;
    }

    #description {
        padding: 0 20px 0 20px;
        font-size: 15pt;
    }
</style>