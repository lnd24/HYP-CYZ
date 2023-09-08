<!--
    Header of the page
-->
<template>
    <header>
        <NuxtLink to = "/">
          <img class="logo-img" src="~/assets/img/logo.png" alt = "home">
        </NuxtLink>
        <nav id="nav" >
            <NuxtLink to = "/about">ABOUT US</NuxtLink>
            <NuxtLink to = "/daily-schedule">DAILY SCHEDULE</NuxtLink>
            <NuxtLink to = "/speakers">SPEAKERS</NuxtLink>
            <div class="nav_parent" @mouseover="showChild" @mouseout="hideChild">
              <NuxtLink to = "/activities">ALL ACTIVITIES</NuxtLink>
              <div id="nav_box" class="out_class">
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

            <NuxtLink to = "/contact">CONTACT US</NuxtLink>
        </nav>
    </header>
</template>



<script setup>


  function showChild() {
    const child = document.getElementById("nav_box")
    child.className = "over_class"
  }

  function hideChild() {
    const child = document.getElementById("nav_box")
    child.className = "out_class"
  }
</script>

<style>
    header
    {
        background-color: #022338;
    }

    header
    {
        padding: 0px 20px 0px 20px;
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

    .hidden {
      visibility: hidden;
    }

    .over_class {
      visibility: visible;
      position: absolute;
      display: block;
      background: #022338;
      right:150px;
      min-width: 210px;
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
      padding-left: 5px;
      padding-right: 5px;
    }

</style>