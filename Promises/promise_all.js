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

Promise.all([p1, p2, p3]) // promise.all => if fail then show it immidiately
 .then((res)=>{
    console.log(res);
 })
 .catch((err) =>{
    console.error(err);
 })
