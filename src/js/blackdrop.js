import Vue from 'vue'

const Blackdrop = Vue.extend({
    methods: {
        close: function(){
            const blackdrop =  document.querySelector('.app-nimbl3 .blackdrop')
            const menu = document.querySelector('.app-nimbl3 .menu')
            $(blackdrop).addClass('hide')
            $(menu).css('width', '0')
            $('body').removeAttr('style')
        }
    }
});

export default Blackdrop;