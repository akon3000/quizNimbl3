import Vue from 'vue'

const Blackdrop = Vue.extend({
    methods: {
        close: function(){
            $(this.$el).addClass('hide') // hide Myself.
            $(this.elMenu).removeClass('mobile') // hide menu element.
            $('body').removeAttr('style') // rollback body style to default.
        }
    }
});

export default Blackdrop;