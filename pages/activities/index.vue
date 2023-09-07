<!--
    Page with the list of all the activities (2 Lists): Lectures, Social Activities
-->
<template>
    <main>
      <div class = "form-container">
        <label for = "date-filter">Date filter</label>
        <select id = "date-filter" v-model = "date">
          <option v-for="d of allDates" :value="d"> {{ d }} </option>
        </select>
        <div> {{ allDates }} </div>
      </div>
      <span> {{ date }} </span>
        <h1>Lectures</h1>
        <div id="card-container">
            <Card v-for = "(lecture, index) in filteredLectures" :title = "lecture.title" :subtitle = "speakers[index]" :link = "'/lectures/' + lecture.alias" :img = "lecture.picture[0].url" />
        </div>
      <h1>Social Activities</h1>
      <div id="card-container">
        <Card v-for = "social of filteredActivities" :title = "social.title" :subtitle = "social.type + ', ' + social.schedule.location" :link = "'/socials/' + social.alias" :img = "social.picture[0].url"/>
      </div>
    </main>
</template>

<script setup>

    const { data: lectures } = await useFetch('/api/lectures')
    const { data: sactivities } = await useFetch('/api/activities')

    const date = ref(0);

    /* Get all the available dates (of lectures and social activities) */
    const allDates = computed(() => {

      /* add the choice to clean the filter */
      const arr = [""]

      // Lectures' dates
      for(let lecture of lectures.value) {
        for(let s of lecture.schedule){
          if(!arr.includes(s.date)){
            arr.push(s.date)
          }

        }
      }

      // Social Activities' dates
      for(let sa of sactivities.value) {
        if(!arr.includes(sa.schedule.date)){
          arr.push(sa.schedule.date)
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
        for(let s of lecture.schedule){
          if(s.date === date.value){
            arr.push(lecture)
          }

        }
      }
      // Returning the filtered list
      return arr
    })

    // Speakers of the filtered lectures
    const speakers = computed(() => {

      const arr = []
      for(const l of filteredLectures.value) {
        let speakers = []
        for(let s of l.speakers){
          speakers.push(s.name + ' ' + s.surname)
        }
        const s = speakers.join(', ').toString()
        arr.push(s)
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
        if(sa.schedule.date === date.value){
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