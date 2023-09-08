<!--
    Footer of the page
-->

<template>
    <footer>
      <div>
        <span class="footer-title">CYZ - Summer School</span>

        <div class = "footer-links">
          <NuxtLink to = "/contact">CONTACT US</NuxtLink>
        </div>
      </div>
    </footer>
</template>

<style>

    footer
    {
        background-color: #022338;
        flex-shrink: 0;
        text-align: center;
        margin-top: auto;
        border-top: 5px darkblue;
        padding: 10px;
        min-height: 1vh;

    }
    .footer-links
    {
      display: inline;
      float: right;
    }
    .footer-title
    {
      position: center;
      color: aliceblue;
    }

</style>