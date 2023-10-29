// window.setTimeout(()=>{
//     console.log("i am set timeout");
// },5000)

// window.setInterval(()=>{
//     console.log(" i am set interval");
// },3000)

// function demo()
// {
//     setTimeout(()=>{
//         window.alert("i am alert")
//     },5000)
// }
// demo()

// function demo1()
// {
//   window.confirm(" i am conform")
// }
// demo1()

function demo(m,n)
{
    setTimeout(()=>{
        for(let i=m;i<=n;i++)
        {
            console.log(i);
        }
    },5000)
}
// demo(1,10) //if we give like this it will execute properly 
demo(1,'10a') //this time the demo will not excute bcoz of wrong input that time promises will cme

function message()
{
    console.log("numbers printed");
}
message()