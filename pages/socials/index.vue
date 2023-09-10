<!--
    Page with the list of all the social activities + Searcher and Data Filter
-->
<template>
    <main>
      <div class = "form-container">
        <label for = "sactivity-searcher">Search</label><input id = "sactivity-searcher" type = 'text' placeholder = "Social Activity Searcher" v-model = "word">
        <label for = "date-filter">Date filter</label>
        <select id = "date-filter" v-model = "date">
          <option v-for="d of allDates" :value="d"> {{ d }} </option>
        </select>
      </div>
        <h1>Social Activities</h1>
        <div id="card-container">
            <Card v-for = "sa in filteredByDate" :title = "sa.title" :subtitle = "sa.location" :link = "'/socials/' + sa.alias" :img = "sa.picture" />
        </div>
    </main>
</template>

<script setup>

    const { data: sactivities } = await useFetch('/api/activities')

    /*
        Search the social activities which title includes the key word
    */
    const word = ref("");
    const date = ref(0);

    const filtered = computed(() => {
      // Checking for values where the full list is provided
      if(word.value === "")
        return sactivities.value

      const arr = []

      // Filtering the list
      for(let sa of sactivities.value) {
        //search the keyword in activities' title (all in Uppercase)
        if(sa.title.toUpperCase().includes(word.value.toUpperCase())){
          arr.push(sa)
        }

      }
      // Returning the filtered list
      return arr
    })

    /* Get the available dates (of filtered Social Activities list) */
    const allDates = computed(() => {
      /* Choice to clean the filter */
      const arr = [""]
      // Activities' dates
      for(let sa of filtered.value) {
        if(!arr.includes(sa.date)){
          arr.push(sa.date)
        }

      }
        return arr.sort()
    })

    // Filtering the list of Social Activities by date
    const filteredByDate = computed(() => {
      // Checking for values where the full list is provided
      if(date.value === 0 || date.value === "")
        return filtered.value

      const arr = []

      // Filtering the list
      for(let sa of filtered.value) {
        if(sa.date === date.value){
          arr.push(sa)
        }
      }
      // Returning the filtered list
      return arr
    })


    /* Head: title, site_name */
    useHead({
      title: "Our Social Activities - CYZ Summer School",
      meta: [
        {
          name: "description",
          content: "This is the Social Activities List Page of CYZ Summer School"
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

    #form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: burlywood;
        padding: 20px;
    }

</style>