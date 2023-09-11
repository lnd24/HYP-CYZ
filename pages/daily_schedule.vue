<!--
    Daily Schedule page: Daily Schedule
-->
<template>
    <main>
      <PageTitle title="Daily Schedule" description = "The Programme takes place between 10 - 19 July 2024. The detailed daily schedule is presented here. Lectures and activities are included." />
      <div>
        <div class="form-container">
          <label id="daily-schedule" for="daily-schedule">Daily Schedule: </label> <input class= "schedule-filter" id = "daily-schedule" type = 'date' placeholder = "Daily Schedule" v-model = "currentDate" :max="endDate" :min="startDate">
        </div>
      </div>
      <div class = "schedule-container">
        <div v-if="filtered.length === 0">
          <h2> No Activities for {{ currentDate }} </h2>
        </div>
        <div class = "info-group" v-for="a of filtered">
          <span id="scheduled-time"> {{ a.schedule }} </span>
          <Banner :title = "a.title" :subtitle = "a.subtitle" :link = "a.link" />
        </div>
      </div>
    </main>
</template>

<script setup>

  const { data: lectures } = await useFetch('/api/lectures')
  const { data: sactivities } = await useFetch('/api/activities')

  const startDate = ref("2024-07-10")
  const endDate = ref("2024-07-19")

  const currentDate = ref("2024-07-10");

  const filteredLectures = () => {

    const arr = []
    // Filtering the list (i : index of the lecture schedule)
    for(let lecture of lectures.value) {
      if(lecture.date === currentDate.value){
        arr.push({
          title: lecture.title,
          subtitle: lecture.location,
          link: '/lectures/' + lecture.alias,
          schedule: lecture.startT + ' - ' + lecture.endT
        })
      }
    }

    // Returning the filtered list
    return arr
  }
  const filteredActivities = () => {
    const arr = []
    // Filtering the list
    for(let sa of sactivities.value) {
        if(sa.date === currentDate.value){
          arr.push({
            title: sa.title,
            subtitle: sa.location,
            link: '/socials/' + sa.alias,
            schedule: sa.startT + ' - ' + sa.endT
          })
        }
    }
    // Returning the filtered list
    return arr
  }

  // sort activities list (lecture + social activity) by start time
  const filtered = computed(() => {
    const arr = [...filteredLectures(), ...filteredActivities()]
    arr.sort((a, b)=> {
      if(a.schedule < b.schedule){
        return -1;
      }
      return 1;
    })
    return arr
  })

  /* Head: title, description, site_name */
  useHead({
    title: "Daily Schedule - CYZ Summer School",
    meta: [
      {
        name: "description",
        content: "CYZ Summer School: The Programme takes place between 10 - 19 July 2024. The detailed daily schedule is presented here. Lectures and activities are included."
      },
      {
        name: "site_name",
        content: "CYZ Summer School"
      }
    ]
  })


</script>
<style>

    .info-group {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: left;
      justify-content: center;
      gap: 40px;
    }

    #daily-schedule {
      font-size: 16pt;
      vertical-align: center;
      padding: 5px;
    }

    .schedule-filter {
      font-size: 15pt;
      font-family: 'Raleway', sans-serif;
      padding: 5px;
    }

    #scheduled-time {
      font-size: 15pt;
    }


</style>