<!--
    Breadcrumb of the page
    max level of page = 3
-->
<template>
  <span>{{ getBreadcrumbs }}</span>
    <ul class="breadcrumb">
        <li class="breadcrumb" v-for="(crumb,index) of getBreadcrumbs">
          <NuxtLink :to = "crumb.to"><span>{{ crumb.title }}</span></NuxtLink>
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
      font-size: 12pt;
    }
    .breadcrumb a:link {
      color: #022338;
    }
    .breadcrumb a:visited{
      color: #022338;
    }

</style>