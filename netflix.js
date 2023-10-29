let netflix=document.querySelector("#net")
console.log(netflix)

netflix.addEventListener('click' , ()=>{
   window.open('https://www.netflix.com/in/' , "_blank")
})

netflix.style.backgroundColor="pink"
netflix.style.height="50px"
netflix.style.width="150px"