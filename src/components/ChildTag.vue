<template>

    <button v-on:click="updateTitle">Show Data</button>
</template>
<script>
export default {
    name:"child-tag",
    methods:{
        updateTitle(){
            this.$emit('changeTitle',"Updated Successfully")
        }
    }
}
</script>