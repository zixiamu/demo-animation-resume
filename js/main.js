/*把code写道#code和style标签里*/
function writeCode(prefix,code,fn){
    let n=0
    let domCode=document.querySelector('#code')
    let id=setInterval(()=>{
    n +=  1 
    domCode.innerHTML=
    code.innerHTML=Prism.highlight(prefix+code.substring(0,n),Prism.languages.css)
    styleTag.innerHTML=prefix+ code.substring(0,n)
    domCode.scrollTop=domCode.scrollHeight
    if(n>=code.length){
    window.clearInterval(id)
    fn.call()
    }
},0)
}

function writeMarkdown(markdown,fn){
    let domPaper= document.querySelector('#paper>.content')
    let n=0
    let id=setInterval(()=>{
    n +=  1 
    domPaper.innerHTML=markdown.substring(0,n)
    domPaper.scrollTop=domPaper.scrollHeight
    if(n>=markdown.length){
    window.clearInterval(id)
    fn.call()
    }
},10)
}

var result=`
/*
 *面试官你好，我是xxx
 *我将以动画形式来介绍自己
 *只用文字介绍太单调了
 *我就用代码来介绍把
 *首先准备一些样式
*/
*{
  transition:all 1s;
}
html{
  background:rgb(222,222,222);
font-size:16px;
}
#code{
 border:1px solid red;
}
/*我需要一点代码来高亮*/
.token.selector{
    color: #690;
}
.token.property{    
    color: #905;
}
.token.function{
    color: #DD4A68;
}
/*加点3d效果*/
#code{
    transform:rotate(360deg);
}
/*不玩了，我来介绍我自己吧*/
/*我需要一张白纸*/
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper>.content{
    background:white;
    height:100%;
    width:100%;
}
`

var  result2 = `
 #paper{}
 /*
 *接下来把Markdown变成HTML
 */
/*
 *接下来给HTML加样式
 */
/*
 这个是我的会动的简历
 */
`
var md=`
# 自我介绍

我叫xxx
1997年1月出生
xxx学校毕业
自学前端半年
希望应聘前端开发岗位

#技能介绍

熟悉 Javascript css

#项目介绍

1.xxx轮播
2.xxx简历
3.xxx画板

#联系方式

QQ:XXXXXXXXX
Email：xxxxxxxx
手机：xxxxxxx

`

writeCode('',result,()=>{
    creatPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    })
})//定闹钟：50毫秒之后开始写第一行代码



function  creatPaper(fn){
    var paper = document.createElement('div')
    paper.id='paper'
    var content = document.createElement('pre')
    content.className='content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

