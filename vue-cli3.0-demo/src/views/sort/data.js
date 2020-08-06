export default [
    {
      "excerpt": "    **v-model**   只是 vue 的一个语法糖 （**Vue 是单项数据流**）    -  vue中的v-model指令实现了表单的双向绑定    ```vue  <input type=\"text\" v-model=\"message\">  <p>{{message}}</p>  ```    - v-model只是语法糖，真正的实现形式：    ```vue  <input......",
      "tags": [
        "Vue"
      ],
      "id": 0,
      "title": "v-model 只是 vue 的一个语法糖 （Vue 是单项数据流）",
      "lastUpdated": "2020-05-21 11:42:26",
      "path": "/posts/v-model%E5%8F%AA%E6%98%AFvue%20%E7%9A%84%E4%B8%80%E4%B8%AA%E8%AF%AD%E6%B3%95%E7%B3%96.html"
    },
    {
      "excerpt": "  四元运算符 : 多个三元运算符 嵌套    一般三元运算符就够用了，    但是此时有个需求：state有3个状态，{null,true,false}    null→未用    true→在用    false→停用    ```js]   (state == null ? \"未用\" : (state == true ? \"在用\" : \"停用\"))  ```    ......",
      "tags": [
        "JS",
        "ES6",
        "开发笔记"
      ],
      "id": 1,
      "title": "四元运算符",
      "lastUpdated": "2020-05-07 15:52:23",
      "path": "/posts/%E5%9B%9B%E7%9B%AE%E8%BF%90%E7%AE%97%EF%BC%88%E4%B8%89%E7%9B%AE%E5%B5%8C%E5%A5%97%EF%BC%89.html"
    },
    {
      "excerpt": "  Vue中组件通讯props传递Object数据类型的注意事项    >Vue 组件通讯,其中父组件向子组件传递数据，用Props  >较为特殊的是对象Object的传递  >  >```js  >props：{  >    type:Object,  >    myObject:()=>{}  >}  >```  >    ```js  myObject：{  }  //父组件中创建对象必......",
      "tags": [
        "Vue"
      ],
      "id": 2,
      "title": "Vue中组件通讯props传递Object数据类型的注意事项",
      "lastUpdated": "2020-04-30 14:26:30",
      "path": "/posts/props%E4%BC%A0%E5%AF%B9%E8%B1%A1.html"
    },
    {
      "excerpt": "  Vue事件修饰符：    - .stop：防止事件冒泡，等同于JavaScript中的**event.stopPropagation()**  - .prevent：防止执行预设的行为，等同于JavaScript中的**event.preventDefault()**  - .capture：捕获冒泡  - .self：将事件绑定到自身，只有自身才能触发  - .once：只触发一次  -......",
      "tags": [
        "Vue",
        "开发笔记"
      ],
      "id": 3,
      "title": "Vue事件修饰符",
      "lastUpdated": "2020-04-27 15:14:30",
      "path": "/posts/%E4%BF%AE%E9%A5%B0%E7%AC%A6.html"
    },
    {
      "excerpt": "   数组对象-排序      sort()   排序，需要传入callback函数    > arr.sort( (a,b)=>(a-b) )   从小到大排序  > arr.sort( (a,b)=>(a-b) )   从大到小排序       上面是对于 纯数组来说的，如果是 **数组对象**  需要对上面方法进行改造    ```js  var person = [{name......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 4,
      "title": "数组对象-排序",
      "lastUpdated": "2020-04-26 15:06:33",
      "path": "/posts/%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1-%E6%8E%92%E5%BA%8F.html"
    },
    {
      "excerpt": "  JS事件委托（冒泡相关）    ![事件委托1](https://github.com/Ho-Jack/daily-note/raw/master/img/事件委托1.png)     事件传播分成三个阶段：    - 捕获阶段：从window对象传导到目标节点（上层传到底层）称为“捕获阶段”（capture phase），捕获阶段不会响应任何事件；  - 目标阶段：在目标节点上触发......",
      "tags": [
        "JS",
        "ES6",
        "开发笔记"
      ],
      "id": 5,
      "title": "JS事件委托（冒泡相关）",
      "lastUpdated": "2020-04-15 19:22:05",
      "path": "/posts/js%E4%BA%8B%E4%BB%B6%E5%A7%94%E6%89%98%EF%BC%88%E5%86%92%E6%B3%A1%E7%9B%B8%E5%85%B3%EF%BC%89.html"
    },
    {
      "excerpt": "  [DIV居中的几种方法](https://www.cnblogs.com/ones/p/4362531.html)    1、    ```css  body{      text-align:center;     }   ```    缺点：body内所有内容一并居中    2、  (好像有问题)    ```css  .center{       position: fixed;  ......",
      "tags": [
        "CSS",
        "样式"
      ],
      "id": 6,
      "title": "DIV居中的几种方法",
      "lastUpdated": "2020-04-15 10:22:00",
      "path": "/posts/div%E5%B1%85%E4%B8%AD%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E6%B3%95.html"
    },
    {
      "excerpt": "  table    <thead>   表头  <tbody> 主体   <tfoot>表尾    <tr> 表格行，<th>表头（table head），<td> 单元格（table data）。    ```html   <table  border=\"1\" width=\"95%\"  cellspacing=\"0\" ><!--表格开始-->                  <capti......",
      "tags": [
        "HTML",
        "样式"
      ],
      "id": 7,
      "title": "table",
      "lastUpdated": "2020-04-15 09:11:54",
      "path": "/posts/table.html"
    },
    {
      "excerpt": " CSS3 filter（滤镜）    B 站在新冠疫情国家悼念活动，整个主题变为灰色    技术调度考虑：    1、用了scss less 等预编译css  设置了公共变量    2、一个个修改？ 这也太麻烦了吧？        打开控制台发现新大陆    ```css  filter: grayscale(100%);  ```    一行代码解决。    ......",
      "tags": [
        "CSS",
        "样式"
      ],
      "id": 8,
      "title": "CSS3 filter（滤镜）",
      "lastUpdated": "2020-04-14 11:26:03",
      "path": "/posts/CSS3%20filter(%E6%BB%A4%E9%95%9C)%20%E5%B1%9E%E6%80%A7.html"
    },
    {
      "excerpt": "1. <h1>最重要的标题H1</h1>   2. <h2>次要栏目或标题-小标题H2</h2>   3. <h3>再次要栏目或分类小标题H3</h3>   4. <h4>文中分类小标题H4</h4> ......",
      "tags": [
        "HTML",
        "样式"
      ],
      "id": 9,
      "title": "h1-h5",
      "lastUpdated": "2020-04-09 09:29:14",
      "path": "/posts/h1-h5.html"
    },
    {
      "excerpt": "  合并对象     JS    ```js  obj1={   a:1,   b:2  }  obj2={  c:3  }    ```      ```js  Object.assign(obj1,obj2)  ```     ES6     ```js  obj={...obj1,  ...obj2}  ```    这都是浅拷贝，都要考虑原对象的属性值如果还是对象会的出现b......",
      "tags": [
        "JS",
        "ES6",
        "开发笔记"
      ],
      "id": 10,
      "title": "合并对象",
      "lastUpdated": "2020-04-08 16:02:24",
      "path": "/posts/%E5%90%88%E5%B9%B6%E5%AF%B9%E8%B1%A1.html"
    },
    {
      "excerpt": "  问题：height:100%不起作用？    **%设定宽高是根据`父级`宽高来定的：**         宽度的100%很容易实现，但是height:100%就有点难，这是为什么呢？    %是一个`相对父元素`计算得来的高度，要想使他有效，我们需要设置父元素的height;    要特别注意的一点是，在之中的元素的父元素并不仅仅只是，还包括了。    所以我们要同时设置这两......",
      "tags": [
        "CSS",
        "样式"
      ],
      "id": 11,
      "title": "height:100%不起作用的问题",
      "lastUpdated": "2020-03-13 10:17:09",
      "path": "/posts/height100%25%E4%B8%8D%E8%B5%B7%E4%BD%9C%E7%94%A8.html"
    },
    {
      "excerpt": "  Vue中form提交(使用js的 FormData对象传文件流，传json)     基础知识：    ```  XMLHttpRequest 的实例有两种方式提交表单：  ①使用 AJAX  ②使用 FormData API  第一种方式使用AJAX最复杂的但也是最灵活和最强大。  第二种方式（ 使用 FormData API ）是最简单最快捷的，但是缺点是被收集的数据无法使用JS......",
      "tags": [
        "Vue",
        "开发笔记"
      ],
      "id": 12,
      "title": "Vue中form提交(使用js的 FormData对象传文件流，传json)",
      "lastUpdated": "2020-03-03 16:04:08",
      "path": "/posts/vue%E4%B8%ADform%E6%8F%90%E4%BA%A4(%E4%BD%BF%E7%94%A8js%20FormData%E4%BC%A0%E6%96%87%E4%BB%B6%E6%B5%81%EF%BC%8C%E4%BC%A0json).html"
    },
    {
      "excerpt": "   setTimeout在循环中的问题    >  同步优先于异步优先于回调     一、背景    最近在翻看以前的老书《node.js开发指南》，恰好碰到 for 循环 + setTimeout 的经典例子，于是重新梳理了思路并记录下。     二、写在前面，setTimeout 和 setInterval 的执行机制    在日常编码中，你会发现，给 setTime......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 13,
      "title": "setTimeout在循环中的问题",
      "lastUpdated": "2020-01-15 16:45:03",
      "path": "/posts/setTimeout%E5%9C%A8%E5%BE%AA%E7%8E%AF%E4%B8%AD%E7%9A%84%E9%97%AE%E9%A2%98.html"
    },
    {
      "excerpt": " **** 包含了一个位置信息，默认的锚是**top** 也就是网页的上端。    而javascript:void(0), 仅仅表示一个死链接。(可以取消a标签的默认行为，刷新页面)        ```html  <a href=\"javascript:void(0);\">点我没有反应的!</a>  <a href=\"pos\">点我定位到指定位置!</a>  ```    ......",
      "tags": [
        "Js",
        "开发笔记"
      ],
      "id": 14,
      "title": "href=\"javascript:void(0);\"",
      "lastUpdated": "2019-11-12 10:28:35",
      "path": "/posts/href='#'%E5%92%8Chref='javascript%EF%BC%9Avoid(0)'.html"
    },
    {
      "excerpt": "  Vue中使用三元运算符及扩展四元运算符    **style三元表达式**    ```html  <p :style=\"{'color': (checkIndex3==m.txt ? '3d8cff':'BBBBBB')}\">{{m.txt}}</p>  ```    **class三元表达式**    ```html  <i class=\"iconfont \"  :class=\"[......",
      "tags": [
        "开发笔记",
        "Vue"
      ],
      "id": 15,
      "title": "Vue中使用三元运算符及扩展四元运算符",
      "lastUpdated": "2019-11-08 00:00:00",
      "path": "/posts/Vue%E4%B8%AD%E4%BD%BF%E7%94%A8%E4%B8%89%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6%E5%8F%8A%E6%89%A9%E5%B1%95%E5%9B%9B%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6.html"
    },
    {
      "excerpt": "  VH单位    1、px    像素，我们在网页布局中一般都是用px。      2、百分比,一般宽泛的讲是相对于父元素，自适应网页布局越来越多，百分比也经常用到了。      3、Viewport      viewport：可视窗口，也就是浏览器。      vw Viewport宽度， 1vw 等于viewport宽度的1%      vh Viewport高度， 1vh 等于vie......",
      "tags": [
        "CSS",
        "样式"
      ],
      "id": 16,
      "title": "VH单位",
      "lastUpdated": "2019-10-24 17:11:24",
      "path": "/posts/vh%E5%8D%95%E4%BD%8D.html"
    },
    {
      "excerpt": "  将Vue中的方法或对象挂载到window 对象    -  Vue方法挂载到window对象    ```js    mounted() {      // 将backToday方法绑定到window下面，提供给外部调用       window['backToday'] = () => {          this.goToday()       }   },   methods......",
      "tags": [
        "Vue",
        "开发笔记"
      ],
      "id": 17,
      "title": "将Vue中的方法或对象挂载到 window 对象",
      "lastUpdated": "2019-10-24 15:51:58",
      "path": "/posts/%E5%B0%86Vue%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95%E6%88%96%E5%AF%B9%E8%B1%A1%E6%8C%82%E8%BD%BD%E5%88%B0window%20%E5%AF%B9%E8%B1%A1.html"
    },
    {
      "excerpt": "  Vue中使用定时器技巧   1.data中定义    ```js  data(){      return{        changeData: [0, 90, 180, 270, 360],     timeName:null      }  }  ```     2.method    ```js  methods:{     xx(){     \tclearInterv......",
      "tags": [
        "Vue",
        "开发笔记"
      ],
      "id": 18,
      "title": "Vue中使用定时器技巧",
      "lastUpdated": "2019-10-24 15:25:19",
      "path": "/posts/vue%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%AE%9A%E6%97%B6%E5%99%A8.html"
    },
    {
      "excerpt": "  过滤对象及数组的方法     向对象添加元素      第一种方法     ```js   let obj ={\"name\":\"tom\",\"age\":16}   let key = \"id\";   let value = 2   obj[key] = value;   //obj  {name: \"tom\", age: 16, id: 2}   ```      第二......",
      "tags": [
        "开发笔记",
        "JS"
      ],
      "id": 19,
      "title": "过滤对象及数组的方法",
      "lastUpdated": "2019-10-20 00:00:00",
      "path": "/posts/%E5%AF%B9%E8%B1%A1%E8%BF%87%E6%BB%A4.html"
    },
    {
      "excerpt": "  向对象添加元素      第一种方法     ```js   let obj ={\"name\":\"tom\",\"age\":16}   let key = \"id\";   let value = 2   obj[key] = value;   //obj  {name: \"tom\", age: 16, id: 2}   ```      第二种方法，利用扩展运算符,简......",
      "tags": [
        "开发笔记",
        "JS"
      ],
      "id": 20,
      "title": "过滤对象及数组的方法",
      "lastUpdated": "2019-10-20 00:00:00",
      "path": "/posts/%E5%90%91%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E5%85%83%E7%B4%A0%E5%92%8C%E5%AF%B9%E8%B1%A1%E8%BF%87%E6%BB%A4.html"
    },
    {
      "excerpt": "  vue有关`$nextTick`的理解    >  this.$nextTick( ()=>{} )    1、就是在vue生命周期creat()创建初始，一定要把对dom的操作放在Vue.nextTick()中  因为vue在creat阶段并没有任何对页面的渲染，这时候进行的操作没有任何作用，  所以需要Vue.nextTick()方法等待vue的dom渲染完成之后渲染  ......",
      "tags": [
        "Vue"
      ],
      "id": 21,
      "title": "Vue有关`$nextTick`的理解",
      "lastUpdated": "2019-10-14 09:29:30",
      "path": "/posts/$nextTick.html"
    },
    {
      "excerpt": " ```css  @media screen and (min-width:1200px)      >=1200px  @media screen and (min-width:992px)       >=992px  @media screen and (min-width:768px)       >=768px  @media screen and (min-width:480px)  ......",
      "tags": [
        "CSS",
        "样式"
      ],
      "id": 22,
      "title": "媒体查询",
      "lastUpdated": "2019-09-25 09:20:59",
      "path": "/posts/%E5%AA%92%E4%BD%93%E6%9F%A5%E8%AF%A2.html"
    },
    {
      "excerpt": "  JS 技巧    1、不要使用隐式类型转换 （使用===而不是==）    JavaScript是一种松散类型的语言。如果使用得当，这是一个好处，因为它给你带来了灵活性。    ①大多数运算符 +-*/==(不包括 ===)在处理不同类型的操作数时会进行隐式转换。    ②语句 **if（condition）{...}， while（condition）{...} ** 隐式地将条件转换为......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 23,
      "title": "JS技巧",
      "lastUpdated": "2019-09-20 00:00:00",
      "path": "/posts/JS%E6%8A%80%E5%B7%A7.html"
    },
    {
      "excerpt": " **import和require**    require    特点： 1.运行时加载  2.拷贝到本页面   3.全部引入    import     特点： 1.编译时加载  2.只引用定义     3.按需加载     **es6:         export  default**             **import**     **commonjs:     module.ex......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 24,
      "title": "JS中import的用法总结",
      "lastUpdated": "2019-09-15 00:00:00",
      "path": "/posts/JS%E4%B8%ADimport%E7%9A%84%E7%94%A8%E6%B3%95.html"
    },
    {
      "excerpt": "  **闭包**（函数里的函数）     ①有权访问另一个函数作用域中的变量的函数。     ②能够读取其他函数内部变量的函数,（定义在一个函数内部的函数）     ③「函数」和「函数内部能访问到的变量」（也叫环境）的总和。     创建闭包的常见方式： 在一个函数内部创建另一个函数，并将函数通过return对象返回。     作用：      ......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 25,
      "title": "闭包的总结",
      "lastUpdated": "2019-09-11 00:00:00",
      "path": "/posts/%E9%97%AD%E5%8C%85.html"
    },
    {
      "excerpt": " 立即执行函数的几种写法  ```js  !function(){    }()  //！号，可以替换成 ~ , * , + , - , ! 等其他一元操作符，  //如果没有这个加号的话，解析器会认为function是一个函数声明的开始，而后面（）将会导致语法错误。  //在function前面加上+号时，就变成了一个函数表达式，而函数表达式后面又添加了一个()就变成了一个立即执行的函数了。......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 26,
      "title": "立即执行函数的几种写法",
      "lastUpdated": "2019-09-11 00:00:00",
      "path": "/posts/%E7%AB%8B%E5%8D%B3%E6%89%A7%E8%A1%8C%E5%87%BD%E6%95%B0%E7%9A%84%E5%87%A0%E7%A7%8D%E5%86%99%E6%B3%95.html"
    },
    {
      "excerpt": "  通过props  父组件向子组件传值 出现获取不到数据的解决方案    问题：当父组件传值给子组件echarts时，发现子组件获取的props为空，刚开始以为是钩子函数放错了地方，后来发现从mounted和created都不行。当在父组件data定义传递的数据的时候子组件显示正常    > 原因：后来经过排查，此处省略N字，发现echarts是在渲染的时候就传递数据    解决方案 ......",
      "tags": [
        "开发笔记",
        "Vue",
        "echarts"
      ],
      "id": 27,
      "title": "Vue中echarts父组件向子组件传值出现获取不到数据的解决方案",
      "lastUpdated": "2019-09-08 00:00:00",
      "path": "/posts/Vue%E4%B8%ADecharts%E7%88%B6%E7%BB%84%E4%BB%B6%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%80%BC.html"
    },
    {
      "excerpt": " JS绑定事件的几种方式  >    在JavaScript中，有三种常用的绑定事件的方法：  > 1. 在DOM元素中直接绑定；  > 2. 在JavaScript代码中绑定；  > 3. 绑定事件监听函数。      1. 在DOM元素中直接绑定  onXXX = 'js代码'    > onXXX为事件名称，onclick 单击事件、 ondouble 双击事件、onmouseov......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 28,
      "title": "JS绑定事件的几种方式",
      "lastUpdated": "2019-08-01 00:00:00",
      "path": "/posts/js%E7%BB%91%E5%AE%9A%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html"
    },
    {
      "excerpt": "  table里enum如何渲染色彩    >  用过滤器和class绑定实现，先过滤不同字段的颜色然后再绑定class    -  HTML    ```html  <span :class=\"scope.row[key].key | statusFilter\"         v-if=\"key == 'status' || key == 'stockInStatus' || ......",
      "tags": [
        "Vue",
        "Element-UI",
        "开发笔记"
      ],
      "id": 29,
      "title": "table里enum如何渲染色彩",
      "lastUpdated": "2019-05-20 18:00:00",
      "path": "/posts/table%E9%87%8Cenum%E5%A6%82%E4%BD%95%E6%B8%B2%E6%9F%93%E8%89%B2%E5%BD%A9.html"
    },
    {
      "excerpt": "  promise实现函数顺序执行    > Promise.resolve(value) == return new Promise((resolve,reject)=>{ resolve(value) })  > promise.then() 必须返回新的promise对象 才能进行组成promise链     函数顺序执行    ```js  function2(){      /......",
      "tags": [
        "JS",
        "ES6",
        "开发笔记"
      ],
      "id": 30,
      "title": "promise实现函数顺序执行",
      "lastUpdated": "2019-05-15 18:00:00",
      "path": "/posts/promise%E5%AE%9E%E7%8E%B0%E5%87%BD%E6%95%B0%E9%A1%BA%E5%BA%8F%E6%89%A7%E8%A1%8C.html"
    },
    {
      "excerpt": "  全局过滤器   过滤器的基本语法    1. 全局过滤器       ```js     //注册全局过滤器     Vue.filter('myFilter', function (value) {       return  '全局注册器';     })     //使用      {{'调用全局过滤器' | myFilter}}     ```    2. 本地过滤器    ......",
      "tags": [
        "Vue",
        "开发笔记"
      ],
      "id": 31,
      "title": "全局过滤器",
      "lastUpdated": "2019-05-12 16:00:00",
      "path": "/posts/%E5%85%A8%E5%B1%80%E8%BF%87%E6%BB%A4%E5%99%A8.html"
    },
    {
      "excerpt": "  注册组件的基本语法：    - 全局注册(这种方式注册组件必须在vue实例化之前声明)      ```js    Vue.component('tag-name',{})    ```    ---    ![全局组件目录](https://raw.githubusercontent.com/Ho-Jack/daily-note/master/img/全局组件目录.png)    ......",
      "tags": [
        "VUE",
        "开发笔记"
      ],
      "id": 32,
      "title": "如何注册全局组件",
      "lastUpdated": "2019-05-11 18:00:00",
      "path": "/posts/%E5%85%A8%E5%B1%80%E7%BB%84%E4%BB%B6.html"
    },
    {
      "excerpt": "   Element-UI 中分页组件在项目中的用法    1. 在html中    ``` html   <el-pagination                @size-change=\"handleSizeChange\"   //改变每页条数时触发的函数                @current-change=\"handleCurrentChange\"   //改变页码时触发的......",
      "tags": [
        "Vue",
        "Element-UI",
        "开发笔记"
      ],
      "id": 33,
      "title": "Element-UI中分页组件在项目中如何用",
      "lastUpdated": "2019-05-09 16:00:00",
      "path": "/posts/%E5%88%86%E9%A1%B5%E7%BB%84%E4%BB%B62.0%E7%AE%80%E5%8C%96%E7%89%88.html"
    },
    {
      "excerpt": "  Element-UI中 table组件在项目中简单封装    > 暂时还没有添加 双击列表跳转进入编辑页的事件    1. 在html里       ``` html        <el-table               id=\"dataContainer\"               ref=\"dataContainer\"               :data=\"tableDa......",
      "tags": [
        "Vue",
        "Element-UI",
        "开发笔记"
      ],
      "id": 34,
      "title": "Element-UI中table组件的简单封装",
      "lastUpdated": "2019-05-08 04:00:00",
      "path": "/posts/Element-UI%E4%B8%AD%20table%E7%BB%84%E4%BB%B6%E5%9C%A8%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%AE%80%E5%8D%95%E5%B0%81%E8%A3%85.html"
    },
    {
      "excerpt": "  Element-UI,table表格里单选按钮妙用     *   table表格组件中单选按钮    ```html  <el-table-column width=\"40\" align=\"center\" header-align=\"center\">     <template scope=\"scope\">        <el-radio class=\"radio\" v-mode......",
      "tags": [
        "Vue",
        "Element-UI",
        "开发笔记"
      ],
      "id": 35,
      "title": "Element-UI,table表格里单选按钮妙用",
      "lastUpdated": "2019-04-11 11:24:48",
      "path": "/posts/table%E8%A1%A8%E6%A0%BC%E4%B8%AD%E5%8D%95%E9%80%89%E6%8C%89%E9%92%AE%E5%A6%99%E7%94%A8.html"
    },
    {
      "excerpt": "  Vuex 知识    *   基础知识总结      > store( state、mutations、actions、getters)    * state 用来数据共享数据存储                                      $store.state.xxx    * mutation 用来注册改变数据状态（同步）               $stor......",
      "tags": [
        "VUE",
        "开发笔记"
      ],
      "id": 36,
      "title": "Vuex知识要点",
      "lastUpdated": "2019-04-11 04:00:00",
      "path": "/posts/VUEX.html"
    },
    {
      "excerpt": " 背景图自适应宽高  ```css  .zoomImage {              background-image:url(images/yuantiao.jpg);              background-repeat:no-repeat;                 background-size:100% 100%;              -moz-backgro......",
      "tags": [
        "CSS",
        "样式"
      ],
      "id": 37,
      "title": "背景图自适应宽高",
      "lastUpdated": "2019-04-11 04:00:00",
      "path": "/posts/%E8%83%8C%E6%99%AF%E5%9B%BE%E8%87%AA%E9%80%82%E5%BA%94%E5%AE%BD%E9%AB%98.html"
    },
    {
      "excerpt": "   原生JS弹窗封装     封装函数    ```  document.body.appendChild(node);    ```    ```js  \tfunction openDialog(option) {      option.btns = option.btns || [];      var footer = document.createElement(\"div......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 38,
      "title": "原生JS弹窗封装",
      "lastUpdated": "2019-04-11 04:00:00",
      "path": "/posts/%E5%8E%9F%E7%94%9Fjs%E5%BC%B9%E7%AA%97%E5%B0%81%E8%A3%85.html"
    },
    {
      "excerpt": "   关于VUE的混入使用      >    mixins就是定义一部分公共的方法或者计算属性,然后混入到各个组件中使用,方便管理与统一修改(但是状态不共享)    -       普通使用：    1. 定义一个mixin.js文件       ![混入](https://raw.githubusercontent.com/Ho-Jack/daily-note/mast......",
      "tags": [
        "Vue",
        "开发笔记"
      ],
      "id": 39,
      "title": "Vue中混入mixin的使用",
      "lastUpdated": "2019-04-11 04:00:00",
      "path": "/posts/mixin.html"
    },
    {
      "excerpt": "  关于import      -   import * as  xx  from   'xx'    > 导出的内容组合成一个对象返回；    在xx.js下  ```js  export const  x1={   }  export const  x2={   }  ```    -  import   xx    from '   xx'    > 导出这个默认 **xx*......",
      "tags": [
        "JS",
        "ES6",
        "开发笔记"
      ],
      "id": 40,
      "title": "import",
      "lastUpdated": "2019-04-01 00:00:00",
      "path": "/posts/import.html"
    },
    {
      "excerpt": "   Vue除了用过滤器（filter）显示字典字段还能用对象的技巧实现    后端返回的字典字段   { gender：1，color：2}     // 其中gender ：1是男  2是女    正常这种Vue 需要通过过滤器来  {{ gender | filter }}      实现数据展示        可以利用对象来巧妙实现：      对象属性和属性值调转    ```js ......",
      "tags": [
        "Vue",
        "开发笔记"
      ],
      "id": 41,
      "title": "Vue除了用过滤器（filter）显示字典字段还能用对象的技巧实现",
      "lastUpdated": "2019-03-13 09:24:59",
      "path": "/posts/%E9%99%A4%E4%BA%86%E7%94%A8%E8%BF%87%E6%BB%A4%E5%99%A8%E6%98%BE%E7%A4%BA%E5%AD%97%E5%85%B8%E5%AD%97%E6%AE%B5%E8%BF%98%E8%83%BD%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%8A%80%E5%B7%A7.html"
    },
    {
      "excerpt": " QS插件      qc是一个增加了一些安全性的查询字符串解析和序列化字符串的库  1. 下载   在项目中使用命令行工具输入：npm install qs  2. 安装完成后在需要用到的组件中：      import qs from  'qs’  >    主要的**2**个方法   **qs.parse() **   **qs.stringify()**    ```js ......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 42,
      "title": "QS插件",
      "lastUpdated": "2019-03-04 16:00:00",
      "path": "/posts/qs%E6%8F%92%E4%BB%B6.html"
    },
    {
      "excerpt": "  Vue实例里this的使用    >  在Vue的生命周期钩子方法（如created，mounted， updated以及destroyed）里使用this，  >  this指向调用它的Vue实例。      在vue的生命周期的钩子方法中使用箭头函数可能改变this的指向：（箭头函数不能作为对象的属性）    ```js  methods:{  xx : (......",
      "tags": [
        "JS",
        "ES6",
        "Vue",
        "开发笔记"
      ],
      "id": 43,
      "title": "Vue实例里this的使用",
      "lastUpdated": "2019-02-11 18:00:00",
      "path": "/posts/Vue%E5%AE%9E%E4%BE%8B%E9%87%8Cthis%E7%9A%84%E4%BD%BF%E7%94%A8.html"
    },
    {
      "excerpt": "  空数组/空对象  在三元运算符中    > 三元条件运算符  >  > **格式： 表达式1?表达式2:表达式3**     问题：空数组，和空对象在三目运算中视为true。    ```js  []?\"true\":'false'   //true  let obj={}  obj?\"true\":'false'   //true  ```    所以在三元运算中需要对空数组和对象进行......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 44,
      "title": "空数组/空对象 在三元运算符中",
      "lastUpdated": "2019-11-15 0‏‎8:51:13",
      "path": "/posts/%E7%A9%BA%E6%95%B0%E7%BB%84%E7%A9%BA%E5%AF%B9%E8%B1%A1%E5%9C%A8%E4%B8%89%E5%85%83%E8%BF%90%E7%AE%97%E7%AC%A6%E4%B8%AD.html"
    },
    {
      "excerpt": "  this在Vue中的指向    我们知道，如果Vue的data中有属性message，那么方法中直接用this.message就可以获取到这个message的值    >  在Vue的methdos方法，普通函数的this指向的就是Vue的实例，this.message可以获取到data中的值，  >   而箭头函数的this指向了window，不能获取到值      ......",
      "tags": [
        "JS",
        "ES6",
        "Vue",
        "开发笔记"
      ],
      "id": 45,
      "title": "this在Vue中的指向",
      "lastUpdated": "2019-02-11 16:00:00",
      "path": "/posts/this%E5%9C%A8vue%E4%B8%AD%E7%9A%84%E6%8C%87%E5%90%91.html"
    },
    {
      "excerpt": "  elment-ui表单校验    ```html  <el-form  label-width=\"130px\" :model=\"form\" :rules=\"rules\" ref=\"form\">  <el-form-item label=\"作者\" prop=\"author\">      <el-input v-model=\"form.author\"></el-input>  </el-fo......",
      "tags": [
        "Element-UI",
        "开发笔记"
      ],
      "id": 46,
      "title": "Element-UI表单校验",
      "lastUpdated": "2018-10-01 00:00:00",
      "path": "/posts/Element-UI%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C.html"
    },
    {
      "excerpt": "  vue 监听路由变化    > - **to: Route** 即将要进入的目标 路由对象  > - **from: Route**当前导航正要离开的路由     方法一：通过 watch    ```js  // 监听,当路由发生变化的时候执行  watch:{    $route(to,from){      console.log(to.path);    }  },  ```......",
      "tags": [
        "Vue",
        "路由"
      ],
      "id": 47,
      "title": "vue 监听路由变化",
      "lastUpdated": "2019-10-24 ‏‎14:32:43",
      "path": "/posts/Vue%E4%B8%AD%E7%9B%91%E5%90%AC%E8%B7%AF%E7%94%B1%E5%8F%98%E5%8C%96.html"
    },
    {
      "excerpt": "   获取对象键值的方式    获取对象键值的方式    ```js  var obj={        a:1,        b:2  }   ① obj.a   ② obj['a']    ```    遍历对象 获取键值    ```js  var obj={        a:1,        b:2  }  Object.values(obj)    // [1,2]  for(......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 48,
      "title": "获取对象键值的方式",
      "lastUpdated": "2019-11-21 0‏‎9:40:44",
      "path": "/posts/%E8%8E%B7%E5%8F%96%E5%AF%B9%E8%B1%A1%E9%94%AE%E5%80%BC%E7%9A%842%E7%A7%8D%E6%96%B9%E5%BC%8F.html"
    },
    {
      "excerpt": " 判断是否为空的几种方式  >（值和类型）全等 ===     不全等  ！==     >（值）      相等 ==      不相等  ！=    ```js  typeof (null)   //object  ```    > null为object类型是JS 机制的错误     判断undefined    ```js  if(a === undefined) {      ......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 49,
      "title": "判断是否为空的几种方式",
      "lastUpdated": "2019-09-23 ‏‎17:18:10",
      "path": "/posts/%E5%88%A4%E6%96%AD%E4%B8%BA%E7%A9%BA%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E5%BC%8F.html"
    },
    {
      "excerpt": "  运算符    **&&** 第一个运算数是false，就不再考虑第二个运算数，直接返回false。    **||**  第一个运算数是true，也不再考虑第二个运算数，直接返回true。    **&** 和  **|** 运算符却不是这样的，它们总是要比较两个运算数才得出结果，因而性能上&&和||会比&和|好。          功能用法    &&和||只能进行逻辑运算，而&......",
      "tags": [
        "JS",
        "开发笔记"
      ],
      "id": 50,
      "title": "运算符",
      "lastUpdated": "2019-01-02 00:00:00",
      "path": "/posts/%E8%BF%90%E7%AE%97%E7%AC%A6.html"
    },
    {
      "excerpt": "  数组的相关方法总结    **数组的方法有数组原型方法，也有从Object对象继承来的方法，这里我们只介绍数组的原型方法，数组原型方法主要有以下这些：**  join()                        数组=>字符串    split()                      字符串=>数组  push()           (从后添加)接收任意数量的参数，逐个添加至......",
      "tags": [
        "JS",
        "ES6",
        "开发笔记"
      ],
      "id": 51,
      "title": "数组的相关方法总结",
      "lastUpdated": "2020-04-16 ‏‎10:05:51",
      "path": "/posts/JS%E6%95%B0%E7%BB%84%E7%9A%84%E7%9B%B8%E5%85%B3%E6%96%B9%E6%B3%95.html"
    },
    {
      "excerpt": "  浅拷贝和深拷贝    JavaScript有两种数据类型，**基础数据类型**和**引用数据类型**    > 基础数据类型：直接存储在栈(stack)中的数据 ，有undefined，boolean，number，string，null  > 引用数据类型： 栈内存保存的是堆内存地址，实际存在堆内存中 (（Array，Object，Function）    引用数据类型在栈中存储了指针，......",
      "tags": [
        "JS",
        "ES6",
        "开发笔记"
      ],
      "id": 52,
      "title": "浅拷贝和深拷贝",
      "lastUpdated": "2020-04-01 ‏‎16:57:19",
      "path": "/posts/%E6%B7%B1%E6%8B%B7%E8%B4%9D%E4%B8%8E%E6%B5%85%E6%8B%B7%E8%B4%9D.html"
    },
    {
      "excerpt": " this在axios的指向问题    -  在Vue中this始终指向Vue，但axios中this为undefined，例如    ```js  methods:{      loadData:function(){          axios.get('static/mock.json')              .then( function (response){     ......",
      "tags": [
        "Vue",
        "开发笔记"
      ],
      "id": 53,
      "title": "this在axios的指向问题",
      "lastUpdated": "2019-02-11 04:00:00",
      "path": "/posts/this%E5%9C%A8axios%E7%9A%84%E6%8C%87%E5%90%91%E9%97%AE%E9%A2%98.html"
    },
    {
      "excerpt": " sessionStroage应用要点  *  基本使用      ```js    sessionStorage.setItem( key, value);    ```      *  sessionStorage 的使用注意事项:      > sessionStorage 不能将对象、数组等格式的数据作为 value 进行存储    1. 如果存储对象、数组等格式的数据......",
      "tags": [
        "开发笔记",
        "JS"
      ],
      "id": 54,
      "title": "sessionStroage应用要点",
      "lastUpdated": "2018-11-08 04:10:03",
      "path": "/posts/sessionStroage.%E5%BA%94%E7%94%A8%E8%A6%81%E7%82%B9.html"
    },
    {
      "excerpt": "  高度塌陷    什么是高度塌陷？**    ​    父元素高度自适应(父元素宽高未设置)，子元素 float (子元素脱离文档流) 后，无法撑起父元素的高度，造成父元素高度为0，称为高度塌陷问题。    ​     父元素的高度一旦塌陷，所以元素的位置将上移，导致整个页面布局混乱。    **如何来解决高度塌陷？**    **方案一：**给父元素一个固定的高度    ​    **缺点......",
      "tags": [
        "CSS",
        "样式"
      ],
      "id": 55,
      "title": "高度塌陷",
      "lastUpdated": "2019-11-19 0‏9:55:49",
      "path": "/posts/%E9%AB%98%E5%BA%A6%E5%A1%8C%E9%99%B7.html"
    },
    {
      "excerpt": "  import和require    >- require    特点： 1.运行时加载  2.拷贝到本页面   3.全部引入  >- import     特点： 1.编译时加载  2.只引用定义     3.按需加载  >  >- es6:         export  default            import   >- commonjs:     module.export......",
      "tags": [
        "JS",
        "ES6",
        "开发笔记"
      ],
      "id": 56,
      "title": "import和require",
      "lastUpdated": "2020-05-22 ‏‎09:14:26",
      "path": "/posts/import%E5%92%8Crequire.html"
    },
    {
      "excerpt": "  Vue 里监听滚动事件    -  元素上：    ```   @scroll.native=\"\"     ```    -  方法：    ```js  mounted(){      // 监听resize事件，      window.onresize = () => {}      window.addEventListener(\"resize\", ()=>{}, ......",
      "tags": [
        "Vue"
      ],
      "id": 57,
      "title": "Vue 里监听滚动事件",
      "lastUpdated": "2019-11-22 ‏‎09:14:26",
      "path": "/posts/vue%E9%87%8C%E6%BB%9A%E5%8A%A8%E4%BA%8B%E4%BB%B6%E7%9B%B8%E5%85%B3.html"
    },
    {
      "excerpt": " 1XX：指示信息——表示请求已经接收，继续处理。    2XX：成功——表示请求已被成功接收、理解、接受。     3XX：重定向——要完成请求必须进行更进一步的操作。    4XX：客服端错误——请求有语法错误或者请求无法实现。    5XX：服务器错误——服务器未能实现合法的请求。          **常见的HTTP状态码：**    **200——OK，请求成功**    301—......",
      "tags": [
        "HTTP",
        "开发笔记"
      ],
      "id": 58,
      "title": "前端常用状态码",
      "lastUpdated": "2018-09-12 18:00:00",
      "path": "/posts/%E5%89%8D%E7%AB%AF%E5%B8%B8%E7%94%A8%E7%8A%B6%E6%80%81%E7%A0%81.html"
    },
    {
      "excerpt": "  a标签下载问题    ```h5  <a  href=\"写的是相对路径\"          download = “ 不写默认文件名，作用是防止浏览器对jpg等格式文件直接打开而不是下载” />  ```     导出功能    ```js  window.open(url)   //url是接口，后台提供的导出接口  ```        另一种情况是创建div标签，动态......",
      "tags": [
        "开发笔记，JS"
      ],
      "id": 59,
      "title": "a标签下载功能的实现",
      "lastUpdated": "2018-08-07 20:00:00",
      "path": "/posts/a%E6%A0%87%E7%AD%BE%E4%B8%8B%E8%BD%BD%E5%8A%9F%E8%83%BD%E7%9A%84%E5%AE%9E%E7%8E%B0.html"
    },
    {
      "excerpt": " ```css      /deep/ .btn-next:focus, .btn-next:hover {          background: 1e8e9e;          border-color: 1e8e9e;        }  ```    ......",
      "tags": [
        "CSS",
        "样式"
      ],
      "id": 60,
      "title": "按钮悬停样式",
      "lastUpdated": "2018-08-06 16:00:00",
      "path": "/posts/%E6%8C%89%E9%92%AE%E5%81%9C%E7%95%99%E6%A0%B7%E5%BC%8F.html"
    },
    {
      "excerpt": "   HTML语义化     HTML语义化的原因    1、即使在没有CSS样式的条件下，也能很好地呈现出内容结构、代码结构；  2、语义化HTML会使HTML结构变的清晰，有利于维护代码和添加样式；  3、方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；  4、提升搜索引擎优化(SEO)的效果。和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依......",
      "tags": [
        "HTML",
        "样式"
      ],
      "id": 61,
      "title": "HTML语义化",
      "lastUpdated": "2019-04-15 0‏‎9:02:17",
      "path": "/posts/HTML%E8%AF%AD%E4%B9%89%E5%8C%96.html"
    }
  ];