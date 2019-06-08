

import '../css/reset.styl'
import '../css/responsive.styl'
import '../css/style.styl'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';


let controllerScroll = new ScrollMagic.Controller();




new ScrollMagic.Scene({
    triggerElement:'.main'
})
.setClassToggle('.bar_0','scaleYbar')
.addTo(controllerScroll)




new ScrollMagic.Scene({
    triggerElement:'.main'
})
.setClassToggle('.mainTextContainer','textAnimation')
.addTo(controllerScroll)


new ScrollMagic.Scene({
    triggerElement:'.projectBar'
})
.setClassToggle('.projectBar','scaleYbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.projectDiv '
})
.setClassToggle('.projectDiv','translateLeft')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.projectDiv '
})
.setClassToggle('.imageContainer','opacity')
.addTo(controllerScroll)




new ScrollMagic.Scene({
    triggerElement:'.scrollIndicator_2 '
})
.setClassToggle('.bar_2','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.projectDiv_2 '
})
.setClassToggle('.projectDiv_2','translateLeft')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.projectDiv_2 '
})
.setClassToggle('.imageContainer_2','opacity')
.addTo(controllerScroll)



new ScrollMagic.Scene({
    triggerElement:'.scrollIndicator_3 '
})
.setClassToggle('.bar_3','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.projectDiv_3 '
})
.setClassToggle('.projectDiv_3','translateLeft')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.projectDiv_3 '
})
.setClassToggle('.imageContainer_3','opacity')
.addTo(controllerScroll)



new ScrollMagic.Scene({
    triggerElement:'.scrollIndicator_4 '
})
.setClassToggle('.bar_4','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.projectDiv_4 '
})
.setClassToggle('.projectDiv_4','translateLeft')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.projectDiv_4 '
})
.setClassToggle('.imageContainer_4','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.websiteTitle'
})
.setClassToggle('.contactDiv','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contactTitle'
})
.setClassToggle('.bar','scaleYbar')
.addTo(controllerScroll)

// contactScroll



