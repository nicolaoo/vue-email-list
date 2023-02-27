const { createApp } = Vue

  createApp({
        data() {
        return {
            email: 'nicola.guarise@gmail.com',
            manyEmails: [],
        }
    },
    methods:{
        fetchEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.group(res.data.response)
                this.manyEmails.push(res.data.response)
            })
        },

    },
    
    mounted() {
        for( let i = 0; i < 10; i++){
            this.fetchEmail()
            console.log(this.manyEmails)
        }
    }

  }).mount('#app')