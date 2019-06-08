import '../css/reset.styl'
import '../css/illustrationsResponsive.styl'
import '../css/illustrations.styl'
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
    triggerElement:'.contentImage'
})
.setClassToggle('.bar_1','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.bar_1'
})
.setClassToggle('.contentImage','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.bar_1'
})
.setClassToggle('.contentText','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText'
})
.setClassToggle('.contentText_2','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText_2'
})
.setClassToggle('.contentImage_2','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText_3'
})
.setClassToggle('.bar_3','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.bar_3'
})
.setClassToggle('.contentImage_3','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentImage_3'
})
.setClassToggle('.contentText_3','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText_3'
})
.setClassToggle('.bar_4','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentImage_4'
})
.setClassToggle('.contentText_4','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText_4'
})
.setClassToggle('.contentImage_4','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText_4'
})
.setClassToggle('.contentImage_5','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentImage_5'
})
.setClassToggle('.contentText_5','textAnimation')
.addTo(controllerScroll)

















