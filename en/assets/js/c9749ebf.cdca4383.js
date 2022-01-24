"use strict";(self.webpackChunktmp=self.webpackChunktmp||[]).push([[578],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(f,i(i({ref:n},s),{},{components:r})):t.createElement(f,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2503:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:2},u="MapReduce",l={unversionedId:"other-component/mapreduce",id:"other-component/mapreduce",title:"MapReduce",description:"Why MapReduce is needed",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/other-component/mapreduce.md",sourceDirName:"other-component",slug:"/other-component/mapreduce",permalink:"/en/docs/other-component/mapreduce",editUrl:"https://github.com/zhoushuguang/zero-doc/tree/main/website/i18n/en/docusaurus-plugin-content-docs/current/other-component/mapreduce.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Go Queue",permalink:"/en/docs/other-component/go-queue"},next:{title:"Preparation work",permalink:"/en/docs/project/prepare"}},s=[{value:"Why MapReduce is needed",id:"why-mapreduce-is-needed",children:[],level:3},{value:"Design Ideas",id:"design-ideas",children:[],level:3},{value:"go-zero code implementation",id:"go-zero-code-implementation",children:[],level:3},{value:"Pre-requisite Knowledge - Channel Basic Usage",id:"pre-requisite-knowledge---channel-basic-usage",children:[],level:3},{value:"Interface definitions",id:"interface-definitions",children:[],level:3},{value:"User-oriented method definition",id:"user-oriented-method-definition",children:[],level:3},{value:"MapReduceWithSource source code implementation",id:"mapreducewithsource-source-code-implementation",children:[],level:3},{value:"Usage examples",id:"usage-examples",children:[],level:3}],p={toc:s};function d(e){var n=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mapreduce"},"MapReduce"),(0,o.kt)("h3",{id:"why-mapreduce-is-needed"},"Why MapReduce is needed"),(0,o.kt)("p",null,"In practical business scenarios we often need to get the corresponding properties from different rpc services to assemble complex objects."),(0,o.kt)("p",null,"For example, to query product details."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Product Service - Query Product Attributes"),(0,o.kt)("li",{parentName:"ul"},"Inventory service - query inventory properties"),(0,o.kt)("li",{parentName:"ul"},"Price service - query price attributes"),(0,o.kt)("li",{parentName:"ul"},"Marketing service - query marketing attributes")),(0,o.kt)("p",null,"If it is a serial call, the response time will increase linearly with the number of rpc calls, so we will generally change serial to parallel to optimize performance."),(0,o.kt)("p",null,"The simple scenario of using waitGroup can also meet the needs, but what if we need to check the data returned by the rpc call, process the data to convert, and aggregate the data? The go-zero authors have implemented an in-process data batching mapReduce concurrency tool class based on the mapReduce architecture."),(0,o.kt)("h3",{id:"design-ideas"},"Design Ideas"),(0,o.kt)("p",null,"Let's try to put ourselves into the role of the author to sort out the possible business scenarios of concurrent tools."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Query commodity details: support concurrent calls to multiple services to combine product attributes, and support call errors can be ended immediately."),(0,o.kt)("li",{parentName:"ul"},"Automatic recommendation of user card coupons on product details page: support concurrently checking card coupons, check failure automatically rejects and returns all card coupons.")),(0,o.kt)("p",null,"The above is actually processing the input data and finally outputting the cleaned data. There is a very classic asynchronous pattern for data processing: the producer-consumer pattern. So we can abstract the life cycle of data batch processing, which can be roughly divided into three phases."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"three stage",src:r(8558).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data production generate"),(0,o.kt)("li",{parentName:"ul"},"data processing mapper"),(0,o.kt)("li",{parentName:"ul"},"data aggregation reducer")),(0,o.kt)("p",null,"Data production is an indispensable stage, data processing and data aggregation are optional stages, data production and processing support concurrent calls, data aggregation is basically a pure memory operation single concurrent process can be."),(0,o.kt)("p",null,"Since different stages of data processing are performed by different goroutines, it is natural to consider using channel to achieve communication between goroutines."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"flow",src:r(6541).Z})),(0,o.kt)("p",null,"How can I terminate the process at any time?"),(0,o.kt)("p",null,"It's very simple, just listen to a global end channel in the goroutine."),(0,o.kt)("h3",{id:"go-zero-code-implementation"},"go-zero code implementation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"core/mr/mapreduce.go")),(0,o.kt)("h3",{id:"pre-requisite-knowledge---channel-basic-usage"},"Pre-requisite Knowledge - Channel Basic Usage"),(0,o.kt)("p",null,"Since the MapReduce source code makes extensive use of channels for communication, a general reference to basic channel usage is as follows."),(0,o.kt)("p",null,"Remember to close the channel after writing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"ch := make(chan interface{})\n// You need to actively close the channel after writing\ndefer func() {\n    close(ch)\n}()\ngo func() {\n    // v,ok mode Read channel\n    for {\n        v, ok := <-ch\n        if !ok {\n            return\n        }\n        t.Log(v)\n    }\n\n    for i := range ch {\n        t.Log(i)\n    }\n\n    for range ch {\n    }\n}()\nfor i := 0; i < 10; i++ {\n    ch <- i\n    time.Sleep(time.Second)\n}\n")),(0,o.kt)("p",null,"Closed channels still support reads"),(0,o.kt)("p",null,"Restricted channel read and write permissions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func readChan(rch <-chan interface{}) {\n    for i := range rch {\n        log.Println(i)\n    }\n}\n\nfunc writeChan(wch chan<- interface{}) {\n    wch <- 1\n}\n")),(0,o.kt)("h3",{id:"interface-definitions"},"Interface definitions"),(0,o.kt)("p",null,"Let's start with the three most core function definitions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data production"),(0,o.kt)("li",{parentName:"ul"},"Data processing"),(0,o.kt)("li",{parentName:"ul"},"Data aggregation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"GenerateFunc func(source chan<- interface{})\n\nMapperFunc func(item interface{}, writer Writer, cancel func(error))\n\nReducerFunc func(pipe <-chan interface{}, writer Writer, cancel func(error))\n")),(0,o.kt)("h3",{id:"user-oriented-method-definition"},"User-oriented method definition"),(0,o.kt)("p",null,"The use of methods can be viewed in the official documentation, here not to repeat"),(0,o.kt)("p",null,"There are more user-oriented methods, and the methods are divided into two main categories."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No return",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The execution process terminates immediately when an error occurs"),(0,o.kt)("li",{parentName:"ul"},"The execution process does not focus on errors"))),(0,o.kt)("li",{parentName:"ul"},"With return value",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Manually write to source, manually read aggregated data channel"),(0,o.kt)("li",{parentName:"ul"},"Write manually to source, read aggregated data automatically channel"),(0,o.kt)("li",{parentName:"ul"},"External incoming source, read aggregated data automatically channel")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func Finish(fns ...func() error) error\n\nfunc FinishVoid(fns ...func())\n\nfunc Map(generate GenerateFunc, mapper MapFunc, opts ...Option)\n\nfunc MapVoid(generate GenerateFunc, mapper VoidMapFunc, opts ...Option)\n\nfunc MapReduceVoid(generate GenerateFunc, mapper MapperFunc, reducer VoidReducerFunc, opts ...Option)\n\nfunc MapReduce(generate GenerateFunc, mapper MapperFunc, reducer ReducerFunc, opts ...Option) (interface{}, error)\n\nfunc MapReduceWithSource(source <-chan interface{}, mapper MapperFunc, reducer ReducerFunc,\n    opts ...Option) (interface{}, error)\n")),(0,o.kt)("p",null,"The core methods are MapReduceWithSource and Map, and all other methods call them internally. Once you figure out the MapReduceWithSource method, it's not a big deal to call Map."),(0,o.kt)("h3",{id:"mapreducewithsource-source-code-implementation"},"MapReduceWithSource source code implementation"),(0,o.kt)("p",null,"It's all in this diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mapreduce",src:r(8255).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func MapReduceWithSource(source <-chan interface{}, mapper MapperFunc, reducer ReducerFunc,\n    opts ...Option) (interface{}, error) {\n    options := buildOptions(opts...)\n    output := make(chan interface{})\n    defer func() {\n        for range output {\n            panic("more than one element written in reducer")\n        }\n    }()\n    collector := make(chan interface{}, options.workers)\n    done := syncx.NewDoneChan()\n    writer := newGuardedWriter(output, done.Done())\n    var closeOnce sync.Once\n    var retErr errorx.AtomicError\n    finish := func() {\n        closeOnce.Do(func() {\n            done.Close()\n            close(output)\n        })\n    }\n    cancel := once(func(err error) {\n        if err != nil {\n            retErr.Set(err)\n        } else {\n            retErr.Set(ErrCancelWithNil)\n        }\n        drain(source)\n        finish()\n    })\n\n    go func() {\n        defer func() {\n            drain(collector)\n            if r := recover(); r != nil {\n                cancel(fmt.Errorf("%v", r))\n            } else {\n                finish()\n            }\n        }()\n        reducer(collector, writer, cancel)\n    }()\n    go executeMappers(func(item interface{}, w Writer) {\n        mapper(item, w, cancel)\n    }, source, collector, done.Done(), options.workers)\n    value, ok := <-output\n    if err := retErr.Load(); err != nil {\n        return nil, err\n    } else if ok {\n        return value, nil\n    } else {\n        return nil, ErrReduceNoOutput\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"func executeMappers(mapper MapFunc, input <-chan interface{}, collector chan<- interface{},\n    done <-chan lang.PlaceholderType, workers int) {\n    var wg sync.WaitGroup\n    defer func() {\n        wg.Wait()\n        close(collector)\n    }()\n    pool := make(chan lang.PlaceholderType, workers)\n    writer := newGuardedWriter(collector, done)\n    for {\n        select {\n        case <-done:\n            return\n        case pool <- lang.Placeholder:\n            item, ok := <-input\n            if !ok {\n                <-pool\n                return\n            }\n            wg.Add(1)\n            threading.GoSafe(func() {\n                defer func() {\n                    wg.Done()\n                    <-pool\n                }()\n\n                mapper(item, writer)\n            })\n        }\n    }\n}\n\n")),(0,o.kt)("h3",{id:"usage-examples"},"Usage examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "log"\n    "time"\n\n    "github.com/tal-tech/go-zero/core/mr"\n    "github.com/tal-tech/go-zero/core/timex"\n)\n\ntype user struct{}\n\nfunc (u *user) User(uid int64) (interface{}, error) {\n    time.Sleep(time.Millisecond * 30)\n    return nil, nil\n}\n\ntype store struct{}\n\nfunc (s *store) Store(pid int64) (interface{}, error) {\n    time.Sleep(time.Millisecond * 50)\n    return nil, nil\n}\n\ntype order struct{}\n\nfunc (o *order) Order(pid int64) (interface{}, error) {\n    time.Sleep(time.Millisecond * 40)\n    return nil, nil\n}\n\nvar (\n    userRpc  user\n    storeRpc store\n    orderRpc order\n)\n\nfunc main() {\n    start := timex.Now()\n    _, err := productDetail(123, 345)\n    if err != nil {\n        log.Printf("product detail error: %v", err)\n        return\n    }\n    log.Printf("productDetail time: %v", timex.Since(start))\n\n    // the data processing\n    res, err := checkLegal([]int64{1, 2, 3})\n    if err != nil {\n        log.Printf("check error: %v", err)\n        return\n    }\n    log.Printf("check res: %v", res)\n}\n\ntype ProductDetail struct {\n    User  interface{}\n    Store interface{}\n    Order interface{}\n}\n\nfunc productDetail(uid, pid int64) (*ProductDetail, error) {\n    var pd ProductDetail\n    err := mr.Finish(func() (err error) {\n        pd.User, err = userRpc.User(uid)\n        return\n    }, func() (err error) {\n        pd.Store, err = storeRpc.Store(pid)\n        return\n    }, func() (err error) {\n        pd.Order, err = orderRpc.Order(pid)\n        return\n    })\n    if err != nil {\n        return nil, err\n    }\n\n    return &pd, nil\n}\n\nfunc checkLegal(uids []int64) ([]int64, error) {\n    r, err := mr.MapReduce(func(source chan<- interface{}) {\n        for _, uid := range uids {\n            source <- uid\n        }\n    }, func(item interface{}, writer mr.Writer, cancel func(error)) {\n        uid := item.(int64)\n        ok, err := check(uid)\n        if err != nil {\n            cancel(err)\n        }\n        if ok {\n            writer.Write(uid)\n        }\n    }, func(pipe <-chan interface{}, writer mr.Writer, cancel func(error)) {\n        var uids []int64\n        for p := range pipe {\n            uids = append(uids, p.(int64))\n        }\n        writer.Write(uids)\n    })\n    if err != nil {\n        return nil, err\n    }\n\n    return r.([]int64), nil\n}\n\nfunc check(uid int64) (bool, error) {\n    // do something check user legal\n    time.Sleep(time.Millisecond * 20)\n    return true, nil\n}\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/zeromicro/zero-examples/tree/main/mapreduce"},"More examples")))}d.isMDXComponent=!0},6541:function(e,n,r){n.Z=r.p+"assets/images/flow-e28489c0078954e35ee0407948b6020d.png"},8255:function(e,n,r){n.Z=r.p+"assets/images/mapreduce-785b9051425fd3c898240dc993390a9e.png"},8558:function(e,n,r){n.Z=r.p+"assets/images/three-stage-f3953b320fba4cad31427c789179fc83.png"}}]);