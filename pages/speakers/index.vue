<!--
    Page with the list of all the speakers + Searcher
-->
<template>
    <main>
      <PageTitle title="Speakers" description = "Our team is composed of national and international experts in Data Science and Machine Learning." />

        <div id="card-container">
            <Card v-for = "speaker of filtered" :title = "speaker.name + ' ' + speaker.surname" :link = "'/speakers/' + speaker.alias" :img = speaker.photo />
        </div>
    </main>
</template>

<script setup>
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const { data: speakers } = await useFetch('/api/speakers')

    /*
        Search the speakers whose name or surname include the key word
    */
    const word = ref("");

    const filtered = computed(() => {
        // Checking for values where the full list is provided
        if(word.value === "")
            return speakers.value

        const arr = []

        // Filtering the list
        for(let speaker of speakers.value) {
            //concat name and surname, then search the key word in it (all in Uppercase)
            if((speaker.name + ' ' + speaker.surname).toUpperCase().includes(word.value.toUpperCase())){
              arr.push(speaker)
            }

        }
        // Returning the filtered list
        return arr
    })

    /* Head: title, site_name */
    useHead({
      title: "Our Speakers - CYZ Summer School",
      meta: [
        {
          name: "description",
          content: "This is the Speakers Page of CYZ Summer School"
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