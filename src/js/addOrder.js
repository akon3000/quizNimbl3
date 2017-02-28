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
            
            // condition for rotate img plus.
            this.focus = true

            // Find position for elbelowFill.
            const style = window.getComputedStyle(this.elbelowFill) // Get Style element First below AddOrder element.
            const sumMargin = parseInt(style.marginTop) + parseInt(style.marginBottom) // sum marginTop & marginBottom.
            
            // show blackdrop at inside content.
            $('.add-opa').removeClass("hide") 
            
            // set element for animation focus event.
            $(this.elfill).css({ 'width': this.elfill.offsetWidth + 'px', 'position': 'absolute','z-index': '100'})

            $(this.elbelowFill).css('margin-top', this.elfill.offsetHeight + sumMargin + 'px')
        },
        opaOff: function(){
            
            // condition for rotate img plus.
            this.focus = false

            // hide blackdrop at inside content.
            $('.add-opa').addClass("hide")
            
            // rollback style element First below AddOrder element to default.
            $(this.elbelowFill).removeAttr('style')

            // rollback style element for animation focus event to default.
            $(this.elfill).removeAttr('style')
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