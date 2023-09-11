<!--
    Card to display information in the list page.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
    - img: {url, alt} image to show
-->
<template>
    <div class="card">
        <div class="image-container">
            <img class="img" :src="img.url" :alt="img.alt"/>
        </div>
        <span class="title">{{ title }}</span>
        <span class="subtitle" v-if="!!subtitle">{{ subtitle }}</span>
      <NuxtLink :to = "link" ><button class="smallcard_button"><span>More Details</span></button></NuxtLink>
    </div>
</template>

<script setup>
    const props = defineProps(['title', 'subtitle', 'link', 'img'])
</script>

<style>
    .image-container
    {
        display: flex;
        justify-content: center;
        border: 2px midnightblue;
        border-radius: 10px;
        padding: 2px;
        width: 25vw;
    }

    .img
    {
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        height: auto;
        width: auto;
        margin: auto;
    }

    .card
    {
        display: flex;
        flex-flow: column;
        padding: 20px 20px 40px 20px;
        border: 2px solid black;
        border-radius: 20px;
        width: 25vw;
        text-align: center;
        justify-content: space-between;
    }

    .card .title
    {
        font-size: 2em;
        font-weight: bold;
      padding: 10% 0 10% 0;
    }
    .card .subtitle{
      padding: 0 0 10% 0;
    }
</style>