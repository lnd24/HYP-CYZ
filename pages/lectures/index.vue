<!--
    Page with the list of all the lectures.
-->
<template>
    <main>
      <div class = "form-container">
        <label for = "lecture-searcher">Search</label><input id = "lecture-searcher" type = 'text' placeholder = "Lecture Searcher" v-model = "word">
      </div>
        <h1>Lectures</h1>
        <div id="card-container">
            <Card v-for = "(lecture, index) in filtered" :title = "lecture.title" :subtitle = "speakers[index]" :link = "'/lectures/' + lecture.alias" :img = "lecture.picture[0].url" />
        </div>
    </main>
</template>

<script setup>

    const { data: lectures } = await useFetch('/api/lectures')

    /*
        Search the speakers which title includes the key word
    */
    const word = ref("");

    const filtered = computed(() => {
      // Checking for values where the full list is provided
      if(word.value == "")
        return lectures.value

      const arr = []

      // Filtering the list
      for(let lecture of lectures.value) {
        //search the keyword in lectures' title (all in Uppercase)
        if(lecture.title.toUpperCase().includes(word.value.toUpperCase())){
          arr.push(lecture)
        }

      }
      // Returning the filtered list
      return arr
    })

    const speakers = computed(() => {

      const arr = []
      for(const l of filtered.value) {
        let speakers = []
        for(let s of l.speakers){
          speakers.push(s.name + ' ' + s.surname)
        }
        const s = speakers.join(', ').toString()
        arr.push(s)
      }

      return arr
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