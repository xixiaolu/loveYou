(()=>{new class{constructor(e){this.props=e}parseHtml(){let e=this.props.el.match(/(#+\s*)|\S+|\n/g).join("").split("\n");var t=[];for(let p=0;p<e.length;p++)if(e[p].length){var r=e[p].split(" "),n=document.createElement("h"+r[0].length);n.innerText=r[1],t.push(n)}return t}}({el:document.querySelector(".item2").innerText}).parseHtml();var e=[{deptName:"某某公司",type:2},{deptName:"子公司",type:4},{deptName:"子子部门",type:5}];"2->4，5".replace(/\d+/g,(function(t){return e.filter((e=>e.type==t))[0].deptName}))})();