import Vue from 'vue'

const HeadBar = Vue.extend({
    methods: {
        open: function(){
            const blackdrop =  document.querySelector('.app-nimbl3 .blackdrop')
            const menu = document.querySelector('.app-nimbl3 .menu')
            $(blackdrop).removeClass('hide')
            $(menu).css('width', menu.attributes['size-w'].nodeValue)
            $('body').css('overflow-y', 'hidden')
        }
    }
});

export default HeadBar;