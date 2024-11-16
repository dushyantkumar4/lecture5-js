// function hello(){
//     console.log("inside hellow fnx")
//     console.log("hello");
// }
 
// function demo(){
//     console.log("calling hello fnx");
//     hello();
// }
// console.log("calling demo fnx");
// demo();
    // function one(){
    //     return 1;
    // }
    // function two(){
    //     return one() + one();
        
    // }
    // function three(){
    //    let ans= two()+ one();
    //     console.log(ans);
    // }
    // three();
    // setTimeout(()=>{
    //     console.log("hello world");
    // },2000);
    // setTimeout(()=>{
    //     console.log("apna college");
    // },2000);

    // console.log("hello....")


    // let h1=document.querySelector("h1");

    // function changeColor(col,delay){
    //     return new Promise((res,rej)=>{
    //         setTimeout(()=>{
    //             h1.style.color= col;
    //             res("color changed")
    //            },delay)
    //     })
    // }
    // changeColor("red",1000)
    // .then(()=>{
    //     console.log("red color was completed");
    //     return changeColor("pink",1000);
    // })
    // .then(()=>{
    //     console.log("pink was changed");
    //     return changeColor("yellow",1000);
    // })
    // .then(()=>{
    //     console.log("yellow done");
    //     return changeColor("orange",1000);
    // })
    // .then(()=>{
    //     console.log("orange done");
    //     return changeColor("blue",1000);
    // })
    // .then(()=>{
    //     console.log("blue was done");
    //     return changeColor("purple",1000);
    // })
    // .then(()=>{
    //     console.log("purple done");
    // })



    // changeColor("red",1000,()=>{
    //     changeColor("orange",1000,()=>{
    //         changeColor("green",1000,()=>{
    //             changeColor("yellow",1000,()=>{
    //                 changeColor("blue",1000)
    //             })
    //         })
    //     })
    // });
// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if (internetSpeed>4){
//     success();}
//     else{ 
//         failure();
//     }
    
// }
// savetoDb("hello how do you do",()=>{
//     console.log("success-data is saved:");
//     savetoDb("apna college",()=>{
//         console.log("sucess2:data saved");
//         savetoDb("dushyant",()=>{
//             console.log("success3:data saved");
//         },()=>{
//             console.log("failure3:network error data not saved")
//         })
//     },()=>{
//         console.log("failure2:week network data not saved");
//     })
// },()=>{
//     console.log(" failure- network slow data isn't save")
// });
    
// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("resolved: data saved");
//         }
//         else{
//             reject("rejected: week conection");
//         }
//     });
// }
// savetoDb("hello world").then(()=>{
//     console.log("promise was resolved");

//     return savetoDb("hello duniya");
// })
// .then(()=>{
//     console.log("promise2: was resolved");
//     return savetoDb("dushaynt");
// }).then(()=>{
//     console.log("promise3:data saved");
// })
// .catch(()=>{
//     console.log("promise rejected");
// })

// function savetoDb(data){
//     return new Promise((res,rej)=>{
//         let eSpeed=Math.floor(Math.random()*10)+1;
//         if(eSpeed>4){
//             res("resolved:data saved");
//         }
//         else{
//             rej("rejected:week network");
//         }
//     });
// }
// savetoDb("hello world").then((result)=>{
//     console.log("promise resolved");
//     console.log("result:",result);
//     return savetoDb("apan college")
// }).then((result)=>{
//     console.log("promise 2 resolved");
//     console.log("result:",result);
//     return savetoDb("the code help");
// }).then((result)=>{
//     console.log("promise3 resolved");
//     console.log("result:",result);
// }).catch((result)=>{
//     console.log("promise rejected");
//     console.log("result:",result);
// });
// async function hello(){
//     throw "404 page not found:";
//    return "hello";
// }
// hello()
// .then((result)=>{
//     console.log("promise resolved");
//     console.log("result:",result);
// })
// .catch((err)=>{
//     console.log("promse was rejected:",err);
// })
// let demo=async ()=>{
//     console.log("how do you do");
// }
// function getNum(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             console.log(num);
//             res();
//         },1000)
//     })
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
// // }
// let h1=document.querySelector("h1");

// function changeColor(color,delay){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//             if(num>3){
//                 rej("promise rejected");
//             }

//             h1.style.color=color;
//             console.log(`color changed to: ${color}`);
//             res("color changed");
//         },delay);
//     });
// }
// async function demo() {
//     try{
//         await changeColor("red",1000);
//     await changeColor("pink",1000);
//     await changeColor("blue",1000);
//     changeColor("green",1000);
//     }catch(err){
//         console.log("error courght:",err);
//     }
// }
// let object={
//     a:undefined
// }
// let jsonRes='{"fact":"Cats have 300 million neurons; dogs have about 160 million","length":58}';
// let validRes=JSON.parse(jsonRes);
// console.log(validRes);

// let object={
//     name:"dushyat",
//     marks:99
// }
// let jsonRes='{"fact":"A tomcat (male cat) can begin mating when he is between 7 and 10 months old.","length":76}';
// let validRes=JSON.parse(jsonRes);
// console.log(validRes);
// let student={
//     neme:"dushyant",
//     marks:99
// }
// JSON.stringify(student);

// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//      // console.log(res);
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1: ",data.fact);
//     return fetch (url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2: ",data2);
// })
// .catch((err)=>{
//     console.log("error-",err);
// })
// let url="https://catfact.ninja/fact";
// async function getFact(){
//     try {
//         let res= await fetch(url);
//     let data= await res.json();
//     console.log(data.fact);
//     } catch (e){
//         console.log("error",e);
//     }
//     }

// async function getData(){
//     let res=await fetch('https://catfact.ninja/fact');
//     let data= await res.json();
//     console.log(data);
// }
// getData();
// let url='https://catfact.ninja/fact';
// async function getData(){
//     try{
//         let res=await fetch(url);
//     let data=await res.json();
//     console.log(data.fact);

//     let res2=await fetch(url);
//     let data2=await res2.json();
//     console.log(data2.fact);
//     }catch(err){
//         console.log("error: ",err)
//     }
//     console.log("code after the error")
    
// }
// getData();

// let btn=document.querySelector("button");
// let url2='https://dog.ceo/api/breeds/image/random';

// btn.addEventListener("click",async ()=>{
//     let links=await getImg();
//     // console.log(link);
//     let img=document.querySelector("#result");
//     img.setAttribute("src", links);
// });

// async function getImg(){
//     try{
//         let res= await axios.get(url2);
//         return res.data.message;
//     }catch(err){
//         console.log("error",err);
//         return "/";
//     }
    
// }

// btn.addEventListener("click",async ()=>{
//     let fact=await getData();
//     console.log(fact);
//     let p=document.querySelector("#result");
//     p.innerText=fact;
// });

// let url='https://catfact.ninja/fact';
// async function getData(){
//     try{
//         let res=await axios.get(url);
//         return res.data.fact;
//     }catch(err){
//         console.log("error-",err);
//         return "no data was found";
//     }
// }


// let url='https://icanhazdadjoke.com/';
// async function getJockes(){
//     try{
//         const conf={headers: {Accept:"application/json"}};
//         let res=await axios.get(url,conf);
//         console.log(res.data);
//     }catch(err){
//         console.log(err);
//     }
    
// }
// getJockes();

// let url='http://universities.hipolabs.com/search?name=';
// let btn=document.querySelector("button");
// btn.addEventListener("click",async ()=>{
//     let country=document.querySelector("input").value;
//     console.log(country);
//     let collArr=await getColleges(country);
//     show(collArr);
// });
// function show(collArr){
//     let list=document.querySelector("#list");
//     list.innerText="";
//     for(coll of collArr){
//         console.log(coll.name);
//         let li=document.createElement("li");
//         li.innerText=coll.name;
//         list.appendChild(li);
//     }
// }

// // let country="nepal";
// async function getColleges(country){
//     try{
//         let res=await axios.get(url+country);
//         return res.data;
//     }catch(err){
//         console.log("error: ",err);
//         return [];
//     }
// }
// let a='this is my "first heading"';
// console.log(a);
// let names="tony stark";
// name.length

// parseInt(prompt("enter a number"));
// parseInt(prompt("enter only number value"));
// console.error("hello world");
// console.warn("hello world");
// let name=prompt("enter you name");
// let age=parseInt(prompt("enter you age"));
// alert(`${name} is ${age} year old`);
let quater=3;
switch(quater){
    case 1:
        monthName="january, february, march";
        break;
    case 2:
        monthName="april, may, june";
        break;
    case 3:
        monthName="july, august, september";
        break;
    case 4:
        monthName="octuber, november, december"
        break;
    default:
        monthName="invalid name";
}
console.log(monthName);





