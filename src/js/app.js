
/**
 * Import other script to app.js File.
 */
import $ from 'jquery'
import Menu from './menu.js'
import Blackdrop from './blackdrop.js'
import HeadBar from './headBar.js'
import AddOrder from './addOrder.js'


/**
 * Set variable (s)
 */
let menu, blackdrop, headBar, addOrder 


/**
 * Event Application Ready.
 */
window.addEventListener("load", () => {

    debugger // breakpoint Debug mode.

    // inject Menu components.
    menu = new Menu().$mount('.app-nimbl3 .menu')

    // inject Blackdrop components.
    blackdrop = new Blackdrop().$mount('.app-nimbl3 .blackdrop')
    blackdrop.elMenu = menu.$el

    // inject HeadBar components.
    headBar = new HeadBar().$mount('.app-nimbl3 .content .headBar')
    headBar.elMenu = menu.$el
    headBar.elBlackdrop = blackdrop.$el

    // inject AddOrder components.
    addOrder = new AddOrder().$mount('.app-nimbl3 .content .orderContent')
    addOrder.elfill = addOrder.$el.querySelector('.c-add-fill .boxDetail')
    addOrder.elbelowFill = addOrder.$el.querySelector('.c-list')
})

$(window).on('resize',() => { // event screen resize
    if(window.innerWidth >= 768) blackdrop.close(menu.$el) // Close blackdrop Menu when screen is tablet || desktop.
})