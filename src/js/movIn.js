import '../css/reset.styl'
import '../css/movInResponsive.styl'
import '../css/movIn.styl'
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
.setClassToggle('.bar_1','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.main'
})
.setClassToggle('.mainContentText','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.main'
})
.setClassToggle('.mainContentImg','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText'
})
.setClassToggle('.bar_2','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText'
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
    triggerElement:'.contentImage'
})
.setClassToggle('.titleContent','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.titleContent'
})
.setClassToggle('.contentText_2','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.titleContent'
})
.setClassToggle('.contentImage_2','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.imageContainer_2'
})
.setClassToggle('.imageUp','opacity')
.addTo(controllerScroll)



















