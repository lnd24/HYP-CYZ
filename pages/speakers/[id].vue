<!--
    Page description for a single speaker: photo, name, surname, lectures, short CV
      show also the other speakers of the summer school
-->
<template>
    <main>
        <div class = "info-group">
            <img id = "speaker-img" :src = "speaker.photo.url" :alt="speaker.photo.alt" />
            <div id = "data-container">
                <p class = "data">Name: <span class="infos">{{ speaker.name }}</span></p>
                <p class = "data">Surname: <span class="infos">{{ speaker.surname }}</span></p>
                <p class = "data">Lectures: <br><span class="infos">{{ lectures }}</span>  </p>
            </div>
        </div>
        <span id = "description" v-html = "newLineOnFullStop(speaker.description)"></span>
      <div>
        <h3 class="more_info">More Info about this Speaker's Lectures</h3>
        <div id="card-container">
          <SmallCard v-for="l of speaker.lectures" :title = "l.title" :link = "'/lectures/' + l.alias" />
        </div>
      </div>
      <div class="others">
        <h3 class="more_info">Other Speakers</h3>
        <div class = "info-group-others">
          <button class="button_speaker_next_prev" @click="changeIndex(-1)" v-if="!!others[index-1]">&lt;</button>
          <SmallCard v-for="s of others[index]"  :title = "s.name " :subtitle = "s.surname" :link = "'/speakers/' + s.alias" />
          <button class="button_speaker_next_prev" @click="changeIndex(1)" v-if="!!others[index+1]">&gt;</button>
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
      // Returning the list of arrays of max 5 speakers
      return showN(arr, 4)
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
    #speaker-img {
      margin-top: 40px;
      margin-left: 10%;
      max-width: 25%;
    }

    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .others{
      min-width: 100%;
    }

    .info-group-others {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 3%;
    }

    .data {
        font-weight: bolder;
        font-size: 18pt
    }

    .more_info {
      margin-top: 50px;
      margin-bottom: 30px;
      margin-left: 10%;
    }

    #description {
        margin: 60px 20% 60px 20%;
        font-size: 15pt;
    }

    .button_speaker_next_prev {
      margin: 5px;
      background-color: #f3f4fb;
      padding: 10px;
      color: #192B59;
      font-weight: bold;
      font-size: 28pt;
      border: none;
    }

    .button_speaker_next_prev:hover {
      background-clip: padding-box;
      color: #c05e00;
      transition: .5s;
    }


</style>