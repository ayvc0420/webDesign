;(function(Vue){
    new Vue({
        el:'#banner',
        data:{
            bannerKey:0,
            mobBannerKey:0,
            keyN:0,
            width:window.innerWidth,
            banner:[
                {href:'./htmlExplain.html',src:'./images/banner1.webp',alt:'HTML CODE圖片',title:'前往HTML頁面'},
                {href:'./cssExplain.html',src:'./images/banner2.webp',alt:'CSS CODE圖片',title:'前往CSS頁面'},
                {href:'./jsExplain.html',src:'./images/banner3.webp',alt:'JS CODE圖片',title:'前往JS頁面'}
            ],
            mobBanner:[
                {href:'./htmlExplain.html',src:'./images/mobBanner1.webp',alt:'HTML CODE圖片',title:'前往HTML頁面'},
                {href:'./cssExplain.html',src:'./images/mobBanner2.webp',alt:'CSS CODE圖片',title:'前往CSS頁面'},
                {href:'./jsExplain.html',src:'./images/mobBanner3.webp',alt:'JS CODE圖片',title:'前往JS頁面'}
            ]
        },
        methods: {
            imgSwitch(index){
                this.keyN =index
                const width = window.innerWidth
                if(width >= 1024){
                    this.bannerKey = (this.banner.length + this.keyN) % this.banner.length
                }else{
                    this.mobBannerKey = (this.mobBanner.length + this.keyN) % this.mobBanner.length
                }
            },
        },
        mounted(){
            window.addEventListener('resize',()=>{
                this.width = window.innerWidth
            }) 
            
            setInterval(()=>{
                const width = window.innerWidth
                if(width >= 1024){
                    if(this.bannerKey < this.banner.length -1){
                        this.bannerKey +=1;
                    }else{
                        this.bannerKey = 0;
                    }
                }else{
                    if(this.mobBannerKey < this.mobBanner.length -1){
                        this.mobBannerKey +=1;
                    }else{
                        this.mobBannerKey = 0;
                    }
                }
            },30000)
        },
    
    })
    
})(Vue)