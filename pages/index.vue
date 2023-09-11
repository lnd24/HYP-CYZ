<!--
    Home page: Welcome + Social Activities List
-->
<template>
    <main>
      <div class="container">
        <img id = "index-img" src = "~/assets/img/home-banner.jpg" alt="CYZ Summer School" />
        <div class="title-container">CYZ Summer School</div>
        <img id = "loc-icon" src = "~/assets/img/loc-icon.png" alt="location icon" />
        <div class="location-container">Politecnico di Milano</div>
        <img id = "time-icon" src = "~/assets/img/clock-icon.png" alt="time icon" />
        <div class="time-container">10 - 19 July, 2024</div>
      </div>


      <Text title="CYZ Summer School" :description = "index_overview"/>
      <NuxtLink to = "/about" ><button id="read-more"><span>Read More</span></button></NuxtLink>
      <hr>

      <Text title="Application" :description = "index_application"/>
      <NuxtLink to = "/about" ><button id="read-more"><span>Contact Us</span></button></NuxtLink>
      <hr>

      <Text title="Our Lectures" :description="index_lectures"/>
      <NuxtLink to = "/lectures" ><button id="read-more"><span>Show All Lectures</span></button></NuxtLink>
      <hr>

      <Text title="Our Activities" :description="index_activities"/>
        <div class="lectures-container">
          <BigCard :objects = "lastActivity"/>
        </div>
    </main>
</template>

<script>
  definePageMeta({
    layout: "forindex",
  });


  export default {
    name: '',

    data() {
      return {
        index_overview:
            'Over the last few years, machine learning techniques have become increasingly popular, and are now widely used in both the academia and the industry. CYZ Summer School has been organized to provide an overview of the relevant topics and the state-of-the-art techniques employed in machine learning, giving participants the tools to handle real-world problems from data exploration to building predictive models and extracting insights.'
        ,

        index_lectures:
            'Various introductory lectures and practical sessions are offered for a complete formation in the machine learning field. The covered topics include Deep Learning, Natural Language Processing, Data Mining, Reinforcement Learning, and so on.'
        ,

        index_application:
            'The start date for registrations will be published in November 2023.\n' + 'Detailed information about the application procedure will be available soon on this website. ' +
            'In the meantime, we are available for any questions or inquiries.'
        ,

        index_activities: 'Activities have been organized for the participants to promote team collaboration and to broaden cultural awareness.',
        contactUs: 'Contact Us'
      }
    }
  }
</script>

<script setup>

  import Text from "../components/Text";

  const {data: activities} = useFetch('/api/activities')
  const lastActivity = computed(()=>{
    const arr = []
    for(let a of activities.value){
      arr.push({
        title: a.title,
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
        content: "Over the last few years, machine learning techniques have become increasingly popular, and are now widely used in both the academia and the industry. CYZ Summer School has been organized to provide an overview of the relevant topics and the state-of-the-art techniques employed in machine learning, giving participants the tools to handle real-world problems from data exploration to building predictive models and extracting insights. The start date for registrations will be published in November 2023. Detailed information about the application procedure will be available soon on this website."
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


    #index-img {
      width: 100%;
      height: 100%;
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
      z-index: 1;
      font-size: 14pt;
      padding: 10px 15px 10px 15px;
      color: white;
      font-family: "Century Gothic", sans-serif;
      background-color: #192B59;
      border: 0.3vh solid lightgray;
      cursor: pointer;
    }

    #read-more:hover {
      background-clip: padding-box;
      background-color: #9facbb;
      color: #192B59;
      transition: .5s;
    }


</style>