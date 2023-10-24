// 获取容器元素
const container = document.querySelector('.pl-container');

// 创建时钟外层div
const bgclockbg = document.createElement('div');
bgclockbg.id = 'bgclockbg';

// 创建时钟内层div
const bgclock = document.createElement('div');
bgclock.id = 'bgclock';

// 创建日期元素
const bgdate = document.createElement('p');
bgdate.classList.add('bgdate');
bgdate.textContent = '1697859574002';

// 创建时间元素 
const bgtime = document.createElement('p');
bgtime.classList.add('bgtime');
bgtime.textContent = '';

// 组装结构
bgclock.appendChild(bgdate);
bgclock.appendChild(bgtime);
bgclockbg.appendChild(bgclock);

// 插入到容器中
container.appendChild(bgclockbg);

// 时钟容器
var bgclockEl = document.getElementById('bgclock');
// 星期字符串数组
var bgweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// 设置定时器
var bgtimerID = setInterval(updatebgTime, 1000);
// 初始化显示时间
updatebgTime();

function updatebgTime() {
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
}
// 数字补0函数  
function zeroPadding(num, digit) {
  var zero = '';
  for(var i = 0; i < digit; i++) {
    zero += '0';
  }
  return (zero + num).slice(-digit);
}