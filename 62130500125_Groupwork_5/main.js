const app = Vue.createApp({
    data() {
        return {
           objs:[{id:1,img:'https://lifestyle.campus-star.com/app/uploads/2017/11/hanamichi-sakuragi-anime-slam-dunk-wallpaper.jpg',title:'Hanamichi Sakuragi',done:false},
           {id:2,img:'http://topicstock.pantip.com/chalermthai/topicstock/2008/07/A6779924/A6779924-22.jpg',title:'Kaede Rukawa',done:false},
           {id:3,img:'https://pbs.twimg.com/profile_images/1856896081/Sendoh_A_P_400x400.jpg',title:"Akira Sendoh",done:false}],
     form:{
         text:"",
         search:false
     },
     model:{
         state:false,
         img:""
     }
        }        
    },
    methods: {
        pic(id){
            this.model.img = this.objs[id-1].img
            this.model.state = true 
        }
    },
    computed: {
        countUndone(){
            return this.objs.filter( o => o.done ).length
        },
        searching() {
            return this.objs.filter((member) => {
                return member.title
                    .toLowerCase()
                    .includes(this.form.text.toLowerCase());
            });
        },
    }
    
})
