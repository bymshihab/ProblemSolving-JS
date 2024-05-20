const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 Success"), 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 Success"), 5000);
  //   setTimeout(() => reject("p2 Fail"), 1000);
  });
  const p3 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p3 Success"), 2000);
    setTimeout(() => reject("p3 Fail"), 2000);
  });
  
  Promise.any([p1, p2, p3]) // promise.any => will return first setelled success. if p3 fail then for next success will return. 
  
// here p3 is fail but it wont return the result it wait for other promise to get success. p1 is success then it return it.


  .then((res)=>{
      console.log(res);
   })
   .catch((err) =>{
      console.error(err);
   })

/**
 * output: 
 * 
 * p1 Success
 * 
 * */    
  