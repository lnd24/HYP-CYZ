<!--
    Header of the page
-->
<template>
    <header>
        <NuxtLink to = "/">
          <img class="logo-img" src="~/assets/img/logo.png" alt = "home">
        </NuxtLink>
        <nav>
            <NuxtLink to = "/about">ABOUT US</NuxtLink>
            <NuxtLink to = "/daily-schedule">DAILY SCHEDULE</NuxtLink>
            <NuxtLink to = "/speakers">SPEAKERS</NuxtLink>
            <div class="nav_parent" >
              <NuxtLink to = "/activities">ALL ACTIVITIES</NuxtLink>
              <div class="nav_box">
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
        font-size: 17pt;
        font-weight: bold;
    }

    .nav_box {
      position: absolute;
      display: block;
    }

    ul{
      list-style: none;
    }

</style>