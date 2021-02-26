app.component('photo-search',{
    props:{
        form : Object
    },template:
    /*html*/
    `
    <div>
        <span :class="{'hidden' : form.search }" class="cursor-pointer ml-72 pl-72">
            <i class="fas fa-search fa-2x" @click="search"></i>
        </span>
        <span :class="{'hidden' : !form.search}">
            <input v-model="form.text" class="border-2 w-72 ml-2" placeholder="Please enter text for searching photos">
                <button class="bg-blue-400 px-2 py-2 font-medium text-white rounded-lg" @click="cancle">
                    Cancle
                </button>
        </span>
    </div>
    `,
    methods: {
        search(){
            this.form.search = !this.form.search
        },
        cancle(){
            this.form.search = !this.form.search
            this.form.text = ""
            
        }
    }

})