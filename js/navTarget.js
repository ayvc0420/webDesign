;(function(){
    const menuTarget = document.getElementById('menuTarget')
    const navMenu = document.querySelector('.nav_menu')
    const menuLis = document.querySelectorAll('.nav_menu>li:not(.menu0)>a')
    menuLis.forEach(item=>{
        item.addEventListener('mouseenter',function(){
            const position = item.getBoundingClientRect()
            // const {width , height , top , left} = position
            let windowPosition = {
                top: window.scrollY+position.top,
                left: window.scrollX+position.left,
                width: position.width,
                height: position.height
            }
            menuTarget.style.width = `${windowPosition.width}px`
            menuTarget.style.height = `${windowPosition.height}px`
            menuTarget.style.top = `${windowPosition.top}px`
            menuTarget.style.left = `${windowPosition.left}px`
            menuTarget.style.transform = 'scale(100%)'
        })
    })
    navMenu.addEventListener('mouseleave',function(){
        menuTarget.style.transform = 'scale(0)'
    })
    document.querySelector('.menu0').addEventListener('mouseenter',function(){
        menuTarget.style.transform = 'scale(0)'
    })
})()