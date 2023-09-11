<!--
    Smaller card to display information in the information page.
    The difference with the card component is that there is no image here.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->

<template>
    <div class="smallcard">
        <span class="title">{{ title }}</span>
        <span class="subtitle" v-if="!!subtitle">{{ subtitle }}</span>
      <NuxtLink :to = "link" ><button class="smallcard_button"><span>More Details</span></button></NuxtLink>
    </div>
</template>

<script>
    export default {
        props: [
            'title',
            'subtitle',
            'link'
        ]
    }
</script>

<style>

    .smallcard
    {
      display: flex;
      flex-flow: column;
      padding: 20px;
      border: 2px solid #192B59;
      border-radius: 10px;
      text-align: center;
      justify-content: space-between;
      max-width: 30%;
    }

    .smallcard .title {
      font-size: 18pt;
      font-weight: bold;
      color: #002a88;
      padding-bottom: 10%;
    }

    .smallcard .subtitle {
      font-size: 18pt;
      font-weight: bold;
      color: #002a88;
      padding-bottom: 10%;
    }

    .smallcard_button {
      z-index: 1;
      margin-top: 10px;
      font-size: 12pt;
      padding: 10px 15px 10px 15px;
      color: white;
      font-family: "Century Gothic", sans-serif;
      background-color: #192B59;
      border: 0.3vh solid lightgray;
      border-radius: 3px;
      transition: all 0.5s;
      cursor: pointer;
    }

    .smallcard_button span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }

    .smallcard_button span:after {
      content: '>>';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }

    .smallcard_button:hover span {
      padding-right: 25px;
    }

    .smallcard_button:hover span:after {
      opacity: 1;
      right: 0;
    }



</style>