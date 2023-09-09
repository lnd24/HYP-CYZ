<!--
    Header of the page
-->
<template>
  <header>
    <NuxtLink to = "/">
      <img class="logo-img" src="~/assets/img/logo.png" alt = "home">
    </NuxtLink>
    <nav id="nav" >
      <ul :class="menu_class">
        <li><NuxtLink to = "/about">ABOUT US</NuxtLink></li>
        <li><NuxtLink to = "/daily-schedule">DAILY SCHEDULE</NuxtLink></li>
        <li><NuxtLink to = "/speakers">SPEAKERS</NuxtLink></li>

        <div class="nav_parent" @mouseover="showChild" @mouseout="hideChild">
          <li><NuxtLink to = "/activities">ALL ACTIVITIES</NuxtLink></li>
          <div id="nav_box" :class="child_class">
            <ul>
              <li>
                <NuxtLink to = "/lectures">LECTURES</NuxtLink>
              </li>
              <li>
                <NuxtLink to = "/socials">SOCIAL ACTIVITIES</NuxtLink>
              </li>
            </ul>

          </div>
        </div>

        <li><NuxtLink to = "/contact">CONTACT US</NuxtLink></li>
      </ul>
    </nav>
    <button class="menu" @click="showMenu">{{ button }}</button>
  </header>
</template>



<script setup>
const menu_class = ref("hidden")
const button = ref("Menu")
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
    button.value = "X"
  }else {
    menu_class.value = "hidden"
    button.value = "Menu"
  }

}
</script>

<style>
  header
  {
    background-color: #022338;
    padding: 0 20px 0 20px;
    margin-bottom: 5px;
    border-bottom: 5px darkblue;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  nav {
    display: flex;
    gap: 30px;
    font-size: 16pt;
    font-weight: bold;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav li {
    padding: 10px;
  }

  .over_class {
    visibility: visible;
    position: absolute;
    display: block;
    background: #022338;
    right: 10%;
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
    }

    .shown {
      display: block;
      position: absolute;
      flex-direction: column;
      background: #022338;
    }

    .hidden {
      display: none;
    }

    .over_class {
      visibility: visible;
      position: relative;
      max-width: min-content;
      display: block;
      background: #022338;
      padding-top: 10px;
    }


  }

</style>