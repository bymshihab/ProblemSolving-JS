const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 Success"), 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 Success"), 1000);
  //   setTimeout(() => reject("p2 Fail"), 1000);
  });
  const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p3 Success"), 2000);
    setTimeout(() => reject("p3 Fail"), 2000);
  });
  
  Promise.allSettled([p1, p2, p3]) // promise.all => if one is  fail then it will wait to end of execution then show the result. //(wait for all promises to setelled then show the result.)
  // this is the safest option. 
   .then((res)=>{
      console.log(res);
   })
   .catch((err) =>{
      console.error(err);
   })

/**
 * output: returning the result as a array of object
 * [
  { status: 'fulfilled', value: 'p1 Success' },
  { status: 'fulfilled', value: 'p2 Success' },
  { status: 'rejected', reason: 'p3 Fail' }    
]
 
 * */    
  