<!--
    Breadcrumb of the page
    max level of page = 3
-->
<template>
    <ul class="breadcrumb">
        <li class="breadcrumb" v-for="(crumb,index) of getBreadcrumbs">
          <span v-if="index < getBreadcrumbs.length - 1"><NuxtLink :to = "crumb.to">{{ crumb.title }}</NuxtLink></span>
          <span v-else class="position"><NuxtLink :to = "crumb.to">{{ crumb.title }}</NuxtLink></span>
          <span v-if="index < (getBreadcrumbs.length - 1 < 2 ? getBreadcrumbs.length - 1 : 2)">  >  </span>
        </li>
    </ul>
</template>

<script setup>

  const route = useRoute()
  const getBreadcrumbs = computed(() => {


    const pathArray = route.path.split('/')
    pathArray.shift() /* remove first element '' */

    let breadcrumbs = []
    /* check path */
    if(getAvailablePaths().includes(pathArray[0])){
      breadcrumbs = pathArray.reduce((arr, path, idx) => {
        arr.push({
          /* if first element add only '/' else add previous path + element */
          to: !!arr[idx - 1]
              ? arr[idx - 1].to + '/' + path
              : '/' + path,
          title: firstLetterUpperCase(path.toString().replaceAll('_', ' ')),
        })
        // remove additional path (the max level must be 2 + 1 (Home))
        while(arr.length > 2){
          arr.pop()
        }
        return arr
      }, [])
    }
    /* add the home link */
    breadcrumbs.unshift({
      to: '/',
      title: 'Home'
    })
    return breadcrumbs
  })

</script>

<style>

    .breadcrumb {
      display: inline;
      padding: 15px 0 15px 0;
      font-size: 14pt;
      background-color: #234975;
      color: dimgrey;
      margin-block-start: 0;
      margin-block-end: 0;

    }
    .breadcrumb span {
      padding: 0 0 0 25px;
    }
    .breadcrumb a:link {
      color: #ffffff;
    }
    .breadcrumb a:visited{
      color: #ffffff;
    }
    .position a {
      color: red !important;
    }

</style>