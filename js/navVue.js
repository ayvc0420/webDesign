;(function(Vue){
    const navList = [
        {name:'<img src="./images/logo.webp" alt="logo">',href:'./index.html',class:'menu0'},
        {name:'HTML',href:'./htmlExplain.html',class:'menu1'},
        {name:'CSS',href:'./cssExplain.html',class:'menu2'},
        {name:'JavaScript',href:'./jsExplain.html',class:'menu3'},
        {name:'Vue',href:'./vueExplain.html',class:'menu4'},
        {name:'前端更多技術<img src="./images/chevron-down.svg" alt="更多資訊 圖示">',href:'javascript:;',class:'menu5',ul:[
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
        {name:'前端更多技術<img src="./images/chevron-down.svg" alt="更多資訊 圖示">',href:'javascript:;',class:'menu5',ul:[
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
