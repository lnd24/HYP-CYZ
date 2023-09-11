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
          <span class="button_next_prev" @click="prevIndex"> &lt </span>
          <img class="big_card_image" :src="objects[index].img.url" :alt="objects[index].img.alt" />
          <span class="button_next_prev" @click="nextIndex"> &gt </span>
        </div>

      <div class="data-container">

        <h1 class="title">{{ objects[index].title }}</h1>
        <h2 class="subtitle">{{ objects[index].subtitle }}</h2>
        <button class="bigcard_button_details"><NuxtLink :to = "objects[index].link" ><span>Details</span></NuxtLink></button>
      </div>

      <div class="list-container">
          <div class="member" v-for="(obj, i) of objects" @click="changeIndex(i)" >
              <img class="small_img" :src="obj.img.url" />
          </div>

      </div>



    </div>
</template>

<script setup>
    const props = defineProps(['objects'])
    const index = ref(0)
    /*
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

     */
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
      index.value = i
      /*
      const temp = index.value + i - 1
      if(temp < 0 ){
        index.value = props.objects.length - 1
      }else if(temp > props.objects.length - 1){
        index.value = 0
      }else {
        index.value = temp
      }

       */
    }
</script>

<style>
    .big_card_image-container
    {
        display: flow;
        justify-content: center;
        text-align: center;
        background-color: #192B59;
        border-radius: 10px;
        padding: 2px;
        width: 100%
    }

    .big_card_image
    {
        vertical-align: middle;
        horiz-align: center;
        height: auto;
        width: 70%;
        margin: auto;
    }

    .member
    {
      display: flex;
      flex-flow: column;
      padding: 20px;
      border: 2px solid #687d94;
      width: 100px;
      height: fit-content;
    }

    .big_card
    {
      padding: 30px;
      border: 2px solid #192B59;
      border-radius: 10px;
      width: 80vw;
    }

    .list-container
    {
      margin-top: 30px;
      margin-bottom: 20px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      gap: 15px;
    }

    .title
    {
        font-size: 3em;
        font-weight: bold;
    }


    .bigcard_button_details {
      z-index: 1;
      font-size: 12pt;
      padding: 10px 15px 10px 15px;
      color: #01223d;
      font-family: "Century Gothic", sans-serif;
      background-color: #707898;
      border: 0.3vh solid lightgray;
      border-radius: 3px;
      transition: all 0.5s;
      cursor: pointer;
      margin-bottom: 30px;
    }

    .bigcard_button_details span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }

    .bigcard_button_details span:after {
      content: '>>';
      position: absolute;
      opacity: 0;
      top: 0;
      right: -20px;
      transition: 0.5s;
    }

    .bigcard_button_details:hover span {
      padding-right: 25px;
    }

    .bigcard_button_details:hover span:after {
      opacity: 1;
      right: 0;
    }

    .member {
      margin: 5px;
      padding: 10px;
      width: 10vw;
      cursor: pointer;
    }

    .member:hover {
      background-clip: padding-box;
      background-color: #445b86;
      color: #192B59;
      transition: .5s;
    }

    .button_next_prev {
      margin: 5px;
      background-color: #192B59;
      padding: 10px;
      color: #9facbb;
      font-weight: bold;
      font-size: 28pt;
    }

    .button_next_prev:hover {
      background-clip: padding-box;
      color: #c05e00;
      transition: .5s;
    }




</style>