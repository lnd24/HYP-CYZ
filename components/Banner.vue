<template>

  <a class="banner_wrapper"> <NuxtLink :to = "link" >
  <div class="banner">

    <span class="banner_title">{{ title }}</span>
    <span class="banner_subtitle">{{ subtitle }}</span>

  </div>
  </NuxtLink>
  </a>

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


.banner_wrapper {
  width: 100%;
  margin-left: 15%;
  margin-right: 15%;
}

.banner
{
  display: flex;
  flex-flow: row;
  width: 100%;
  padding: 20px;
  border: 2px solid #192B59;
  text-align: left;
  transition: all 0.5s;
  cursor: pointer;
}


.banner_title
{
  font-size: 18pt;
  font-weight: bold;
  color: #002a88;
  margin-right: 30px;
}

.banner_subtitle
{
  font-size: 18pt;
  color: #c75f00;

}

.banner:hover {
  padding-right: 25px;
  background-clip: padding-box;
  background-color: #9facbb;
  color: #192B59;
  transition: .5s;
}



</style>