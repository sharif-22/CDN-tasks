(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const E=document.forms.ticketForm,A=document.querySelector("#addPassengers"),y=document.querySelector("#passengerList");document.querySelectorAll(".passenger");A.addEventListener("click",f=>{f.preventDefault();let s=y.children.length+1;const n=document.createElement("div"),d=u(s,`passenr${s}Name`,"text",`Enter passenger${s} Name`),e=["Male","Female","Others"],r=u(s,`passenger${s}Age`,"number",`Enter passenger${s} Age`);s<6?n.append(d,b(e,s),r):console.log("tickes solds upto 5 members only "),y.append(n);function u(o,i,l,c){const m=document.createElement("div"),p=document.createElement("label"),t=document.createElement("input");return m.classList.add("flex","flex-col","gap-3"),t.classList.add("passenger","p-2"),l=="number"&&i==`passenger${o}Age`&&(t.setAttribute("min",0),t.setAttribute("max",110)),p.setAttribute("for",i),t.setAttribute("type",l),t.setAttribute("id",i),t.setAttribute("name",i),t.setAttribute("placeholder",`Enter Passenger ${o} Age `),t.setAttribute("required","required"),p.innerText=c,m.append(p,t),m}function b(o,i){const l=document.createElement("div");l.classList.add("flex","justify-between","p-3");for(let c=0;c<o.length;c++)l.appendChild(a(i,o[c],o[c],o[c]));return l}function a(o,i,l,c){let m=`passenger${o}Gender`;var p=document.createElement("div"),t=document.createElement("input");t.setAttribute("type","radio"),t.setAttribute("name",m),t.setAttribute("id",`${i.toLowerCase()}${o}`),t.setAttribute("value",l.toLowerCase()),t.setAttribute("required","required"),t.style.margin="6px";var g=document.createElement("label");return g.setAttribute("for",`${i.toLowerCase()}${o}`),g.textContent=c,p.append(t,g),p}});E.addEventListener("submit",f=>{f.preventDefault();const s=new FormData(E),n=Object.fromEntries(s),d=[];for(let a=0;a<6;a++)n[`passenger${a}Age`]&&n[`passenger${a}Gender`]&&n[`passenger${a}Name`]&&d.push({passengerAge:n[`passenger${a}Age`],passengerGender:n[`passenger${a}Gender`],passengerName:n[`passenger${a}Name`]});const e={trainNum:n.trainNum,toStation:n.toStation,fromStation:n.fromStation,dateOfJourney:n.dateOfJourney,passengersDetails:d},r=JSON.stringify(e);console.log("JSON BODY",r),(async(a,o)=>{await fetch(o,{method:"post",headers:{"Content-Type":"application/json"},body:a})})(r,"http://localhost:3000/tickets")});
