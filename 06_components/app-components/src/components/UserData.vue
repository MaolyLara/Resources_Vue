<template>
    <div>
        <h1>{{names}}</h1>
        <h2>{{city}}</h2>
        <h2>{{mail}}</h2>
        <h2>{{age}}</h2>
    </div>
</template>
<script>
export default {
    props:{
        names: String, 
        city: {
            type: String,
            default: "Data Not Null"
            },
        mail: String,
        age: [Number, String]
    }
    
}
</script>
<style scoped>

</style>

