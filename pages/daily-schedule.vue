<!--
    Daily Schedule page: Daily Schedule
-->
<template>
    <main>
      <div>
        <div class="form-container">
          <label for="daily-schedule">Daily Schedule : </label> <input id = "daily-schedule" type = 'date' placeholder = "Daily Schedule" v-model = "currentDate">
        </div>
      </div>
      <div class = "schedule-container">
        <div v-if="filtered.length === 0">
          <h3> No Activity for {{ currentDate }} </h3>
        </div>
        <div class = "info-group" v-for="a of filtered">
          <span> {{ a.schedule.startT + " - " + a.schedule.endT }} </span>
          <SmallCard :title = "a.title" :subtitle = "a.subtitle" :link = "a.link" />
        </div>
      </div>
    </main>
</template>

<script setup>

  const { data: lectures } = await useFetch('/api/lectures')
  const { data: sactivities } = await useFetch('/api/activities')
  const date = new Date();


  let day = date.getDate();
  // Fix day
  day = day<10 ? `0${day}`: day
  let month = date.getMonth() + 1;
  // Fix month
  month = month<10 ? `0${month}`: month
  let year = date.getFullYear();
  const currentDate = ref(`${year}-${month}-${day}`);
  const filteredLectures = () => {

    const arr = []
    // Filtering the list (i : index of the lecture schedule)
    for(let lecture of lectures.value) {
      for(let s of lecture.schedule){
        if(s.date === currentDate.value){
          arr.push({
            title: lecture.title,
            subtitle: s.location,
            link: '/lectures/' + lecture.alias,
            schedule: s
          })
        }

      }
    }

    // Returning the filtered list
    return arr
  }
  const filteredActivities = () => {
    const arr = []
    // Filtering the list
    for(let sa of sactivities.value) {
      for(let s of sa.schedule) {
        if(s.date === currentDate.value){
          arr.push({
            title: sa.title,
            subtitle: sa.type + ', ' + s.location,
            link: '/socials/' + sa.alias,
            schedule: s
          })
        }
      }

    }
    // Returning the filtered list
    return arr
  }

  // sort activities list (lecture + social activity) by start time
  const filtered = computed(() => {
    const arr = [...filteredLectures(), ...filteredActivities()]
    arr.sort((a, b)=> {
      if(a.schedule.startT < b.schedule.startT){
        return -1;
      }
      return 0;
    })
    return arr
  })

  /* Head: title, site_name */
  useHead({
    title: "Daily Schedule - CYZ Summer School",
    meta: [
      {
        name: "description",
        content: "This is the Daily Schedule Page"
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