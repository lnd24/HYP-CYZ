<!--
    Card to display information in the list page.
    PROPS:
    - activities: list of objects which have:
                      -  title: main information to display
                      - subtitle: second information to display
                      - link: link to the page description
                      - img: image to show
                          - url
                          - alt
-->
<template>
    <div class="big_card">

        <div class="big_card_image-container">
          <span class="button" @click="prevIndex"> &lt </span>
          <img class="big_card_image" :src="'/img/' + objects[index].img.url" :alt="objects[index].img.alt" />
          <span class="button" @click="nextIndex"> &gt </span>
        </div>

      <div class="data-container">


        <h1 class="title">{{ objects[index].title }}</h1>
        <h2 class="subtitle">{{ objects[index].subtitle }}</h2>
        <span class="button"><NuxtLink :to = "objects[index].link" >Details</NuxtLink></span>
      </div>

      <div class="list-container">


          <div class="member" v-for="(obj, i) of showThree" @click="changeIndex(i)" >
              <img class="small_img" :src="obj.img.url" :alt="obj.img.alt" />
            <div>
              <span>{{obj.title}}</span>
              <br>
              <span>{{obj.subtitle}}</span>
            </div>
          </div>

      </div>



    </div>
</template>

<script setup>
    const props = defineProps(['objects'])
    const index = ref(0)
    const showThree = computed(() => {
      const arr = []
          for(let i=-1; i<3; i++) {
            if(index.value + i >= props.objects.length) {
              arr.push(props.objects[index.value+i-props.objects.length])
            }else if(index.value + i < 0){
              arr.push(props.objects[index.value+i+props.objects.length])
            }else {
              arr.push(props.objects[index.value+i])
            }
          }
          return arr
        }
    )
    function prevIndex()  {
      if(index.value === 0) {
        index.value = props.objects.length - 1;
      }else{
        index.value--
      }
    }
    function nextIndex()  {
      if(index.value < props.objects.length - 1) {
        index.value++
      }else{
        index.value = 0
      }
    }

    function changeIndex(i) {
      const temp = index.value + i - 1
      if(temp < 0 ){
        index.value = props.objects.length - 1
      }else if(temp > props.objects.length - 1){
        index.value = 0
      }else {
        index.value = temp
      }
    }
</script>

<style>
    .big_card_image-container
    {
        display: flow;
        justify-content: center;
        border: 2px midnightblue;
        border-radius: 10px;
        padding: 2px;
        width: 100%
    }

    .big_card_image
    {
        vertical-align: middle;
        height: auto;
        width: 1000px;
        margin: auto;
    }

    .member
    {
      display: flex;
      flex-flow: column;
      padding: 20px;
      border: 2px solid black;
      border-radius: 5px;
      width: 100px;
      height: fit-content;
    }

    .big_card
    {
      padding: 20px;
      border: 2px solid black;
      border-radius: 5px;
    }
    .list-container
    {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      gap: 20px;
    }

    .title
    {
        font-size: 2em;
        font-weight: bold;
    }

    .button a{
      background-color: #022338;
    }
</style>