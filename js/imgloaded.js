/**
 * @description 实现medium的渐进加载背景的效果
 */
(function() {
  // 定义ProgressiveLoad类
  class ProgressiveLoad {
    constructor(smallSrc, largeSrc) {
      this.smallSrc = smallSrc;
      this.largeSrc = largeSrc;
      this.initTpl();
      // 监听动画事件结束
      this.container.addEventListener('animationend', () => {
        // 隐藏小图
        this.smallStage.style.display = 'none'; 
      }, {once: true});
    }

    /**
     * @description 生成ui模板
     */
    initTpl() {
      this.container = document.createElement('div');
      this.smallStage = document.createElement('div');
      this.largeStage = document.createElement('div');
      this.video = document.createElement('div'); // 斜条纹阴影样式部分1
      this.smallImg = new Image();
      this.largeImg = new Image();
      this.container.className = 'pl-container';
      this.smallStage.className = 'pl-img pl-blur';
      this.largeStage.className = 'pl-img';
      this.video.className = 'pl-video'; // 斜条纹阴影样式部分2
      this.container.appendChild(this.smallStage);
      this.container.appendChild(this.largeStage);
      this.container.appendChild(this.video); // 斜条纹阴影样式部分3
      const bgclockbg = document.createElement('div'); // 创建bgclockbg元素以下
      bgclockbg.id = 'bgclockbg';
      const bgclock = document.createElement('div');
      bgclock.id = 'bgclock';
      const bgdate = document.createElement('p');
      bgdate.classList.add('bgdate');
      bgdate.textContent = '1698223633217';
      const bgtime = document.createElement('p');
      bgtime.classList.add('bgtime');
      bgtime.textContent = '';
      bgclock.appendChild(bgdate);
      bgclock.appendChild(bgtime);
      bgclockbg.appendChild(bgclock);
      this.container.appendChild(bgclockbg); // 创建bgclockbg元素以上
      this.smallImg.onload = this._onSmallLoaded.bind(this);
      this.largeImg.onload = this._onLargeLoaded.bind(this);
    }

    /**
     * @description 加载背景
     */
    progressiveLoad() {
      this.smallImg.src = this.smallSrc;
      this.largeImg.src = this.largeSrc;
    }

    /**
     * @description 大图加载完成
     */
    _onLargeLoaded() {
      this.largeStage.classList.add('pl-visible');
      this.largeStage.style.backgroundImage = `url('${this.largeSrc}')`;
    }

    /**
     * @description 小图加载完成
     */
    _onSmallLoaded() {
      this.smallStage.classList.add('pl-visible');
      this.smallStage.style.backgroundImage = `url('${this.smallSrc}')`;
    }
  }

  const executeLoad = (config, target) => {
    console.log('执行渐进背景替换');
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const loader = new ProgressiveLoad(
      isMobile ? config.mobileSmallSrc : config.smallSrc,
      isMobile ? config.mobileLargeSrc : config.largeSrc
    );
    // 和背景图颜色保持一致，防止高斯模糊后差异较大
    if (target.children[0]) {
      target.insertBefore(loader.container, target.children[0]);
    }
    loader.progressiveLoad();
  };

  const ldconfig = {
    light: {
      smallSrc: '', // 小图链接 尽可能配置小于100k的图片
      largeSrc: 'https://bu.dusays.com/2023/09/20/650ab6c396874.png', // 大图链接 最终显示的图片
      mobileSmallSrc: '', // 手机端小图链接 尽可能配置小于100k的图片
      mobileLargeSrc: 'https://bu.dusays.com/2023/09/20/650ab6c396874.png', // 手机端大图链接 最终显示的图片
      enableRoutes: ['/'],
      },
    dark: {
      smallSrc: 'https://bu.dusays.com/2023/09/11/64ff0118b8400.jpg',  // 深色模式小图
      largeSrc: 'https://bu.dusays.com/2023/10/24/65378c62b28fc.png', // 深色模式大图
      mobileSmallSrc: 'https://bu.dusays.com/2023/09/11/64ff0118b8400.jpg', // 手机端深色模式小图
      mobileLargeSrc: 'https://bu.dusays.com/2023/10/24/65378c62b28fc.png', // 手机端深色模式大图
      enableRoutes: ['/'],
      },
    };
    

    // 获取当前主题
    const getCurrentTheme = () => {
      return document.documentElement.getAttribute('data-theme'); 
    }
    // 主题变化回调 
    const onThemeChange = () => {
      // 获取最新主题
      const currentTheme = getCurrentTheme();
      // 获取对应的配置
      const config = ldconfig[currentTheme];
      // 重新加载
      initProgressiveLoad(config);
      updatebgTime();

      document.addEventListener("DOMContentLoaded", function() {
        initProgressiveLoad(config);
        updatebgTime();
      });
    
      document.addEventListener("pjax:complete", function() {
        onPJAXComplete(config);
      });
    }
    // 初始化
    let initTheme = getCurrentTheme();
    let initConfig = ldconfig[initTheme];
    initProgressiveLoad(initConfig);

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === "data-theme" && location.pathname === '/') {
        onThemeChange();
      }
    });
  });
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"]  
  });

  function initProgressiveLoad(config) {
    // 每次加载前先清除已有的元素
    const container = document.querySelector('.pl-container');
    if (container) {
      container.remove();
    }
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
      executeLoad(config, target);
    }
  }

  function onPJAXComplete(config) {
    const target = document.getElementById('page-header');
    if (target && target.classList.contains('full_page')) {
      initProgressiveLoad(config);
      updatebgTime(); 
    }
  }

})();

function updatebgTime() {
    // 时钟容器
  var bgclockEl = document.getElementById('bgclock');
  // 星期字符串数组
  var bgweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // 设置定时器
  var bgtimerID = setInterval(updatebgTime, 1000);
  // 获取当前时间
  var bgcd = new Date();
  // 格式化时间
  var bgtime = zeroPadding(bgcd.getHours(), 2) + ':' + 
            zeroPadding(bgcd.getMinutes(), 2) + ':' + 
            zeroPadding(bgcd.getSeconds(), 2);
  // 格式化日期
  var bgdate = zeroPadding(bgcd.getFullYear(), 4) + '-' + 
            zeroPadding(bgcd.getMonth()+1, 2) + '-' +
            zeroPadding(bgcd.getDate(), 2) + ' ' + 
            bgweek[bgcd.getDay()];
  // 设置显示内容
  bgclockEl.innerHTML = `
    <p class="bgdate">${bgdate}</p>
    <p class="bgtime">${bgtime}</p>
  `;
  // 数字补0函数  
  function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }
}

updatebgTime();
