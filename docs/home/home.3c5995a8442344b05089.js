(()=>{"use strict";(()=>{class e{static el;constructor(){}static create(){return new e}mount(e){this.el=e,this.model().exce(e)}use(e){try{this.model=e.install}catch(e){Translaste}return this}}class t extends e{constructor(){super()}exce(e){e.classList.add("change")}static install(){return new t}}class r extends e{constructor(){super()}exce(e){e.classList.add("change2")}static install(){return new r}}const l="<template> <h2>周记1</h2> <article> ### 万物皆对象 之要是new出来的东西都属于对象 var str = new String('hello word'); ### 文档碎片的使用和为什么要用文档碎片 var fragment = document.createDocumentFragment(); ### template标签中的任何东西不会渲染到网页上 从而减少重绘和回流 提高了性能 ### promise 解决回调地狱 new Promise((resolve,reject)=>{里面写异步操作}) //成功是resolve 失败是reject 成功了走then方法 失败了走eatch方法 #### onclick不能嵌套onclick事件 也不能在onclick中添加onclick事件 addEventListener事件结束完成后必须removeEventListener事件 #### a.style.color = 'red'; a.style.cursor = 'pointer' => a.style.cssText = `color : 'red';cursor : 'pointer'` 这样写的好处是减少了重绘和回流 ### class的继承 class People{ consructor(props){ this.el = props; } exec(){ console.log('父') } } class Student extends People{ constructor(prop){ super(); this.exec(); } exec(){ console.log(super.exec()); } } var stu1 = new Sutdent('张三'); // 父 </article> </template>";function a(e){var t=document.createElement("span");return t.innerHTML=e,t.querySelector("template").innerHTML}const n=[{id:1,article:a("<template> <h2>如何看待知乎上的男拳1</h2> <article> 1.注册知乎是在百度上提个问题，系统给推荐了一个来自知乎的答案，而想看到完整答案，需要注册，为此我成为了知乎用户。2.最开始的阶段是在知乎上看别人的文章与问答，觉得这里有很人性的温暖在里面，有很多问答都很精彩，有些问得认真，回答得也很认真。在看的过程中，也感受到久违的“真诚”在其中。平时生活中不想和人说的话，或者想了解的答案，在这里大部分找到解析的线索，你会觉得内心里多了可以安放情感与心绪的地方。3.知乎的很多回答很专业，在非专业人眼中有了解自己不知事物的窗口。4.看得多了，也随之开启写作的热情。有时也会回答问题，倾注很多个人的经验与感悟在里边，如果有人受益，那是一种很开心的，助人也自助的方式。5.知乎的升级系统，也比较吸引人，一篇300字以上图文，每天可增加65分，这是很有趣的一件事情。很期待能升级到下一个级别，以至于再下一个级别。6.我个人比较喜欢在平常的生活中感悟一些对自己有用的东西，知乎这个平台可以让自己的某些感悟分享给别人，这是一种很充实的幸福感。赠人玫瑰，手有余香！ 作者：络浅微 链接：https://www.zhihu.com/question/37865484/answer/2165040906 来源：知乎 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 </article> </template>")},{id:2,article:a("<template> <h2>如何看待知乎上的男拳2</h2> <article> 作者：游子离链接：https://www.zhihu.com/question/490763912/answer/2161431049来源：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。鄙人几乎没有出彩礼。但实际上鄙人破防是另外的事件。她爹妈给我八万（实际上是我给的储蓄卡）。然后我给了前妻八万。最后这八万给老婆保管。作为夫妻共同财产。就是一张卡传来传去就把婚结了。不过婚后每个月二万多的纯收入都给前妻保管。她们也知道我家家境与我爱她。因此彩礼没有计较。～知乎有个答案吧，就是说个规则。夫妻当然是人类最美好的感情之一。所谓君臣，父子，夫妻，朋友，亲戚。此谓之五伦。人就是五伦总和。但是五伦也不是绝对。君臣大义亦有陈胜吴广。而司马迁为陈吴立世家。列为诸侯。反贼为诸侯，这是古代中国一个创举。所谓帝王将相宁有种乎。只要你反抗暴政，你就是帝王将相。亦有孔子舍鲁君，卫君而投外国。亦有周天子不振，而亚圣孟夫子说于魏齐。国家无道，虽然是圣人投于外国亦是正举。生意上的伙伴，比如某些豪商，相约落水也是救一次。你不能无限压榨别人。即使父母，绝交别居的也很多。唯独夫妻之间，委屈求全的太多。因此要求也不是不可以提。但是得看看这个要求是不是奔着把对方掏空来的。男女之间，人伦所谓不爱的标志就是：不考虑你的感受，你的承受能力，你日后日子怎么过，只想着怎么掏空你。这种人，是老板，就是暴君，反他丫的。是君主，那就是横征暴敛，民不聊生。你应该当陈胜吴广，而不是印度人。这种子女，呵呵。最好还是有所防备。是合作的伙伴，朋友，建议还是换一个。唯独是夫妻，因为涉及到后代繁衍的问题，特别是穷人，所以就很多时候忍气吞声。～其实这种吧。建议还是换个老实本分的。真的。还没有进门就算计这个，多半也不是冲着过日子来的。到时候榨干了，你还能拿什么留她。或者即使能留住，你的日子过得好么？而且啥都不惦记，就惦记家里这点财产，这种人，内卷严重，兔子还不吃窝边草。每天算计这些，她能有多大出息。你给了，她以后还会怪你跟了你浪费人生。娶妻娶德。不然起码让你倒退n年 </article> </template>")},{id:3,article:a("<template> <h2>如何看待知乎上的男拳3</h2> <article> 老师是武音毕业的资深声乐老师，专业过硬，师德好，教学兢兢业业，从教十几年来，桃李满天下，有不少都成为了专业歌手，上过中国好声音。不过，老师不喜欢以这些作为宣传。老师还经常参加公益活动，捐款捐物，如今这样的坚守初心，品德高尚的老师真的不多见了。如果各位读者有幸成为老师的学生，还请一定珍惜，好好学习，一定能学有所得！作者：缘分天空链接：https://www.zhihu.com/question/416914959/answer/2175487242来源：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 </article> </template>")},{id:4,article:a("<template> <h2>如何看待知乎上的男拳4</h2> <article> 作者：异端之月链接：https://www.zhihu.com/question/458218535/answer/2175684102来源：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。第一，知乎男权地图炮所有女性的次数，按比例来说并不算多，论声势更是远远不如当年杨笠“普信男”“男的，垃圾”下的各种女性评论；第二，知乎男权与其说是男权不如说是反女权，这群人的目的就是反女权，如果有的时候不慎地图炮或者误伤了别人的话，【主要原因是女权太过可恶抹黑了全体女性而已】——就像【如果有个工人在抗战时候说日本人都是垃圾，主要不是因为他素质太低骂了日本群众，而是因为日本军国主义发动了侵略战争】，他的这个地图炮话语需要由日本军国主义来负责，同理，【不慎误伤一般女性的责任，应该主要由女权主义来负，因为女权主义已经这样群体性羞辱一般男性好多年了】第三，你想做正常网民可以，少参与性别话题就是了，如果你主动参与性别话题，【就像一个人非要跑到双方激烈交战的战场中央那样，交战双方没有为你生命负责的义务——简而言之，你被打死属于自找的】第四，知乎上的女权主义，起码在15年之前是非常常见而且是主流，当时反女权还根本寥寥无几，而且被普遍认为是魔怔，也就是说当时女权主义是天然正确的一方——比如我当时也认为女权主义是正确的。所以，在女权主义占据天然正义的高地，大部分知乎人赞成女权主义这种大优势局面之后，是怎么被反女权反推的？无他，【不要看女权主义说了什么，而要看女权主义做了什么】综上，知乎反女权属于正义的自卫反击，虽然会有打错人的情况，但这是属于没有办法，而且比例并不高，你想避免也很容易——不参与性别话题就是，你不站在战场中间，自然不会被双方集火。 </article> </template>")},{id:5,article:a("<template> <h2>如何看待知乎上的男拳5</h2> <article> 这场战争一开始我：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 </article> </template>")},{id:6,article:a(l)},{id:7,article:a(l)},{id:7,article:a(l)},{id:8,article:a(l)},{id:9,article:a(l)}];e.create().use(r).mount(document.getElementsByClassName("tit")[0]),e.create().use(t).mount(document.getElementsByClassName("header-center-right_div1_text")[0]);var c=160,i=document.querySelector(".main-center-left"),s=i.querySelector(".template");function o(e){var t=s.content.cloneNode(!0);return t.querySelector(".text").innerHTML=e.article.ellipsis(c),t.querySelector(".text").querySelector("h2").dataset.id=e.id,t.querySelector(".text").querySelector("h2").onclick=function(e){window.location.href="./articleDetails.html?type="+e.target.dataset.id+"&id=1&name=xiaoming"},e.article.ellipsis(c).length>c&&(t.querySelector(".btn").querySelector(".details").style.display="inline-block"),t.querySelector(".btn").querySelector(".details").onclick=function(t){t.target.parentNode.parentNode.querySelector("h2").dataset.id,t.target.parentNode.parentNode.querySelector(".text").innerHTML=e.article.replace(/\n/g,"<br>"),t.target.parentNode.querySelector(".away").style.display="inline-block",t.target.style.display="none"},t.querySelector(".btn").querySelector(".away").onclick=function(t){t.target.parentNode.parentNode.querySelector("h2").dataset.id,t.target.parentNode.parentNode.querySelector(".text").innerHTML=e.article.ellipsis(c),t.target.parentNode.querySelector(".details").style.display="inline-block",t.target.style.display="none"},t}String.prototype.ellipsis=function(e){return this.length>e?this.substr(0,e)+"...":this};for(var d=document.createDocumentFragment(),u=0;u<2;u++)if(u<3){var p=n.shift();d.appendChild(o(p))}i.appendChild(d),document.querySelector(".addbtn").onclick=function(e){if(n.length){var t=n.shift();i.appendChild(o(t))}else e.target.style.display="none"}})()})();