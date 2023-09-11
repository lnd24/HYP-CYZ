<!--
    Page with the list of all the lectures: Searcher by lecture's title or by lecture's speaker + Data Filter
-->
<template>
    <main>
      <PageTitle title="Lectures" description = "The lectures cover a wide range of topics in various subfields of Machine Learning, and practical activities are also proposed." />
      <div class = "form-container">
        <label id = "searcher-label" for = "lecture-searcher">Search: </label><input id = "searcher" type = 'text' placeholder = "Keyword" v-model = "word">
        <label id = "date-filter-label" for = "date-filter">Date filter: </label>
        <select class = "date-filter" v-model = "date">
          <option v-for="d of allDates" :value="d"> {{ d }} </option>
        </select>
      </div>
        <h1 id="lectures_page_title">All Lectures</h1>
        <div id="banner-container">
            <Banner v-for = "(lecture, index) in filteredByDate" :title = "lecture.title" :subtitle = "speakers[index]" :link = "'/lectures/' + lecture.alias"/>
        </div>
    </main>
</template>

<script setup>

    const { data: lectures } = await useFetch('/api/lectures')

    /*
        Search the lectures which title includes the key word
    */
    const word = ref("");
    const date = ref(0);

    const filtered = computed(() => {
      // Checking for values where the full list is provided
      if(word.value === "")
        return lectures.value

      const arr = []

      // Filtering the list
      for(let lecture of lectures.value) {
        //search the keyword in lectures' title or speakers (all in Uppercase)
        if(lecture.title.toUpperCase().includes(word.value.toUpperCase()) || getSpeakers(lecture).toUpperCase().includes(word.value.toUpperCase())){
          arr.push(lecture)
        }

      }
      // Returning the filtered list
      return arr
    })

    /* Get the available dates (of filtered Lectures list) */
    const allDates = computed(() => {
      /* Choice to clean the filter */
      const arr = [""]
      // Lectures' dates
      for(let lecture of filtered.value) {
        if(!arr.includes(lecture.date)){
          arr.push(lecture.date)
        }
      }
        return arr.sort()
    })

    // Filtering the list of Lectures by date
    const filteredByDate = computed(() => {
      // Checking for values where the full list is provided
      if(date.value === 0 || date.value === "")
        return filtered.value

      const arr = []

      // Filtering the list
      for(let lecture of filtered.value) {
        if(lecture.date === date.value){
          arr.push(lecture)
        }
      }
      // Returning the filtered list
      return arr
    })

    // Crate subtitle (speakers) for each filtered lecture
    const speakers = computed(() => {

      const arr = []
      for(const l of filteredByDate.value) {
        arr.push(getSpeakers(l))
      }

      return arr
    })

    /* Head: title, description, site_name */
    useHead({
      title: "Our Lectures - CYZ Summer School",
      meta: [{
        name: "description",
        content: "This is the Lectures List Page of CYZ Summer School: The lectures cover a wide range of topics in various subfields of Machine Learning, and practical activities are also proposed."
      },
        {
          name: "site_name",
          content: "CYZ Summer School"
        }
      ]
    })
</script>

<style>
    #banner-container
    {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      gap: 20px;
      margin-bottom: 40px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
    }

    .form-container {
        width: max-content;
        border-radius: 10px;
        border: 2px solid #063057;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        background-color: #c0c3ce;
        margin-bottom: 40px;
    }

    #searcher {
      font-size: 14pt;
      text-align: left;
      padding: 6px;
      width: min(20vw, 400px);
      font-family: 'Raleway', sans-serif;
      margin-right: 50px;
    }

    #searcher-label {
      font-size: 16pt;
    }

    #date-filter-label {
      font-size: 16pt;
    }

    .date-filter {
      font-size: 16pt;
      font-family: 'Raleway', sans-serif;
      width: max-content;
      height: 27pt;
    }


    @media screen and (max-width: 800px) {
      .form-container {
        flex-direction: column;
      }

    }



</style>