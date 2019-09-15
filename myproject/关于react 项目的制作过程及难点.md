### 一. 如何创建一个基于 react 框架的项目

 1. 在项目文件夹下创建一个清单 ———— $npm init -y （项目中用的第三方库/工具，就会添加到清单中）

    当需要用到其他人的项目时：可以使用 ———— $npm i  来找到运行目录下的 pagkage.json 按照配装清单下载项目依赖

	2. 使用 create-react-app 构建开发环境 ———— $ npm install create-react-app --save-dev

    关于该指令中 --save：将保存配置信息到pacjage.json。默认为dependencies节点中。

    ​					   --dev：将保存配置信息devDependencies节点中。

    ​					   --save-dev：将保存配置信息到pacjage.json的devDependencies节点中。

    ​					   dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

    ​				   	devDependencies：开发时的依赖。里面的模块是开发时用的，发布时用不到它。

	3. 创建项目 ———— $ create-react-app my-app（my-app 为自定义项目名）

	4. 进入项目目录 ———— $ cd my-app

	5. 启动项目 ———— $ npm start



​       关于一个react 项目中，必备插件

​	1. 安装 react-router-dom 路由插件 ———— $npm install react-router-dom --save-dev

```js
import {HashRouter, Route, Switch, BrowserRouter} from 'react-router-dom';
```

​		在后面会提到 react-router-dom 的使用方法以及 HashRouter与BrowserRouter的区别。

 2. 安装 redux 状态管理系统 ———— $npm install redux  --save -dev

    ```js
    import { createStore } from 'redux'
    import todoApp from './todoApp'
    let store = createStore(todoApp)
    export default store;
    ```

	3. 安装基于 promise 的 HTTP 库： axios ———— $ npm install axios

    用于浏览器和node.js 的http客户端，支持拦截请求和响应，能自动转化 JSON 数据，后面会详细说明 axios 在前后端数据交互中的重要合作用

	4. 安装UI 框架 如 antd ———— $ npm install antd --save



### 二. 关于组件化开发

​		代码解耦和并行开发(也就是分别对应的是分制和复用)

​		1.关于复用：

​			根据功能和业务来拆分module，最后组成模块，其中业务层组件和UI展示组件分开放置，业务层组件的复用率相对较低，但UI展示组件则有很好的复用性；

```
<业务层组件>
	<UI展示组件 data={{业务层数据}}>
	</UI展示组件>
</业务层组件>
```

​		2.关于分制：

​			因为组件化的高内聚低耦合特点，利于多人团队协作开发，业务组件之间不会互相引用，互不干扰；对于测试来说。大部分情况只需要着重测试修改过的业务组件即可。

​		关于组件化开发的缺点：

​			组件化开发的前期，会话费更多的时间进行模块的拆分；

​			小的项目则没有必要进行组件化开发，单纯提升自己的工作量；

​			组件化可能会带来更多的代码。



### 三. 在React中使用react-router-dom路由

​		最常用的写法：

```jsX
    <HashRouter>
            <Route exact path="/" component={Top}/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
```

​		定义了一个纯路由组件，将两个页面组件Home和Detail使用Route组件包裹，外面套用Switch作路由匹配，当路由组件检测到地址栏与Route的path匹配时，就会自动加载响应的页面。



关于组件跳转：

​		1.通过Link 跳转：

```jsx
<Link to="/"></Link>
```

​		其中to="/"就是要跳转的路由



​		2.通过函数跳转：

```jsx
 render() {
        return (
            <div>
                <button onClick={() => this.props.history.push('detail')}>通过函数跳转</button>
            </div>
        )
    }
```

​		通过this.props.history.push这个函数跳转到detail页面。在路由组件中加入的代码就是将history这个对象注册到组件的props中去，然后就可以在子组件中通过props调用history的push方法跳转页面。



​		3.通过 react-router-dom 中的 withRouter 方法实现跳转：

​		该方法实现较为繁琐参见下面的demo：

```jsx
import {withRouter} from 'react-router-dom'

class LinkItem extends Component {
    constructor(arg){
        super(arg)
        this.state ={
            path:arg,  // path：arg 是必备的，需要获取父组件传递来的history属性
            link1:`${this.props.data.id}`
        }
    }

    detail = (e) => {
        this.state.path.history.push('/item/'+e)
    }
    
	render() {
		return (
			<div style={{ marginTop: '20px' }}>
				{/* <Link to={this.state.link1}> */}
					<Card onClick={()=>this.detail(this.state.link1)}/>}>
					</Card>
			</div>
		);
	}
}

// 在使用withRouter解决更新问题的时候，一定要保证withRouter在最外层
const AuthButton = withRouter(LinkItem);
export default AuthButton;
```



关于传参：

​	1.url 传参

​		首先在<Route> 标签中

```jsx
<Route exact path="/detail/:id" component={Detail}/>
```

​		然后在 detail.jsx 中使用this.props.match.params 来获取传过来的参数

```jsx
// 方法一
constructor(arg) {
		super(arg);
		this.state = {
			id: arg.match.params.id
        };
	}

// 方法二
componentDidMount() {
    console.log(this.props.match.params);
    this.setState ({id:this.props.match.params})
}
```



​	2.隐式传参

​		在通过函数跳转过程中可以传递参数（push）

```jsx
<button onClick={() => this.props.history.push({
                        pathname: '/detail',
                        state: {
                            id: 3
                        }
                })}>通过函数跳转</button>
```

​		在detail.js 中 ，可以使用this.props.history.location.state获取home传过来的参数：

```jsx
// 方法一
constructor(arg) {
		super(arg);
		this.state = {
			id: arg.history.location.state
        };
	}

// 方法一
componentDidMount() {
    console.log(this.props.history.location.state);
    // 打印 {id：3}
}
```



goBack： 如果需要返回到上级页面时

```jsx
<button onClick={ () => this.props.history.goBack() }>返回上级</button>
```



### 四. 关于 react-router-dom 下的 BrowserRouter 和 HashRouter

​	1.BrowserRouter

​		browserHistory 是使用 React-Router 的应用推荐的 history方案。它使用浏览器中的 History API 用于处理 URL，创建一个像example.com/list/123这样真实的 URL 。

​		如果前端使用了`browserRouter`,每次改变路由时，会向服务器发送请求，因为服务器未配置对应的路径指向对应的文件，自然导致出现404的情况.(对于初始化页面,即路由为/时,不会发送请求)

​		因此在使用`browserHistory`需要再加一层服务器配置(node/Nginx),让前端发送的请求映射到对应的html文件上

​	2.HashRouter

​			hashHistory 使用 URL 中的 hash（#）部分去创建路由，举例来说，用户访问http://www.example.com/，实际会看到的是http://www.example.com/#/。



### 五. 组件之间的传值

​	1.关于父组件对子组件传值

​			在父组件中：

```
<子组件 data={父组件中的this.state.data}>
```

​			相对的在子组件中获取父组件的传递过来的信息：

```jsx
class ComentList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
        data:this.props.data (这里就是获得父组件传递过来的信息，用props接收)
        }
 	}
 }
    
```



​	2.关于子组件对父组件传值

​		Object.assign 可以接收多个参数，第一个参数是目标对象，后面的都是源对象，assign 方法将多个原对象的属性和方法都合并到了目标对象上面，如果在这个过程中出现同名的属性（方法），后合并的属性（方法）会覆盖之前的同名属性（方法）。

​		在子组件中：

```jsx
    constructor(arg){
        super(arg)
        this.state = {
            a:1,
            b:2
        }
        Object.assign(this.state,this.props) //（第一个参数是目标对象，后面的都是源对象）
    }

    render() {
        return (
            <div>
                <div onClick={()=>this.props.GetStates(this.state.a)}></div>
            </div>
        )
    }
```

​		对应父组件：

```jsx
    constructor(arg){
        super(arg)
        this.state = {
            childState:''
        }
        Object.assign(this.state,this.props)
    }

	// 使用箭头函数可以有效的解决this指向的问题，如果不使用箭头函数，则需要在constructor下加入this.handleClick=this.handleClick.bind(this) 用bind来重新定义函数中this的指向；

    handleClick=(a)=>{
        this.setState({
            childState:a  // 将数据给父组件的state
        })
    }

    render() {
        return (
            <div>
                <Child GetStates={this.handleClick}></Child>  //子组件传回来的数据
            </div>
        )
    }
```



### 六.组件传值 之 中间件redux工具

​		对于以上两种子父组件中数据的交互，当嵌套层数过深时，考虑使用redux状态管理工具，将变量放在中间件中，子父组件的对应数据均从中间件中获取和修改；

​		关于redux

​			首先需要创建一个中间件（建议专门创建一个store文件夹来放中间件）

```JSX
import { createStore } from 'redux'

// 这里的storeX 就是我们的中间见数据
const storeX = {
    list: []
}
const reducer = (state = storeX, action) => {
    var newState = {
        ...state
    };
    switch (action.type) {
        case 'list':
            newState.list = action.value;
            return newState;
        default:
            return state;
    }
}

let store = createStore(reducer)
export default store;
```

​			在组件中使用中间件的数据：

```jsx
constructor(arg) {
		super(arg);
		this.state = {
			data: store.getState().data
		};
    
     // 这里需要用subscribe函数来让该组件中引用的store里的数据在store数据发生改变的时候实时更新
		store.subscribe(() => {
			this.setState({ data: store.getState().data });
		});
	}
	
	// 以下是关于组件中如何修改store 中的数据
        var action = {
            type: 'list',
            value: [ 1,2,3,4 ]
        };
        store.dispatch(action);
	// 其中type 是对应store中的对应方法的秘钥，与其相匹配则调用相对应的方法。
	// store中有 dispatch方法 将value 值传入store 中
```



### 七.关于使用生命周期函数 componentDidMount() 出现的警告

​		使用 componentDidMount()时，会遇到一个警告：'Can't perform a React state update on an unmounted component'； 提示不能在组件销毁后设置state，防治出现内存泄漏。

​		一般出现的情况是因为有一个类似于有一个setTimeout()的延时时间，在延迟的时间内组件已经销毁，其解决方法很简单：

​		利用声明周期函数：componentWillUnmount

```jsx
componentWillUnmount=()=>{
        this.setState = (state,callback) => {
            return;
        }
    }
```



### 八. 关于react 中标签事件绑定的写法:

```
<Button onClick={ ()=>{this.decline(index)} } size="small">
// 或者写成
<Button onClick={ this.decline.bind(this,index) } size="small">
```



### 九. 关于get 和 post 方法请求服务器

​		axios 写法

```jsx
axios
    .post(url, {  // 这里的post可以改为get
    
    // 在post方法中，传入路由地址，和需要传递给服务器的数据
    id: this.state.id
})
    .then(function(response) {
    
    // then方法后返回的是服务器中获取到的数据
    // 可以在then方法中将获取到的数据，传递给改组件的state或者项目的中间件
    var action = {
        type: 'item',
        value: response.data[0]
    };
    store.dispatch(action);
});



// 在后端
POST 方法： 用 req.body 传值
GET 方法：req.query 传值
```



​		GET 与 POST 的区别

​			get：用于获取信息，无副作用，是幂等的（一种加密方式），可以缓存，可收藏为书签，数据在url中对所有人可见

​			post：用于修改服务器上的数据，有副作用，非幂等，不可缓存，不可收藏为书签，数据在url中对不可见



​		GET、POST 请求报文上的区别

​			GET 和 POST 只是 HTTP 协议中两种请求方式，而 HTTP 协议是基于 TCP/IP 的应用层协议，无论 GET 还是 POST，用的都是同一个传输层协议，所以在传输上，没有区别。

​			报文格式上，**不带参数时**，最大区别就是第一行方法名不同, 仅仅是报文的几个字符不同而已

​				GET 方法请求报文第一行是这样的 **GET** /url HTTP/1.1

​				POST 方法请求报文第一行是这样的 **POST** /url HTTP/1.1 

​			带参数时；例如：name = restia，age = 23

​				GET /updateInfo**?name = restia&age=23** HTTP/1.1 Host: localhost

​				POST /updateInfo HTTP/1.1 Host: localhost **Content-Type: application/x-www-form-urlencoded ?name = restia&age=23**

​		

​		关于GET 方法的长度限制的解释：

​			1.是因为**网络浏览器**地址栏的输入的参数有限，

​			2.而**服务器**因处理长的URL会消耗较多资源，为了性能会给URL加长度限制；

### 十. 关于跨域的一些解决方式

​		什么是跨域：

​			同域策略：**同一协议，同一域名，同一端口号。当其中一个不满足时，请求即会发生跨域问题**

​		1.JSONP 跨域实现：

​			JSONP 是一种非正式传输协议，该协议的一个要点就是允许用户传递一个`callback` 或者开始就定义一个回调方法，参数给服务端，然后服务端返回数据时会将这个`callback` 参数作为函数名来包裹住 JSON 数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。

```jsx
$('#btn').click(function(){
    var frame = document.createElement('script');
    frame.src = 'http://localhost:3000/article-list?name=leo&age=30&callback=func';
    $('body').append(frame);
});
```

​			创建一个script 标签(即会发送一个get请求到src指向的地址)，上面例子中的'http://localhost:3000/article-list"就是请求的服务器端口，后面跟着的是 name ，age ，callback三个参数，对于callback参数来说，是为了接收请求回来的参数

​			接着上面的代码 来获取数据请求一个方法：

```jsx
function func(res){
    alert(res.message+res.name+'你已经'+res.age+'岁了');
}
```

​			声明了一个func函数，但没有执行，如果服务端接口到get请求，返回的是**func({message:'hello'})，这样的话在服务端不就可以把数据通过函数执行传参的方式实现数据传递**

​			服务器端代码实现：

```js
router.get('/article-list', (req, res) => {
  console.log(req.query, '123');
  let data = {
    message: 'success!',
    name: req.query.name,
    age: req.query.age
  }
  data = JSON.stringify(data)   // JSON.stringify 方法是将传入的值转化为JSON 字符串
  res.end(`func(${data})`);
});
```



​		2.COSR (跨站点资源分享) 解决跨域问题：

​			CORS是一种可以实现跨站点请求并同时阻止恶意js的请求，CORS 会在我们发送一下集中HTTP请求时触发：

​				\- 不同的域名 （比如在网站 example.com 请求 api.com)

​				\- 不同的子域名 （比如在网站 example.com 请求 api.example.com)

​				\- 不同的端口 （比如在网站 example.com 请求 example.com:3001)

​				\- 不同协议 （比如在网站 https://example.com 请求 http://example.com)

​			如果对浏览器发起一个“非简单”请求（比如这个请求里包含了*cookies*，或者*Content-type**不包含****application/x-ww-form-urlencoded*, *multipart/form-data* 或者 *text-plain*）一个叫做**预检查**的机制会发送一个 *OPTIONS* 请求到服务器。如果服务器没有返回带有特殊头部的数据，简单请求GET或者POST请求仍然会发送，服务器的数据也会返回，但是浏览器会阻止Javascript获取这次请求。



​		Access-Control-Allow-XXXXXXXXX?

​			CORS使用一些HTTP头信息——包括请求和返回——为了让工作继续开展下去，必须了解一下的一些头信息：

​		1.Access-Control-Allow-Origin

​			响应首部中可以携带一个 Access-Control-Allow-Origin 字段，其中的 origin 参数的值 指定了允许访问该资源的外域 URL ，对于不需要携带身份凭证的请求，服务器可以指定该字段为通配符 "*" ,表示允许所有域的请求；

```js
res.header('Access-Control-Allow-Origin', '*');
// "*" 可改为允许访问的域名地址 如：http://example.com
```

​		2.Access-Control-Expose-Headers

​			在跨域访问时，XMLHttpRequest对象的getResponseHeader()方法只能拿到一些最基本的响应头，Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma，如果要访问其他头，则需要服务器设置本响应头。

​			Access-Control-Expose-Headers 头让服务器把允许浏览器访问的头放入白名单

```
res.header('Access-Control-Expose-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
```



​		3.Access-Control-Max-Age

​			Access-Control-Max-Age 头指定了 preflight 请求的结果能缓存多久

```js
res.header('Access-Control-Max-Age', 'delta-seconds');
// delta-seconds 表示preflight 请求的结果在多少秒内有效
```

​	

​		4.Access-Control-Allow-Credentials

​			这个头部信息只会在服务器支持通过cookies传递验证信息的返回数据里。它的值只有一个就是 true。跨站点带验证信息时，服务器必须要争取设置这个值，服务器才能获取到用户的cookie。

```js
res.header('Access-Control-Allow-Credentials', true);
```

​		5.Access-Control-Allow-Methods

​			一个逗号分隔的列表，表明服务器支持的请求类型（比如：GET, POST）

```JS
res.header('Access-Control-Allow-Credentials', 'PUT, POST, GET, DELETE, OPTIONS');
```



### 十一. 关于 Content-Type

​		在上面解决跨域问题时，有提到过Content-Type，Content-Type 存在于请求和响应的头部，用于标识数据的类型。(通俗地说就是 , 你想要后台返回给你什么数据类型, 后台需要你发送什么样的数据类型给他)



1.  Response Headers
	在响应中，Content-Type 告诉客户端实际返回的内容的类型。比如要通常接口会返回 JSON 格式的数据，那么需要将 Content-Type 设置为 application/json，当然这是接口的事，很多后端框架都会自动处理，不用手动去加这个 Header。

2. Request Headers

   在请求中，客户端告诉服务器实际发送的数据类型。这里指的是**除 GET 方式以外**的请求。常见的取值有：

   ​		1.x-www-form-urlencoded

   ​		2.multipart/form-data

   ​		3.application/json

   

   x-www-form-urlencoded:

   ​		目前最常见的方式。提交的数据按照键值对 **key1=val1&key2=val2** 的方式进行编码。

   如：

   ```jsx
   {
     "name": "restia",
     "age": 20
   }
   
   // 编译为
   name=restia&age=20
   
   // 常用的<form>表单默认就是用的x-www-form-urlencoded 方式
   <form method="post"></form>
   ```

   

   multipart/form-data:

   ​		这是另一个常见的**数据提交**方式，一般用于**文件上传**。

   ```jsx
   <form enctype="multipart/form-data" method="post"></form>
   ```

   application/json:

   ​		支持比键值对复杂得多的结构化数据。由于 JSON 规范的流行，越来越多的人采用了这种方式，常用的第三方请求库 `Axios` 默认就是用的 application/json。



### 十二. 关于css的less预处理器

​		嵌套规则：

​				比起css更加的直观表现出个标签的嵌套关系

```
.container{
      h1{
          font-size: 25px;
          color:#E45456;
     }
     .myclass{
          h1{
              font-size: 25px;
              color:#E45456;
          }
     }
}


// 返回的css文件为
.container h1 {
  font-size: 25px;
  color: #E45456;
}
.container .myclass h1 {
  font-size: 25px;
  color: #E45456;
}
```



​		算数运算

​			支持储存样式并对样式进行简单的算数运算

```css
@fontSize: 10px;

.myclass {
 font-size: @fontSize * 2;
}

// 返回的css文件为
.myclass {
  font-size: 20px;
}
```

​		

​		函数方法：

```
.cont(@count)  {
  width: (@count);
}
div {
  .cont(7);
}
// 返回的css文件为
div {
  width: 7px
}
```







