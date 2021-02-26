app.component('photo-view',{
    props:{
        model:Object
    },template:
    /*html*/
    `
    <div v-if="model.state" class="bg-black h-72 " style="width: 800px;">
    <span @click="cancle()" class="bg-white float-right mt-5 mr-5 w-5 h-6 rounded-lg cursor-pointer">
        <i class="fas fa-times ml-1 my-1"></i>
    </span>
    <img :src="model.img" alt="" class="pl-24 h-72">
    </div>
    `,
    methods: {
        cancle(){
            this.model.state = false
        }
    }

})