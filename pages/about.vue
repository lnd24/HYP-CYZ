<!--
    About us page
-->
<template>

    <main>
      <h1>About Us</h1>

      <TextImage title="About the Event" :description = "overview" :src = "logo" />
      <TextImage title="About the Application" :description = "application" />
      <TextImage title="For more Information" :description = "info" />
      <NuxtLink to = "/contact" ><button>{{ contactUs }}</button></NuxtLink>
    </main>
</template>

<script>
  export default {
    name: 'AboutPage',

    data() {
      return {
        overview:
            'The CYZ Summer School is a new annual summer school with its first edition taking place from July 10 - July 19 2024, hosted by Politecnico di Milano. ' +
            '\n' +
            'The school provides an interdisciplinary setting, and offers introductory courses in all areas of Machine learning, including prominent topics such as Neural Networks, Natural Language Processing,  and Optimization.\n' +
            '\n' +
            'The school is organized as an in-person event, where national and international experts will offer a multiplicity of lectures. The full-day programme will be accompanied by various educational and cultural events, such as conferences and trips, and coffee and lunch will be provided.\n'
        ,
        logo: 'img/home-image.jpg',
        application:
            'The summer school is open for international students, and all the courses will be taught in English. Applicants are expected to be at advanced Master level or PhD level with a solid background in Computer Science. \n' +
            '\n' +
            'To ensure accessibility, the summer school will be free of charge. However, there will be a cap on the total number of participants. The selection will be made according to the applicants’ CV and letters of motivation. \n',
        info: 'More Info',
        contactUs: 'Contact Us'
      }
    }
  }

</script>

<script setup>
  /* Head: title, description, site_name */
  useHead({
    title: "About Us - CYZ Summer School",
    meta: [
      {
        name: "description",
        content: "CYZ Summer School"
      },
      {
        name: "site_name",
        content: "CYZ Summer School"
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

    .info-group {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }

</style>