let grand_parent=document.getElementById("grand_parent")
console.log(grand_parent);

grand_parent.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    e.target.style.backgroundColor="green"
    console.log("grand_parent clicked");
},false)

let parent1=document.getElementById("parent1")
console.log(parent1);

parent1.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    e.target.style.backgroundColor="yellow"
    console.log("parent1 clicked");
},false)

let child=document.getElementById("child")
console.log(child);

child.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    e.target.style.backgroundColor="blue"
    console.log("child clicked");
},false)

let parent2=document.getElementById("parent2")
console.log(parent2);

parent2.addEventListener("click",(e)=>{
    e.stopImmediatePropagation()
    e.target.style.backgroundColor="pink"
    console.log("parent2 clicked");
},false)