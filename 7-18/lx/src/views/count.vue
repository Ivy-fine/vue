<template>
    <div>
            <slot></slot>
        <button @click="$emit('jian',num-1)">-</button>
        {{num}}
        <button @click="change(num+1)">+</button>
            <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    props:["num","change"]
}
</script>

<style>

</style>
