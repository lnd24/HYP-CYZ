<!--
    About us page
-->
<template>
    <!--
        Instead of having the two structures written directly on the page, it was preferred to use components as they had the same layout.
        This also allows to have a much cleaner and easy to read 'code'
    -->
    <main>
      <h1>About Us</h1>

      <TextImage title="Our School" :description = "overview" :src = "logo" />
      <TextImage title="Our History" :description = "history" />
      <TextImage title="Our Purpose" :description = "purpose" />
      <TextImage title="Where we are" :description = "location" :src = "map" />
      <TextImage title="For more Information" :description = "info" />
      <NuxtLink to = "/contact" ><button>{{ contactUs }}</button></NuxtLink>
    </main>
</template>

<script>
  export default {
    name: 'AboutPage',

    data() {
      return {
        overview: 'Short Overview of the Summer School',
        logo: 'img/home-image.jpg',
        history: 'History',
        purpose: 'Purpose',
        location: 'Location',
        map: '_nuxt/assets/img/AA.jpg',
        info: 'More Info',
        contactUs: 'Contact Us'
      }
    }
  }
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