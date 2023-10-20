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
      largeSrc: 'https://bu.dusays.com/2023/09/10/64fd885385929.png', // 深色模式大图
      mobileSmallSrc: 'https://bu.dusays.com/2023/09/11/64ff0118b8400.jpg', // 手机端深色模式小图
      mobileLargeSrc: 'https://bu.dusays.com/2023/09/10/64fd885385929.png', // 手机端深色模式大图
      enableRoutes: ['/'],
      },
    };
  const theme = document.documentElement.getAttribute("data-theme") || 'light';
  const config = ldconfig[theme];

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === "data-theme" && location.pathname === '/') {
        window.location.replace("/");
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
    }
  }

  document.addEventListener("DOMContentLoaded", function() {
    initProgressiveLoad(config);
  });

  document.addEventListener("pjax:complete", function() {
    onPJAXComplete(config);
  });

})();