### 什么是jsx
 是一种JS和HTML混合的语法，将组建的结构、数据、样式聚合在一起
### 什么是元素
  JSX是一种语法糖，会被babel转义成React.createElement语法，返回一个react元素
  react元素是一个普通的js对象，用来描述你在屏幕上看到的内容
  ReactDOM来确保浏览器中的真实DOM数据和react元素保持一致

step1：JSX（打包使用babel转义）
```
<h1 className="title" style={{color: 'blue'}}> hello </h1>
```

step2：babel转义后的代码（在浏览器执行，返回虚拟DOM）
```
React.createElement('h1', {
  className: 'title',
  style: {
    color: 'blue'
  }
}, 'hello')
```

step3：结果(虚拟DOM)
```
{
  props: {
    type: 'h1',
    className: 'title',
    style: {
      color: 'red'
    },
    children: 'hello'
  },
}

```

<!-- cross-env DISABLE_NEW_JSX_TRANSFORM=TRUE 禁用jsx新转换器 -->

### jsx 用法
1、渲染两个相邻的元素，需要外面包裹一个标签<></>
2、行内样式的写法，jsx为了区分是html还是js，需要用{}来区分
3、{} 表示的是写js，可以是三元表达式、取值、（只要内容有返回值就可以）
4、属性名字变化 htmlFor => for、className => class
5、dangerouslySetInnerHTML={__html: str}把内容当成html插入到页面中
6、注释只能写js注释
7、列表循环 map