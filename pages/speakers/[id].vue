<!--
    Page description for a single speaker.
-->
<template>
    <main>
        <div class = "info-group">
            <img id = "main-img" :src = "speaker.photo.url" :alt="speaker.photo.alt" />
            <div id = "data-container">
                <p class = "data">Name: <span>{{ speaker.name }}</span></p>
                <p class = "data">Surname: <span>{{ speaker.surname }}</span></p>
                <p class = "data">Lectures: <span>{{ lectures }}</span>  </p>
            </div>
        </div>
        <h2>Short CV</h2>
        <p id = "description" v-html = "newLineOnFullStop(speaker.description)"></p>
      <div>
        <h3>More Info about this Speaker's Lectures</h3>
        <div class = "info-group">
          <SmallCard v-for="l of speaker.lectures" :title = "l.title" :link = "'/lectures/' + l.alias" />
        </div>
      </div>
      <div>
        <h3>Other Speakers</h3>
        <div class = "info-group">
          <button @click="changeIndex(-1)" v-if="!!others[index-1]">prev</button>
          <SmallCard v-for="s of others[index]"  :title = "s.name " :subtitle = "s.surname" :link = "'/speakers/' + s.alias" />
          <button @click="changeIndex(1)" v-if="!!others[index+1]">next</button>
        </div>
      </div>



    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const index = ref(0)

    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: speaker } = await useFetch('/api/speakers/' + id)
    const { data: all } = await useFetch('/api/speakers/')
    const lectures = computed(() => {
      return getLectures(speaker.value)
    })

    const others = computed(() => {
      const arr = []
      // Add only the other speakers in the list
      for(let s of all.value) {
        if(s.alias !== id){
          arr.push(s)
        }
      }
      // Returning the list
      return showFive(arr)
    })

    function changeIndex(value) {
      if(value < 0){
        index.value--
      }else {
        index.value++
      }
    }


    /* Head: title, description, site_name */
    useHead({
      title: speaker.value.name + " " + speaker.value.surname + " - CYZ Summer School",
      meta: [
        {
          name: "description",
          content: speaker.value.description
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