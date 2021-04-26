const app = Vue.createApp({
    data(){
        return {
            firstName: 'Hello',
            pageViews:'500k ',
            monthPrice: 24
        }
    },
    methods:{
        test(){
            const slider = document.querySelector('#price')
            document.querySelector('#discount').checked = false;

            if(slider.value == 0){
                this.pageViews = "10k "
                this.monthPrice = 8
            }else if(slider.value == 20 ){
                    this.pageViews = "50k "
                    this.monthPrice = 12
                }else if(slider.value == 40 ){
                    this.pageViews = "100k "
                    this.monthPrice = 16
                }else if(slider.value == 60 ){
                    this.pageViews = "500k "
                    this.monthPrice = 24
                }else{
                    this.pageViews = "1M "
                    this.monthPrice = 36
                }

        },

        discount(){
            const discountPrice = this.monthPrice - (this.monthPrice * .25)
            const originalPrice = this.monthPrice / (1 - .25)
            
            if(document.querySelector('#discount').checked === true ){
                this.monthPrice = ""
                this.monthPrice =  discountPrice
        } else if(document.querySelector('#discount').checked === false) {
            console.log(this.monthPrice)
            this.monthPrice = originalPrice
        }
    }
}
})

app.mount('#app')