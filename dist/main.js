(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{d:()=>r});let t=(()=>{let e=()=>{let e=document.getElementById("buttonContainer");t(e);let n=document.createElement("form");n.setAttribute("id","buttonForm");let a=document.createElement("input");a.setAttribute("id","buttonFormInput"),a.type="text",a.name="taskName",n.appendChild(a),e.appendChild(n),a.focus()},t=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{makeButton:()=>{let n=document.getElementById("buttonContainer");t(n);let a=document.createElement("div"),o=document.createTextNode("+ New Task");a.appendChild(o),a.setAttribute("id","newTaskButton"),n.appendChild(a),a.addEventListener("click",e)},makeForm:e}})(),n=(()=>{let e=()=>{let e=document.getElementById("projectButtonContainer");t(e);let n=document.createElement("form");n.setAttribute("id","projectButtonForm");let a=document.createElement("input");a.setAttribute("id","projectButtonFormInput"),a.type="text",a.name="projectName",n.appendChild(a),e.appendChild(n),a.focus()},t=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{makeButton:()=>{let n=document.getElementById("projectButtonContainer");t(n);let a=document.createElement("div"),o=document.createElement("p");o.setAttribute("id","newProjectButtonText");let d=document.createTextNode("+ New Project");o.appendChild(d),a.appendChild(o),a.setAttribute("id","newProjectButton"),n.appendChild(a),a.addEventListener("click",e)},makeForm:e}})(),a=(()=>{let e=[];localStorage.getItem("taskArray")&&(e=JSON.parse(localStorage.getItem("taskArray")));let t=()=>{localStorage.setItem("taskArray",JSON.stringify(e))},n=()=>{let e=(new Date).toLocaleDateString(),t=e.split("/"),n=t[0],a=t[1];return n=n.padStart(3,"0").slice(-2),a=a.padStart(3,"0").slice(-2),t[0]=t[2],t[1]=n,t[2]=a,e=t.join("-"),e},a=e=>{let t=document.getElementById("taskContainer");console.log("active tasks >>>>",e),d(t);for(let n in e){let a=document.createElement("div");a.classList.add("task");let d=document.createElement("div");d.classList.add("taskStatus");let l=document.createElement("div");l.classList.add("notDone");let r=document.createElement("i");r.classList.add("far","fa-circle");let i=document.createElement("div");i.classList.add("taskTextContainer");let c=document.createElement("p");c.classList.add("taskText");let s=document.createTextNode(e[n][0]);console.log(s);let m=document.createElement("form");m.classList.add("taskDate");let u=document.createElement("label");u.for="dueDate";let p=document.createElement("input");p.type="date",p.classList.add("dueDate"),p.name="dueDate",e[n][1]&&(p.value=e[n][1]),m.appendChild(u),m.appendChild(p),l.prepend(r),c.appendChild(s),i.appendChild(c),o(i),d.appendChild(l),d.appendChild(i),a.appendChild(d),a.appendChild(m),t.appendChild(a)}console.log("loaded")},o=n=>{let a=n.firstChild,l=a.textContent;a.addEventListener("click",(()=>{a.remove();let r=document.createElement("form");r.classList.add("newTextForm");let i=document.createElement("input");i.type="text",i.name="newTaskName",i.classList.add("newTextInput"),r.appendChild(i),n.appendChild(r),r.addEventListener("submit",(()=>{let a=n.parentNode.parentNode,l=Array.from(a.parentNode.children).indexOf(a);e[l].shift(),e[l].unshift(i.value),d(n);let r=document.createElement("p");r.classList.add("taskText");let c=document.createTextNode(i.value);r.appendChild(c),n.appendChild(r),o(n),t()})),r.addEventListener("focusout",(()=>{d(n);let e=document.createElement("p");e.classList.add("taskText");let t=document.createTextNode(l);e.appendChild(t),n.appendChild(e),o(n)})),i.focus()}))},d=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{loadInbox:()=>{a(e)},loadToday:()=>{let t=[],o=n();for(let n in e)console.log("under"),e[n].length>1&&e[n][1]===o&&t.push(e[n]);console.log(t),a(t)},loadWeek:()=>{let t=[];for(let n in e)e[n][1]&&new Date(e[n][1]).getWeek()===(new Date).getWeek()&&(console.log("same week"),t.push(e[n]));a(t)},load:a,construct:a=>{"today"===r||"week"===r?e.push([a,n()]):e.push([a]),t()},taskArray:e,saveArray:t}})(),o=()=>{console.log("changes..."),document.querySelectorAll(".dueDate").forEach((e=>{e.addEventListener("change",(()=>{let t,n=e.value,o=e.parentNode.parentNode,d=Array.from(o.parentNode.children).indexOf(o);"inbox"===r||"today"===r||"week"===r?(t=a.taskArray[d],a.saveArray()):t=l.projectList[r][d],t.length>1&&t.pop(),t.push(n)}))}))},d={init:()=>{document.querySelectorAll(".notDone").forEach((e=>{e.addEventListener("click",(()=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(e);let t=document.createElement("i");t.classList.add("fas","fa-check-circle"),e.prepend(t);let n=e.parentNode.parentNode;"inbox"===r||"today"===r||"week"===r?(a.taskArray.splice(Array.from(n.parentNode.children).indexOf(n),1),a.saveArray()):(l.projectList[r].splice(Array.from(n.parentNode.children).indexOf(n),1),l.saveProjectList()),n.classList.add("fadingTask"),setTimeout((()=>{taskContainer.removeChild(e.parentNode.parentNode)}),500)}))}))}},l=(()=>{let e={},t=()=>{localStorage.getItem("projectList")&&(e=JSON.parse(localStorage.getItem("projectList")),console.log("taskarray detected!"))};t();let n=()=>{localStorage.setItem("projectList",JSON.stringify(e))},l=()=>{console.log("loading project");let t=e[r];a.load(t),console.log(t),n()},i=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{makeProject:t=>{e[t]?alert("You cannot have duplicate projects!"):e[t]=[]},loadProjectNames:()=>{let t=Object.keys(e),a=document.getElementById("projectContainer");console.log(t),i(a);for(let e in t){let n=document.createElement("div");n.classList.add("project");let o=document.createElement("p");o.classList.add("projectName");let d=document.createTextNode(t[e]);o.appendChild(d),n.appendChild(o),a.appendChild(n);let l="PROJ_"+t[e];n.setAttribute("id",l);let r=document.createElement("div");r.classList.add("class","trashContainer");let i=document.createElement("i");i.classList.add("fa","fa-trash-alt"),r.appendChild(i),n.appendChild(r)}n()},init:()=>{let t=document.getElementById("taskTabTitle");document.querySelectorAll(".project").forEach((n=>{n.addEventListener("click",(()=>{let a=Object.keys(e),c=document.getElementById("taskContainer");i(c);let s=a[Array.from(n.parentNode.children).indexOf(n)];t.textContent=s,r=n.id.slice(5),l(),o(),d.init()}))})),document.querySelectorAll(".trashContainer").forEach((t=>{t.addEventListener("click",(a=>{a.stopPropagation();let o=Object.keys(e),d=t.parentElement,l=o[Array.from(d.parentNode.children).indexOf(d)],r=document.getElementById("projectContainer");delete e[l],n(),d.classList.add("fadingProject"),setTimeout((()=>{r.removeChild(d)}),500)}))})),console.log(e)},load:l,construct:t=>{e[r].push([t]),n()},projectList:e,loadProjectList:t,saveProjectList:n}})(),r="inbox";Date.prototype.getWeek=function(){var e=new Date(Date.UTC(this.getFullYear(),this.getMonth(),this.getDate())),t=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-t);var n=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e-n)/864e5+1)/7)};let i=()=>{document.getElementById("newTaskButton").addEventListener("click",(()=>{t.makeForm(),c()}))},c=()=>{let e=document.getElementById("buttonForm"),n=document.getElementById("buttonFormInput");e.addEventListener("submit",(()=>{let e=n.value;"inbox"===r||"today"===r||"week"===r?a.construct(e):l.construct(e),u(),d.init(),o(),t.makeButton(),i()})),e.addEventListener("focusout",(()=>{t.makeButton(),i()}))},s=()=>{document.getElementById("newProjectButton").addEventListener("click",(()=>{n.makeForm(),m()}))},m=()=>{let e=document.getElementById("projectButtonForm"),t=document.getElementById("projectButtonFormInput");e.addEventListener("submit",(()=>{let e=t.value;l.makeProject(e),l.loadProjectNames(),l.init(),n.makeButton(),s()})),e.addEventListener("focusout",(()=>{n.makeButton(),s()}))},u=()=>{"inbox"===r?a.loadInbox():"today"===r?a.loadToday():"week"===r?a.loadWeek():(console.log("desiredtask array & project list"),l.load())},p=e=>{document.getElementById("taskTabTitle").textContent=e},h=document.getElementById("inbox"),k=document.getElementById("today"),C=document.getElementById("week"),E=()=>{r="inbox",u(),d.init(),o(),p("Inbox")};h.addEventListener("click",(()=>{E()})),k.addEventListener("click",(()=>{r="today",u(),d.init(),o(),p("Today")})),C.addEventListener("click",(()=>{r="week",u(),d.init(),o(),p("This Week")})),localStorage.removeItem("projectList"),localStorage.removeItem("taskArray"),E(),l.loadProjectList(),l.loadProjectNames(),l.init(),t.makeButton(),i(),n.makeButton(),s()})();