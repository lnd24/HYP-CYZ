<!--
    Default layout used by all the page
-->
<template>
    <div class = 'page'>
        <TheHeader />
        <BreadCrumbs />
        <slot />
        <TheFooter />
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    .page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: rgba(247, 248, 253, 0.98);
        margin: 0;
    }
</style>