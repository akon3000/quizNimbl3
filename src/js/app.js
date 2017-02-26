import Vue from 'vue'
import $ from 'jquery'
import Menu from './menu.js'
import Blackdrop from './blackdrop.js'
import HeadBar from './headBar.js'
import AddOrder from './addOrder.js'

let menu, blackdrop, headBar, addOrder 

window.addEventListener("load", () => {
    menu = new Menu().$mount('.app-nimbl3 .menu')
    blackdrop = new Blackdrop().$mount('.app-nimbl3 .blackdrop')
    headBar = new HeadBar().$mount('.app-nimbl3 .content .headBar')
    addOrder = new AddOrder().$mount('.app-nimbl3 .content .orderContent')
})

$(window).on('resize',() => {
    if(window.innerWidth > 767) {
        $(menu.$el).css('width', menu.$el.attributes['size-w'].nodeValue)
        $(blackdrop.$el).addClass('hide')
    } else {
        $(menu.$el).css('width','0')
        $(blackdrop.$el).addClass('hide')
    }
})