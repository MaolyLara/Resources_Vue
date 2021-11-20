<template>
    <div id="msj">
        <ul>
            <send v-for="data in daysweek">
                {{data.text}}
            </send>
        </ul>
    </div>
</template>
<script>
export default {
    name:"msj",
    data(){
        return{
            daysweek: [
                {id: 1, text:'Monday'},
                {id: 2, text:'Tuesday'},
                {id: 3, text:'Wednesday'},
                {id: 4, text:'Thursday'},
                {id: 5, text:'Friday'},                
            ]           
        }
    }
}
</script>
<style scoped>

</style>
