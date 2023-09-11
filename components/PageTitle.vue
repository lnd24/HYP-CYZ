<!--
    Group of text and image side by side. When the screen becomes smaller, the text is moved below the image.

    PROPS:
    - isReverse: boolean value that determines whether the image comes before or after the text.
    - description: text displayed near the image.
-->
<template xmlns="http://www.w3.org/1999/html">
  <!--
      This is an example of class/style binding. It allows to change dynamically the style of an element based on the boolean value.
      There is also another way to achieve this by using the array notation. More here: https://vuejs.org/guide/essentials/class-and-style.html#class-and-style-bindings
  -->
  <div class="start-main-page">
  <div class="page-title">
    <span> {{ title }} </span>
  </div>
  <div class="page-description">
    <span>{{ description }}</span>
  </div>
  </div>
</template>

<script setup>
/*
    Instead of defining the props as a simple list, an object was used.
    This allows to add properties to the props.
    In this example there are:
    - type: type of the prop
    - default: default value of the prop when it is not provided
*/

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

.start-main-page {
  width: 100%;
  text-align: left;
  background: linear-gradient(180deg, #234975, #f3f4fb);
}

.page-title {
  margin-left: 20%;
  margin-top: 30px;
  align-content: center;
  font-weight: bold;
  font-size: 30pt;
  color: #d5e4ff;
}

.page-description {
  font-size: 14pt;
  font-weight: bold;
  color: #64647e;
  margin: 20px 20% 60px 20%;
}

@media screen and (max-width: 1200px) {

}
</style>