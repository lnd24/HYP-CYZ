<!--
    Page with the list of all the activities (2 Lists): Lectures, Social Activities (show max 3 elements per list)
    Filter by Date
-->
<template>
    <main>
      <PageTitle title="Activities" description = "Check out the activities proposed by us, including lectures and social activities." />
        <h1>Lectures</h1>
      <h3 v-if="filteredLectures.length===0"> No Lecture on {{ date }} </h3>
        <div id="card-container">
            <SmallCard v-for = "(lecture, index) in filteredLectures[0]" :title = "lecture.title" :subtitle = "speakers[index]" :link = "'/lectures/' + lecture.alias" />
        </div>
      <NuxtLink to="/lectures"><button id="see_all_button">See All Lectures</button></NuxtLink>
      <h1>Social Activities</h1>
      <h3 v-if="filteredActivities.length===0"> No Social Activity on {{ date }} </h3>
      <div id="card-container">
        <Card v-for = "social of filteredActivities[0]" :title = "social.title" :subtitle = "social.location" :link = "'/socials/' + social.alias" :img = "social.picture"/>
      </div>
      <NuxtLink to="/socials"><button id="see_all_button">See All Social Activities</button></NuxtLink>
    </main>
</template>

<script setup>

    const { data: lectures } = await useFetch('/api/lectures')
    const { data: sactivities } = await useFetch('/api/activities')

    const date = ref("");

    /* Get all the available dates (of lectures and social activities) */
    const allDates = computed(() => {

      /* add the choice to clean the filter */
      const arr = [""]
      const activities = [...lectures.value, ...sactivities.value]

      // Activities' dates
      for(let a of activities) {
        if(!arr.includes(a.date)){
            arr.push(a.date)
        }
      }
      return arr.sort()
    })
    // Filtering the list of Lectures
    const filteredLectures = computed(() => {
      // Checking for values where the full list is provided
      if(date.value === 0 || date.value === "")
        return showN(lectures.value, 3)

      const arr = []

      // Filtering the list
      for(let lecture of lectures.value) {
        if(lecture.date === date.value){
          arr.push(lecture)
        }
      }
      // Returning the filtered list
      return showN(arr, 3)
    })

    // Speakers of the filtered lectures
    const speakers = computed(() => {
      const arr = []
      for(const l of filteredLectures.value[0]) {
        arr.push(getSpeakers(l))
      }
      return arr
    })

    // Filtering the list of Social Activities
    const filteredActivities = computed(() => {
      // Checking for values where the full list is provided
      if(date.value === 0 || date.value === "")
        return showN(sactivities.value, 3)

      const arr = []

      // Filtering the list
      for(let sa of sactivities.value) {
        if(sa.date === date.value){
          arr.push(sa)
        }
      }
      // Returning the filtered list
      return showN(arr, 3)
    })


    /* Head: title, description, site_name */
    useHead({
      title: "Our Activities - CYZ Summer School",
      meta: [
        {
          name: "description",
          content: "This is the Activities List Page of CYZ Summer School: Check out the activities proposed by us, including lectures and social activities."
        },
        {
          name: "site_name",
          content: "CYZ Summer School"
        }
      ]
    })


</script>

<style>
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    #see_all_button {
      z-index: 1;
      font-size: 14pt;
      margin: 40px 0 100px 0;
      padding: 10px 15px 10px 15px;
      color: #ffffff;
      font-family: "Century Gothic", sans-serif;
      background-color: #535469;
      border: 0.3vh solid lightgray;
      border-radius: 3px;
      transition: all .5s;
      cursor: pointer;
    }

    #see_all_button:hover {
      background-clip: padding-box;
      background-color: #9facbb;
      color: #192B59;
    }


</style>