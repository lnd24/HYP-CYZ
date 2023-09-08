<!--
    Home page: Welcome + Last Four Lectures
-->
<template>
    <main>
        <h2>
          Welcome!!!
        </h2>
        <img id = "main-img" src = "~/assets/img/home-image.jpg" alt="CYZ Summer School" />
        <h1>
            CYZ Summer School
        </h1>
        <div class="lectures-container">
          <BigCard :objects = "lastLectures"/>
        </div>
    </main>
</template>

<script>
  definePageMeta({
    layout: "forindex",
  });
</script>

<script setup>
  const {data: lectures} = useFetch('/api/lectures')
  const lastLectures = computed(()=>{
    const arr = []
    for(let l of lectures.value.slice(lectures.value.length-4, lectures.value.length)){
      arr.push({
        title: l.title,
        subtitle: getSpeakers(l),
        link: '/lectures/' + l.alias,
        img: {
          url: l.picture[0].url,
          alt: l.alias.replace("-", " ")
        }
      })
    }
    return arr
  })

  /* Head: title, description, site_name */
  useHead({
    title: "Home - CYZ Summer School",
    meta: [
      {
        name: "description",
        content: "Hi here is the CYZ Summer School"
      },
      {
        name: "site_name",
        content: "CYZ Summer School"
      },
      {
        name: "keywords",
        content: "cyz, summer school"
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