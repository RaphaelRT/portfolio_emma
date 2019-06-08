import '../css/reset.styl'
import '../css/ineyesResponsive.styl'
import '../css/ineyes.styl'
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';

const body = document.querySelector('body')
const html = document.querySelector('html')
const loop = ()=>{
    window.requestAnimationFrame(loop)
    body.style.height=`${Math.max( body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight )}px`
}
loop()

let controllerScroll = new ScrollMagic.Controller();


new ScrollMagic.Scene({
    triggerElement:'.main'
})
.setClassToggle('.bar_0','scaleYbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.main'
})
.setClassToggle('.mainContentText','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.main'
})
.setClassToggle('.bar_1','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.main'
})
.setClassToggle('.mainContentImg','opacity')
.addTo(controllerScroll)


new ScrollMagic.Scene({
    triggerElement:'.contentText_1  '
})
.setClassToggle('.bar_5','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.scrollIndicator_4'
})
.setClassToggle('.bar_4','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.scrollIndicator_2'
})
.setClassToggle('.contentImage','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentImage'
})
.setClassToggle('.contentText','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentImage'
})
.setClassToggle('.bar_3','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentImage '
})
.setClassToggle('.imageContainer','opacity')
.addTo(controllerScroll)


new ScrollMagic.Scene({
    triggerElement:'.imageContainer '
})
.setClassToggle('.bar_4','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentImage_2_1 '
})
.setClassToggle('.contentText_1','textAnimation')
.addTo(controllerScroll)


new ScrollMagic.Scene({
    triggerElement:'.scrollIndicator_3 '
})
.setClassToggle('.contentImage_2_1','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText_1 '
})
.setClassToggle('.imageUp','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.imageUp '
})
.setClassToggle('.imageDown','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.imageDown '
})
.setClassToggle('.bar_5','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.scrollIndicator_4 '
})
.setClassToggle('.contentText_2_1','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.scrollIndicator_4 '
})
.setClassToggle('.contentImage_1','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.background_4 '
})
.setClassToggle('.imageContainer_2Up','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.background_4 '
})
.setClassToggle('.imageContainer_2Down','opacity')
.addTo(controllerScroll)














