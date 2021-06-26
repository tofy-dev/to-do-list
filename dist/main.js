(()=>{"use strict";var e={d:(t,n)=>{for(var d in n)e.o(n,d)&&!e.o(t,d)&&Object.defineProperty(t,d,{enumerable:!0,get:n[d]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{d:()=>r});let t=(()=>{let e=()=>{let e=document.getElementById("buttonContainer");t(e);let n=document.createElement("form");n.setAttribute("id","buttonForm");let d=document.createElement("input");d.setAttribute("id","buttonFormInput"),d.type="text",d.name="taskName",n.appendChild(d),e.appendChild(n),d.focus()},t=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{makeButton:()=>{let n=document.getElementById("buttonContainer");t(n);let d=document.createElement("div"),o=document.createTextNode("+ New Task");d.appendChild(o),d.setAttribute("id","newTaskButton"),n.appendChild(d),d.addEventListener("click",e)},makeForm:e}})(),n=(()=>{let e=()=>{let e=document.getElementById("projectButtonContainer");t(e);let n=document.createElement("form");n.setAttribute("id","projectButtonForm");let d=document.createElement("input");d.setAttribute("id","projectButtonFormInput"),d.type="text",d.name="projectName",n.appendChild(d),e.appendChild(n),d.focus()},t=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{makeButton:()=>{let n=document.getElementById("projectButtonContainer");t(n);let d=document.createElement("div"),o=document.createElement("p");o.setAttribute("id","newProjectButtonText");let a=document.createTextNode("+ New Project");o.appendChild(a),d.appendChild(o),d.setAttribute("id","newProjectButton"),n.appendChild(d),d.addEventListener("click",e)},makeForm:e}})(),d=(()=>{let e=[],t=()=>{let e=(new Date).toLocaleDateString(),t=e.split("/"),n=t[0],d=t[1];return n=n.padStart(3,"0").slice(-2),d=d.padStart(3,"0").slice(-2),t[0]=t[2],t[1]=n,t[2]=d,e=t.join("-"),e},n=e=>{let t=document.getElementById("taskContainer");console.log("active tasks >>>>",e),o(t);for(let n in e){let o=document.createElement("div");o.classList.add("task");let a=document.createElement("div");a.classList.add("taskStatus");let l=document.createElement("div");l.classList.add("notDone");let r=document.createElement("i");r.classList.add("far","fa-circle");let i=document.createElement("div");i.classList.add("taskTextContainer");let c=document.createElement("p");c.classList.add("taskText");let s=document.createTextNode(e[n][0]);console.log(s);let m=document.createElement("form");m.classList.add("taskDate");let u=document.createElement("label");u.for="dueDate";let p=document.createElement("input");p.type="date",p.classList.add("dueDate"),p.name="dueDate",e[n][1]&&(p.value=e[n][1]),m.appendChild(u),m.appendChild(p),l.prepend(r),c.appendChild(s),i.appendChild(c),d(i),a.appendChild(l),a.appendChild(i),o.appendChild(a),o.appendChild(m),t.appendChild(o)}console.log("loaded")},d=t=>{let n=t.firstChild,a=n.textContent;n.addEventListener("click",(()=>{n.remove();let l=document.createElement("form");l.classList.add("newTextForm");let r=document.createElement("input");r.type="text",r.name="newTaskName",r.classList.add("newTextInput"),l.appendChild(r),t.appendChild(l),l.addEventListener("submit",(()=>{let n=t.parentNode.parentNode,a=Array.from(n.parentNode.children).indexOf(n);e[a].shift(),e[a].unshift(r.value),o(t);let l=document.createElement("p");l.classList.add("taskText");let i=document.createTextNode(r.value);l.appendChild(i),t.appendChild(l),d(t)})),l.addEventListener("focusout",(()=>{o(t);let e=document.createElement("p");e.classList.add("taskText");let n=document.createTextNode(a);e.appendChild(n),t.appendChild(e),d(t)})),r.focus()}))},o=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{loadInbox:()=>{n(e)},loadToday:()=>{let d=[],o=t();for(let t in e)console.log("under"),e[t].length>1&&e[t][1]===o&&d.push(e[t]);console.log(d),n(d)},loadWeek:()=>{let t=[];for(let n in e)e[n][1]&&new Date(e[n][1]).getWeek()===(new Date).getWeek()&&(console.log("same week"),t.push(e[n]));n(t)},load:n,construct:n=>{"today"===r||"week"===r?e.push([n,t()]):e.push([n]),console.log("task array is",e)},taskArray:e}})(),o=(()=>{let e={},t=()=>{console.log("loading project");let t=e[r];d.load(t),console.log(t)},n=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)};return{makeProject:t=>{e[t]=[]},loadProjectNames:()=>{let t=Object.keys(e),d=document.getElementById("projectContainer");console.log(t),n(d);for(let e in t){let n=document.createElement("div");n.classList.add("project");let o=document.createElement("p");o.classList.add("projectName");let a=document.createTextNode(t[e]);o.appendChild(a),n.appendChild(o),d.appendChild(n);let l="PROJ_"+t[e];n.setAttribute("id",l)}},init:()=>{let d=Object.keys(e),o=document.getElementById("taskTabTitle");document.querySelectorAll(".project").forEach((e=>{e.addEventListener("click",(()=>{let a=document.getElementById("taskContainer");n(a);let l=Array.from(e.parentNode.children).indexOf(e),i=d[l];o.textContent=i,r=e.id.slice(5),t()}))})),console.log(e)},load:t,construct:t=>{e[r].push([t])}}})(),a={init:()=>{document.querySelectorAll(".notDone").forEach((e=>{e.addEventListener("click",(()=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(e);let t=document.createElement("i");t.classList.add("fas","fa-check-circle"),e.prepend(t);let n=e.parentNode.parentNode;d.taskArray.splice(Array.from(n.parentNode.children).indexOf(n),1),n.classList.add("fadingTask"),setTimeout((()=>{taskContainer.removeChild(e.parentNode.parentNode)}),500)}))}))}},l=()=>{console.log("changes..."),document.querySelectorAll(".dueDate").forEach((e=>{e.addEventListener("change",(()=>{let t=e.value,n=e.parentNode.parentNode,o=d.taskArray[Array.from(n.parentNode.children).indexOf(n)];o.length>1&&o.pop(),o.push(t)}))}))},r="inbox";Date.prototype.getWeek=function(){var e=new Date(this.getFullYear(),0,1);return Math.ceil(((this-e)/864e5+e.getDay()+1)/7)};let i=()=>{document.getElementById("newTaskButton").addEventListener("click",(()=>{t.makeForm(),c()}))},c=()=>{let e=document.getElementById("buttonForm"),n=document.getElementById("buttonFormInput");e.addEventListener("submit",(()=>{let e=n.value;"inbox"===r||"today"===r||"week"===r?d.construct(e):o.construct(e),u(),a.init(),l(),t.makeButton(),i()})),e.addEventListener("focusout",(()=>{t.makeButton(),i()}))},s=()=>{document.getElementById("newProjectButton").addEventListener("click",(()=>{n.makeForm(),m()}))},m=()=>{let e=document.getElementById("projectButtonForm"),t=document.getElementById("projectButtonFormInput");e.addEventListener("submit",(()=>{let e=t.value;o.makeProject(e),o.loadProjectNames(),o.init(),n.makeButton(),s()})),e.addEventListener("focusout",(()=>{n.makeButton(),s()}))},u=()=>{"inbox"===r?d.loadInbox():"today"===r?d.loadToday():"week"===r?d.loadWeek():(console.log("desiredtask array & project list"),o.load())},p=e=>{document.getElementById("taskTabTitle").textContent=e},h=document.getElementById("inbox"),k=document.getElementById("today"),E=document.getElementById("week");h.addEventListener("click",(()=>{r="inbox",u(),a.init(),l(),p("Inbox")})),k.addEventListener("click",(()=>{r="today",u(),a.init(),l(),p("Today")})),E.addEventListener("click",(()=>{r="week",u(),a.init(),l(),p("This Week")})),t.makeButton(),i(),n.makeButton(),s()})();