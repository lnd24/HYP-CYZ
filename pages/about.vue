<!--
    About us page
-->
<template>

    <main>
      <PageTitle title="About Us" :description = "page_description" />
      <Text title="About the Event" :description = "overview" />
      <Text title="About the Application" :description = "application" />
      <Text title="For more information" :description = "info" />
      <NuxtLink to = "/contact" ><button id="contact_button">{{ contactUs }}</button></NuxtLink>
    </main>
</template>

<script>
  export default {
    name: 'AboutPage',

    data() {
      return {
        page_description: 'Full-time Machine Learning-based Summer School in Milan.'
        ,

        overview:
            'The CYZ Summer School is a new annual summer school with its first edition taking place between July 10 - July 19 2024, hosted by Politecnico di Milano. ' +
            '\n' +
            'The school provides an interdisciplinary setting, and offers introductory courses in all areas of Machine learning, including prominent topics such as Neural Networks, Natural Language Processing,  and Optimization.\n' +
            '\n' +
            'The school is organized as an in-person event, where national and international experts will offer a multiplicity of lectures. The full-day programme will be accompanied by various educational and cultural events, such as conferences and trips, and coffee and lunch will be provided.\n'
        ,
        logo: 'img/home-image.jpg',
        application:
            'The summer school is open for international students, and all the courses will be taught in English. Applicants are expected to be at advanced Master level or PhD level with a solid background in Computer Science. \n' +
            'To ensure accessibility, the summer school will be free of charge.' +
            '\n' +
            'However, there will be a cap on the total number of participants.' +
            '\n' +
            'The selection will be made according to the applicants’ CV and letters of motivation.',
        info: 'Feel free to contact us for further information!',
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
        content: "The CYZ Summer School is a new annual summer school with its first edition taking place from July 10 - July 19 2024, hosted by Politecnico di Milano. The school provides an interdisciplinary setting, and offers introductory courses in all areas of Machine learning, including prominent topics such as Neural Networks, Natural Language Processing, and Optimization.The school is organized as an in-person event, where national and international experts will offer a multiplicity of lectures. The full-day programme will be accompanied by various educational and cultural events, such as conferences and trips, and coffee and lunch will be provided."
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

    #contact_button {
      z-index: 1;
      float: right;
      font-size: 14pt;
      padding: 10px 15px 10px 15px;
      color: white;
      font-family: "Century Gothic", sans-serif;
      background-color: #192B59;
      border: 0.3vh solid lightgray;
      border-radius: 3px;
      transition: all .5s;
      cursor: pointer;
    }

    #contact_button:hover {
      background-clip: padding-box;
      background-color: #9facbb;
      color: #192B59;
    }



</style>