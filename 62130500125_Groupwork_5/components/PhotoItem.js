app.component('photo-item',{
    props:{
        obj:Object
    },template:
    /*html*/
    `
    <img @click="clickPic(obj.id)" :src="obj.img" class="w-72 h-44 cursor-pointer mr-4 mt-4 rounded-md border-4 border-black inline-block"/>
    <p class="text-xl font-semibold inline-block w-48">{{obj.title}}</p>
    <i @click="like" :class="[!obj.done?heart[0]:heart[1]]"></i>
    
    `
    ,
    data() {
        return {
            heart:["far fa-heart fa-2x cursor-pointer","fas fa-heart fa-2x heartColor cursor-pointer"]

        }
    },
    methods: {
        like(){
            this.obj.done = !this.obj.done
        },
        clickPic(id){
            this.$emit('pic',id)
            
        }
    },
})