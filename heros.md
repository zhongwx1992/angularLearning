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
  





