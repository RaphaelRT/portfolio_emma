import '../css/reset.styl'
import '../css/wheelpResponsive.styl'
import '../css/wheelp.styl'
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
.setClassToggle('.bar_1','scaleYbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.main'
})
.setClassToggle('.bar_2','scaleXbar')
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
.setClassToggle('.bar_3','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentContainer '
})
.setClassToggle('.contentText','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText '
})
.setClassToggle('.bar_4','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText '
})
.setClassToggle('.contentImage','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText '
})
.setClassToggle('.imageContainer','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText_2 '
})
.setClassToggle('.bar_5','scaleXbar')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.bar_5 '
})
.setClassToggle('.contentText_2','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.bar_5 '
})
.setClassToggle('.contentText_2','textAnimation')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentText_2 '
})
.setClassToggle('.contentImage_2','opacity')
.addTo(controllerScroll)

new ScrollMagic.Scene({
    triggerElement:'.contentImage_2 '
})
.setClassToggle('.up','opacity')
.addTo(controllerScroll)


new ScrollMagic.Scene({
    triggerElement:'.up '
})
.setClassToggle('.down','opacity')
.addTo(controllerScroll)



















