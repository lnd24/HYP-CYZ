<!--
    Home page: Welcome + Daily Schedule
-->
<template>
    <main>
        <h2>
          Welcome!!!
        <a href="#daily-schedule"><button>Daily Schedule</button> </a>
        </h2>
        <img id = "main-img" src = "~/assets/img/home-image.jpg" />
        <h1>
            CYZ Summer School
        </h1>

      <div>
        <div class="form-container">
          <label for="daily-schedule">Daily Schedule : </label> <input id = "daily-schedule" type = 'date' placeholder = "Daily Schedule" v-model = "currentDate">
        </div>
        <span>{{currentDate}}</span>
      </div>
      <div>
        <div class = "info-group" v-for="a of filtered">
          <span> {{ a.schedule.startT + " - " + a.schedule.endT }} </span>
          <SmallCard :title = "a.title" :subtitle = "a.subtitle" :link = "a.link" />
        </div>
      </div>
    </main>
</template>

<script>
  definePageMeta({
    layout: "forindex",
  });
</script>

<script setup>
  const { data: lectures } = await useFetch('/api/lectures')
  const { data: sactivities } = await useFetch('/api/activities')
  const date = new Date();
  let day = date.getDate();
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
        if(s.date == currentDate.value){
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
      if(sa.schedule.date == currentDate.value){
        arr.push({
          title: sa.title,
          subtitle: sa.type + ', ' + sa.schedule.location,
          link: '/activities/' + sa.alias,
          schedule: sa.schedule
        })
      }
    }
    // Returning the filtered list
    return arr
  }

  // activities list (lecture + social activity)
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