<!--
    Smaller card to display information in the information page.
    The difference with the card component is that there is no image here.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->

<template>
    <div class="card">
        <span class="title">{{ title }}</span>
        <span class="subtitle">{{ subtitle }}</span>
        <NuxtLink :to = "link" ><button class="smallcard_button">Open description</button></NuxtLink>
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
    .image-container
    {
        display: flex;
        justify-content: center;
        border: 2px midnightblue;
        border-radius: 10px;
        padding: 2px;
        width: 250px;
        height: 250px;
    }

    .card
    {
        display: flex;
        flex-flow: column;
        padding: 20px;
        border: 2px solid #192B59;
        border-radius: 10px;
        width: max-content;
    }

    .title
    {
      font-size: 18pt;
      font-weight: bold;
      color: #002a88;
    }

    .smallcard_button {
      z-index: 1;
      margin-top: 10px;
      float: right;
      font-size: 12pt;
      padding: 10px 15px 10px 15px;
      color: white;
      font-family: "Century Gothic", sans-serif;
      background-color: #192B59;
      border: 0.3vh solid lightgray;
      border-radius: 3px;
    }


</style>