<!--
    Page description for a single lecture: title, speakers, schedule
      show also the other lecture of this lecture's speakers
-->
<template>
    <main>
        <div class = "info-group">
            <div id = "data-container">
                <p class = "data">Title: <span class="infos"> {{ lecture.title }}</span>  </p>
                <p class = "data">Speakers: <span v-for="(s,index) in lecture.speakers"><NuxtLink id="lec_speaker" :to="'/speakers/' + s.alias">{{ s.name +' '+ s.surname }}</NuxtLink>
                  <span v-if="index < lecture.speakers.length-1">, </span> </span>
                </p>
              <p class = "data">Time: <span class="infos">{{ lecture.date + ", " + lecture.startT + " - " + lecture.endT }}</span> </p>
              <p class = "data">Location: <span class="infos">{{ lecture.location }}</span> </p>
            </div>
        </div>
        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.
        -->
      <span id = "description" v-html = "newLineOnFullStop(lecture.description)"></span>

      <div id="interest">
        <p id="interest_intro">You could be interested in these lectures:</p>
        <div id="card-container">
          <SmallCard v-for="l of otherLectures" :title = "l.title" :link = "'/lectures/' + l.alias" />
        </div>
      </div>
    </main>
</template>

<script setup>
    const route = useRoute()
    const id = route.params.id
    const { data: lecture } = await useFetch('/api/lectures/' + id)

    /* Other lectures of this lecture's speakers */
    const otherLectures = computed(() => {
      const arr = []
      for(let s of lecture.value.speakers){
        for(let l of s.lectures){
          if(l.alias !== id){
            arr.push(l)
          }
        }
      }
      return arr
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
        font-size: 18pt;
    }

    .data a {
      color: #022338;
    }

    .infos {
      font-size: 18pt;
      font-weight: normal;
    }

    #lec_speaker {
      color: #181c91;
      text-decoration: underline;
      font-size: 18pt;
    }

    #data-container {
      margin-top: 50px;
    }

    #interest {
      width: 100%;
      margin-top: 30px;
    }

    #interest_intro {
      margin-left: 20%;
      font-size: 15pt;
      font-weight: bold;
      margin-bottom: 30px;
    }

</style>