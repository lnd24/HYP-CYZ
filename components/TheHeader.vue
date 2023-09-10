<!--
    Header of the page
-->
<template>
  <header>
    <NuxtLink to = "/">
      <img class="logo-img" src="~/assets/img/logo.png" alt = "Home">
    </NuxtLink>
    <nav id="nav" >
      <ul :class="menu_class">
        <li><NuxtLink to = "/about">About Us</NuxtLink></li>
        <li><NuxtLink to = "/daily_schedule">Daily Schedule</NuxtLink></li>
        <li><NuxtLink to = "/speakers">Speakers</NuxtLink></li>

        <div class="nav_parent" @mouseover="showChild" @mouseout="hideChild">
          <li><NuxtLink to = "/activities">All Activities</NuxtLink></li>
          <div id="nav_box" :class="child_class">
            <ul>
              <li id="drop_down">
                <NuxtLink to = "/lectures">Lectures</NuxtLink>
              </li>
              <li id="drop_down">
                <NuxtLink to = "/socials">Social Activities</NuxtLink>
              </li>
            </ul>

          </div>
        </div>

        <li><NuxtLink to = "/contact">Contact Us</NuxtLink></li>
      </ul>
    </nav>
    <img class="menu" :src="menu_img" @click="showMenu">
  </header>
</template>



<script setup>
const menu_class = ref("hidden")
const menu_img = ref("/icon/menu.png")
const child_class = ref("out_class")

function showChild() {
  child_class.value = "over_class"
}

function hideChild() {
  child_class.value = "out_class"
}

function showMenu() {
  if(menu_class.value === "hidden"){
    menu_class.value = "shown"
    menu_img.value = "/icon/menu_opened.png"
  }else {
    menu_class.value = "hidden"
    menu_img.value = "/icon/menu.png"
  }

}
</script>

<style>

  header
  {
    background-color: #192B59;
    padding: 0 20px 0 20px;
    margin-bottom: 5px;
    border-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-img {
    max-height: 100px;
  }

  nav {
    display: flex;
    gap: 30px;
    font-size: 1em;
  }

  nav li {
    padding: 23px;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #drop_down {
    margin: 0;
    padding: 20px;
  }

  .over_class {
    visibility: visible;
    position: absolute;
    display: block;
    background: #192B59;
    padding-top: 10px;
  }

  .out_class {
    visibility: hidden;
    position: absolute;
    display: block;
  }

  .over_class ul{
    list-style: none inside;
    direction: ltr;
    flex-direction: column;
    padding-left: 5px;
    padding-right: 5px;
  }

  .menu{
    display: none;
  }

  @media screen and (max-width: 1064px){

    .menu {
      display: block;
      max-width: 50px;
    }

    .shown {
      display: block;
      position: absolute;
      flex-direction: column;
      background: #192B59;
      max-width: max-content;
    }

    .hidden {
      display: none;
    }

    .over_class {
      visibility: visible;
      position: relative;
      max-width: min-content;
      display: block;
      left: 25%;
      background: #192B59;
    }

    #drop_down {
      margin: 8px;
      padding: 8px;
    }


  }

</style>