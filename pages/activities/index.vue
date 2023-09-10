<!--
    Page with the list of all the activities (2 Lists): Lectures, Social Activities
    Filter by Date
-->
<template>
    <main>
      <div class = "form-container">
        <label for = "date-filter">Date filter</label>
        <select id = "date-filter" v-model = "date">
          <option v-for="d of allDates" :value="d"> {{ d }} </option>
        </select>
      </div>
      <span> {{ date }} </span>
        <h1>Lectures</h1>
      <h3 v-if="filteredLectures.length===0"> No Lecture on {{ date }} </h3>
        <div id="card-container">
            <SmallCard v-for = "(lecture, index) in filteredLectures" :title = "lecture.title" :subtitle = "speakers[index]" :link = "'/lectures/' + lecture.alias" />

        </div>
      <h1>Social Activities</h1>
      <h3 v-if="filteredActivities.length===0"> No Social Activity on {{ date }} </h3>
      <div id="card-container">
        <Card v-for = "social of filteredActivities" :title = "social.title" :subtitle = "social.location" :link = "'/socials/' + social.alias" :img = "social.picture"/>
      </div>
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
        return lectures.value

      const arr = []

      // Filtering the list
      for(let lecture of lectures.value) {
        if(lecture.date === date.value){
          arr.push(lecture)
        }
      }
      // Returning the filtered list
      return arr
    })

    // Speakers of the filtered lectures
    const speakers = computed(() => {
      const arr = []
      for(const l of filteredLectures.value) {
        arr.push(getSpeakers(l))
      }
      return arr
    })

    // Filtering the list of Social Activities
    const filteredActivities = computed(() => {
      // Checking for values where the full list is provided
      if(date.value === 0 || date.value === "")
        return sactivities.value

      const arr = []

      // Filtering the list
      for(let sa of sactivities.value) {
        if(sa.date === date.value){
          arr.push(sa)
        }
      }
      // Returning the filtered list
      return arr
    })


    /* Head: title, site_name */
    useHead({
      title: "Our Activities - CYZ Summer School",
      meta: [
        {
          name: "description",
          content: "This is the Activities List Page of CYZ Summer School"
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


</style>