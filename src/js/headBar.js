import Vue from 'vue'

const HeadBar = Vue.extend({
    methods: {
        open: function(){
            $(this.elBlackdrop).removeClass('hide') // show blackdrop.
            $(this.elMenu).addClass('mobile') // resize menu element. 
            $('body').css('overflow-y', 'hidden') // hidden body scroll-y
        }
    }
});

export default HeadBar;