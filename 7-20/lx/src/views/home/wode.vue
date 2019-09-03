<template>
    <div>wode
        {{$route.params.txt}}

    </div>
</template>

<script>
export default {
    beforeRouteEnter(to,from,next){
        if(localStorage.getItem("user")){
            next()
        }else{
            next("/about")
        }
    }
}
</script>

<style>

</style>
