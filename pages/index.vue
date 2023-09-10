<!--
    Home page: Welcome + Last Four Lectures
-->
<template>
    <main>
      <div class="container">
        <img id = "main-img" src = "~/assets/img/home-banner.jpg" alt="CYZ Summer School" />
        <div class="title-container">CYZ Summer School</div>
        <img id = "loc-icon" src = "~/assets/img/loc-icon.png" alt="location icon" />
        <div class="location-container">Politecnico di Milano</div>
        <img id = "time-icon" src = "~/assets/img/clock-icon.png" alt="time icon" />
        <div class="time-container">10 - 19 July, 2024</div>
        <NuxtLink to = "/about" ><button id="read-more">Read More</button></NuxtLink>
      </div>
        <div class="lectures-container">
          <BigCard :objects = "lastActivity"/>
        </div>
    </main>
</template>

<script>
  definePageMeta({
    layout: "forindex",
  });
</script>

<script setup>
  const {data: activities} = useFetch('/api/activities')
  const lastActivity = computed(()=>{
    const arr = []
    for(let a of activities.value){
      arr.push({
        title: a.title,
        subtitle: a.location,
        link: '/socials/' + a.alias,
        img: {
          url: a.picture.url,
          alt: a.picture.alt
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

    main {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .container {
      width: 100%;
      height: 100%;
    }


    #main-img {
      min-width: 100%;
      min-height: 100%;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: relative;
      margin: auto;
      overflow: auto;
      -o-object-fit: contain;
      object-fit: contain;
      z-index: 0;
    }

    .info-group {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }

    .title-container {
      position: absolute;
      top: max(18vw, 160px);
      left: 13%;
      text-align: left;
      font-family: "Century Gothic", sans-serif;
      font-weight: bold;
      font-size: 3.5vw;
      color: aliceblue;
    }

    #loc-icon {
      padding-top: 40px;
      position: absolute;
      z-index: 1;
      left: 15%;
      top: max(26vw, 170px);
      width: 2.5vw;
    }

    .location-container {
      padding-top: 40px;
      position: absolute;
      top: max(26vw, 170px);
      left: 20%;
      text-align: left;
      font-family: "Century Gothic", sans-serif;
      font-weight: normal;
      font-size: 2vw;
      color: aliceblue;
    }

    #time-icon {
      padding-top: 40px;
      position: absolute;
      z-index: 1;
      left: 15.3%;
      top: max(33.1vw, 200px);
      width: 2.2vw;
    }

    .time-container {
      padding-top: 40px;
      position: absolute;
      top: max(33vw, 200px);
      left: 20%;
      text-align: left;
      font-family: "Century Gothic", sans-serif;
      font-weight: normal;
      font-size: 2vw;
      color: aliceblue;
    }

    #read-more {
      position: absolute;
      top: max(42vw, 265px);
      left: 20%;
      z-index: 1;
      font-size: 1.5vw;
      padding: 0.8vw 1.5vw 0.8vw 1.5vw;
      color: white;
      font-family: "Century Gothic", sans-serif;
      background-color: #192B59;
      border: 0.3vh solid lightgray;
    }

</style>