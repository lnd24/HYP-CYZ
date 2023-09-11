<!--
    Component use for text paragraphs

    PROPS:
    - title: title of the paragraph
    - description: text displayed.
-->
<template>

    <div class="text-title">
      <span> {{ title }} </span>
    </div>
    <div class="text">
      <p v-html = "newLineOnFullStop( description )" />
    </div>
</template>

<script setup>

    defineProps({
        title: {
          type: String
        },
        description: {
          type: String
        }
    })

</script>

<style>

    .text-title {
      margin-top: 60px;
      align-content: center;
      font-size: 24pt;
      font-weight: bold;
      color: #192B59;
    }

    .text {
      margin: 20px 20% 40px 20%;
      font-size: 15pt;
    }

    @media screen and (max-width: 1200px) {

    }
</style>