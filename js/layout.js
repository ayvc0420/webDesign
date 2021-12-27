
(function(){

    // nav觸摸
    const menuTarget = document.getElementById('menuTarget')
    const navMenu = document.querySelector('.nav_menu')
    const menuLis = document.querySelectorAll('.nav_menu>li:not(.menu0)>a')

    // 漢堡選單
    const touchMenu = document.getElementById('touchMenu')
    const svg1 = document.getElementById('svg1')
    const svg2 = document.getElementById('svg2')
    const mobileMenu = document.querySelector('.mob_menu')
    const svgLines = Array.from(document.querySelectorAll('#touchMenu>svg>[stroke="black"]'))
    
    // 手機板選單內容
    const menu5 = document.querySelector('.mob_menu>.menu5')
    const menu5more = document.querySelector('.menu5_more')
    const mobLis = document.querySelectorAll('.mob_menu>li')

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
    
    menu5.addEventListener('click',function(){
        mobLis.forEach(item=>item.style.display = 'none')
        menu5more.style.left = '0%'
    })

    touchMenu.addEventListener('click',function(){
        document.querySelectorAll('.mob_menu>li').forEach(item=>item.style.display = 'flex')
        menu5more.style.left = '-200%'
        const svgState = window.getComputedStyle(svg1,null).opacity
        touchMenu.style.borderColor = 'rgb(255,255,255)'
        if(svgState === '1'){
            touchMenu.style.position = 'fixed'
            svgLines.forEach(item=>{
                item.setAttribute('stroke','rgb(255, 255, 255)')
            })
            svg1.style.opacity = 0;
            svg2.style.opacity = 1;
            mobileMenu.style.top = '0%';
            mobLis.forEach(item=>item.style.opacity = '1')
        }else{
            touchMenu.style.position = 'absolute'
            touchMenu.style.borderColor = 'rgb(0,0,0)'
            svgLines.forEach(item=>{
                item.setAttribute('stroke','rgb(0, 0, 0)')
            })
            svg1.style.opacity = 1;
            svg2.style.opacity = 0;
            mobileMenu.style.top = '-200%'
            mobLis.forEach(item=>item.style.opacity = '0')
        }
    })


    const goTop = document.getElementById('goTop')
    const footerLeft = document.querySelector('footer>.left')
    goTop.addEventListener('click',goUp)

    function goUp(){
        let loopUp = setInterval(()=>{
            if(document.documentElement.scrollTop <= 25){
                clearInterval(loopUp)
            }
            const n = document.documentElement.scrollTop - 50
            document.documentElement.scrollTop = n
        },3)
    }
    let nowWidth = window.innerWidth;
    window.addEventListener('resize',function(){
        nowWidth = window.innerWidth;
    })
    window.addEventListener('scroll',function(){
        if(nowWidth <= 1023){
            const nowHeight = document.documentElement.scrollTop
            nowHeight >= 400 ? footerLeft.style.left = '20px' : footerLeft.style.left = '-200%'
        }else{
            footerLeft.style.left = '20px'
        }
    })

    // const goTop = document.getElementById('goTop')
    // goTop.addEventListener('click',function(){
    //     window.requestAnimationFrame(goUp)
    // })

    // function goUp(){
    //     const n = document.documentElement.scrollTop - 50
    //     document.documentElement.scrollTop = n
    //     if(document.documentElement.scrollTop >= 25){
    //         window.requestAnimationFrame(goUp)
    //     }
    // }

    let gitIcon = 0;
    document.querySelector('.right>.footer_img').addEventListener('click',function(){
    // document.getElementsByClassName('right')[0].addEventListener('click',function(){
        gitIcon++
        
        if(gitIcon >= 10){
            alert('不要再點了，我只是一個GitHub的圖示')
        }
    })

})()