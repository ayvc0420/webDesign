;(function (Vue) {
	Vue.component('footer_component', {
		template: `
        <footer>
            <p>&copy; ayvc0420</p> 
            <div>
                本站最佳瀏覽解析度為1920x1080，不支援IE瀏覽器
            </div>
            <div class="left">
                <a href="#" id="goTop" class="footer_img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16" ref="topsvg">
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </a>
            </div>
            <div class="right">
                <a href="javascript:;" title="只是一個github的圖示" class="footer_img" @click="githubHandler">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40 " fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>
            </div>
        </footer>
        `,
		data() {
			return {
				githubClick: 0,
			};
		},
		methods: {
			githubHandler() {
				if (this.githubClick <= 10) {
					this.githubClick += 1;
				} else {
					alert('不要再點了，我只是一個github圖示!!');
				}
			},
		},
		mounted(){
            let nowWidth = window.innerWidth;
            window.addEventListener('resize', function () {
                nowWidth = window.innerWidth;
            });
            window.addEventListener('scroll', ()=>{
                if (nowWidth <= 1023) {
                    const nowHeight = document.documentElement.scrollTop;
                    if (nowHeight >= 400) {
                        this.$refs.topsvg.style.left = '20px';
                    } else {
                        this.$refs.topsvg.style.left = '-200%';
                    }
                } else {
                    this.$refs.topsvg.style.left = '20px';
                }
            });
		},
	})

    new Vue({
    }).$mount('#footer')


})(Vue);
