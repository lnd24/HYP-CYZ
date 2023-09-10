<!--
    Component use for text paragraphs

    PROPS:
    - title: title of the paragraph
    - description: text displayed.
-->
<template>

    <div class="text-title">
      <h2> {{ title }} </h2>
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
      margin-top: 45px;
      align-content: center;
      font-size: 16pt;
    }

    .text {
      margin-left: 20%;
      margin-right: 20%;
    }

    @media screen and (max-width: 1200px) {

    }
</style>