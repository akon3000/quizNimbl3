import Vue from 'vue'

const AddOrder = Vue.extend({
    data: function() {
        return {
            focus: false,
            keyup: false,
            order: null
        }
    },
    methods: {
        opaOn: function(){
            this.focus = true
            const elf3 = this.$el.querySelector('.item.f3 .boxDetail')
            const elf4 = this.$el.querySelector('.item.f4')
            $('.add-opa').removeClass("hide")
            $(elf3).css({
                'width': elf3.offsetWidth + 'px',
                'position': 'absolute',
                'z-index': '100'
            })
            $(elf4).css('margin-top', elf3.offsetHeight + 'px')
        },
        opaOff: function(){
            this.focus = false
            const elf3 = this.$el.querySelector('.item.f3 .boxDetail')
            const elf4 = this.$el.querySelector('.item.f4')
            $('.add-opa').addClass("hide")
            $(elf4).removeAttr('style')
            $(elf3).removeAttr('style')
        },
        opaKeyup: function() {
            const self = this
            self.keyup = true
            setTimeout(() => {
                self.keyup = false                
            },3000)
        }
    }
})

export default AddOrder