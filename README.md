# SuperTransition

一个用于`vue`单页应用切换页面过渡动画的插件，使用方法如下：

通过`npm i super_transition -S`安装依赖

```js
// main.js
import Vue from 'vue'
import superTansition from 'super_transition'
Vue.use(superTansition)

// app.vue
<SuperTransiton ref="superTransiton">
  <keep-alive>
    <router-view />
   </keep-alive>
</SuperTransiton>
```

`SuperTransiton`组件是基于`<transiton>`内置组件的封装的一个自动监听页面的前进与后退操作并执行相应的切场过渡动画的组件，其中后退动作的监听是通过调用`router.go(n)`或`router.back`触发，如果需要手动触发后退操作可以通过给组件绑定一个ref的方式通过调用`this.$refs.refName.changeRoute()`可告知组件当前切换动作属于后退操作执行响应的动画。

特点：

* 动画基于`animate.css`切换顺滑
* 使用简单直接包裹在`router-view`组件外层即可，如需再像使用`<transition>`一般监听动作修改动画名称等冗余且麻烦的操作
* 体积小，插件本身大小仅为1kb