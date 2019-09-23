# Heros

1. 创建名为heroes的新组件`ng generate component heroes`

CLI 自动生成了三个元数据属性：
* selector— 组件的选择器（CSS 元素选择器）[app-heroes用来在父组件的模板中匹配HTML元素的名称，以识别出该组件]
* templateUrl— 组件模板文件的位置。
* styleUrls— 组件私有 CSS 样式表文件的位置。


* ngOnInit [获取初始数据的好地方]
  * 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。

2. 显示 HeroesComponent 视图
在AppComponent中引用HeroesComponent，只需要把 [<app-heroes>][元素选择器，https://angular.cn/tutorial/toh-pt1#selector] 元素添加到 AppComponent 的模板文件中就可以了，就放在标题下方。


3. 创建类并进行引用 [链接][https://angular.cn/tutorial/toh-pt1#create-a-hero-class]
  类的引用：在需要对应类的地方直接 import

4. 管道[https://angular.cn/guide/pipes]
管道是格式化字符串、金额、日期和其它显示数据的好办法。Angular 发布了一些内置管道，而且你还可以创建自己的管道。

5. 各种绑定
`()` 事件绑定
`[]` 属性绑定


6. 生成服务 `ng generate service hero`
@Injectable() 装饰器会接受该服务的元数据对象，就像 @Component() 对组件类的作用一样。




深度学习资料：

1. tf的网络课程资料，小到莫凡python的tensorflow：https://morvanzhou.github.io/tutorials/machine-learning/tensorflow/，
2. 然后到用jupyter的teacher github：https://github.com/sjchoi86/Tensorflow-101，

3. 斯坦福的tf课程：https://web.stanford.edu/class/cs20si/，

4. 优达学成的的tf（免费）：https://cn.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187

