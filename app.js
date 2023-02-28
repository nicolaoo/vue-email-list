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
                console.log(res.data.response)
                const { response: email } = res.data
                this.manyEmails.push(email)
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