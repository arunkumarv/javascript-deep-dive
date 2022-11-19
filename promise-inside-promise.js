
 let promise3 = new Promise((resolve) => {
    let promiseX = new Promise(function(resolve1){
        resolve1(3)
    })
    resolve(promiseX)
 });
 promise3.then(function(res){
     console.log(res)
 })