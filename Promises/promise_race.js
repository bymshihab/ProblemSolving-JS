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
  
  Promise.race([p1, p2, p3]) // promise.race => frist only promise will return doesn't matter is it  fail/success . 

// it returns first setteled promise whether it is fail or success.

   .then((res)=>{
      console.log(res);
   })
   .catch((err) =>{
      console.error(err);
   })
  