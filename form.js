let a=document.getElementById('b')
let b=document.forms
console.log(b);
let c=b[0][0]
let d=b[0][1]
a.onclick=function()
{
   let t=document.createElement('table')
   console.log(t);
   document.body.appendChild(t)
   t.style.border="1px solid black"
   let tr=document.createElement('tr')
   t.append(tr)
   let td1=document.createElement('td')
   td1.style.border="1px solid black"
   tr.append(td1)
   let td2=document.createElement('td')
   td2.style.border='1px solid black'
   tr.append(td2)
   td1.textContent=c.value
   td2.textContent=d.value
}