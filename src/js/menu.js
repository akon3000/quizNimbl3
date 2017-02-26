import Vue from 'vue'

const Menu = Vue.extend({
    data: function() {
      return {
        active: 1,
        list: [
            { msg: "Dashboard", img_default: 'controls-purple.svg', img_active: 'controls-white.svg' },
            { msg: "Orders", img_default: 'shopping-cart-purple.svg', img_active: 'shopping-cart-white.svg' },
            { msg: "Companies", img_default: 'factory-purple.svg', img_active: 'factory-white.svg', collape: true },
            { msg: "Products", img_default: 'box-purple.svg', img_active: 'box-white.svg' },
            { msg: "Documents", img_default: 'document-purple.svg', img_active: 'document-white.svg' },
            { msg: "Pricing", img_default: 'pricing-label-purple.svg', img_active: 'pricing-label-white.svg' },
            { msg: "Brands", img_default: 'shapes-purple.svg', img_active: 'shapes-white.svg' },
            { msg: "Settings", img_default: 'gear-purple.svg', img_active: 'gear-white.svg', collape: true },
            { msg: "Reports", img_default: 'chart-purple.svg', img_active: 'chart-white.svg' },
            { msg: "Account Users", img_default: 'people-purple.svg', img_active: 'people-white.svg' }
        ]
      }
    },
    methods: {
        select: function(id){
            this.active = id
        }
    }

});

export default Menu;