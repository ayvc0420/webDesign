;(function(Vue){
    const navList = [
        {name:'<img src="./images/logo.webp" alt="logo">',href:'./index.html',class:'menu0'},
        {name:'HTML',href:'./htmlExplain.html',class:'menu1'},
        {name:'CSS',href:'./cssExplain.html',class:'menu2'},
        {name:'JavaScript',href:'./jsExplain.html',class:'menu3'},
        {name:'Vue',href:'./vueExplain.html',class:'menu4'},
        {name:'前端更多技術<img src="./images/chevron-down.svg" alt="更多資訊 圖示">',href:'javascript:;',class:'menu5',ul:[
            {name:'Ajax',href:'./ajaxExplain.html'},
            {name:'Git',href:'./gitExplain.html'},
            {name:'Regex',href:'./regexExplain.html'},
            {name:'Svg',href:'./svgExplain.html'},
            {name:'jQuery',href:'./jqueryExplain.html'},
            {name:'Docker',href:'./dockerExplain.html'},
            {name:'CI/CD',href:'./cicdExplain.html'}
        ]},
    ]

    const mobNavList = [
        {name:'首頁',href:'./index.html',class:'menu0'},
        {name:'HTML',href:'./htmlExplain.html',class:'menu1'},
        {name:'CSS',href:'./cssExplain.html',class:'menu2'},
        {name:'JavaScript',href:'./jsExplain.html',class:'menu3'},
        {name:'Vue',href:'./vueExplain.html',class:'menu4'},
        {name:'前端更多技術<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>',href:'javascript:;',class:'menu5',ul:[
            {name:'Ajax',href:'./ajaxExplain.html'},
            {name:'Git',href:'./gitExplain.html'},
            {name:'Regex',href:'./regexExplain.html'},
            {name:'Svg',href:'./svgExplain.html'},
            {name:'jQuery',href:'./jqueryExplain.html'},
            {name:'Docker',href:'./dockerExplain.html'},
            {name:'CI/CD',href:'./cicdExplain.html'}
        ]},
    ]

    
    new Vue({
        el:'#nav',
        data:{navList,mobNavList}
    })


    
})(Vue)
