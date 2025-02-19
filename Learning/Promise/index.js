// let prom = new Promise(the async task i wanna perform);

 let prom = new Promise(function(res, err, hello){
    setTimeout(()=>{
      console.log("Server")
      res("hello")
   }, 1000);
    // err()
 })

 prom.then(()=>{
    console.log("handling resolve using then")
 })

async function waiting(){
   let p = await prom
   console.log("done")
   console.log(p)
   console.log(typeof p)
}
waiting()