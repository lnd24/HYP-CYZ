<!--
    Daily Schedule page: Daily Schedule
-->
<template>
    <main>
      <PageTitle title="Daily Schedule" description = "The Programme takes place between 10 - 19 July 2024. The detailed daily schedule is presented here. Lectures and activities are included." />
      <div>
        <div class="form-container">
          <label for="daily-schedule">Daily Schedule : </label> <input id = "daily-schedule" type = 'date' placeholder = "Daily Schedule" v-model = "currentDate" :max="endDate" :min="startDate">
        </div>
      </div>
      <div class = "schedule-container">
        <div v-if="filtered.length === 0">
          <h3> No Activities for {{ currentDate }} </h3>
        </div>
        <div class = "info-group" v-for="a of filtered">
          <span> {{ a.schedule }} </span>
          <SmallCard :title = "a.title" :subtitle = "a.subtitle" :link = "a.link" />
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

  /* Head: title, site_name */
  useHead({
    title: "Daily Schedule - CYZ Summer School",
    meta: [
      {
        name: "description",
        content: "This is the Daily Schedule Page of CYZ Summer School"
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