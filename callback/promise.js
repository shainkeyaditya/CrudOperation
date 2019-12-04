import { rejects } from "assert";

/* promise state
1- Resolve
2- rejects
3- pending */

function func1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error = true;
            if(!error){
                console.log("Your promise has been resolved");
                resolve();
            }else {
                console.log("Promise has been rejected");
                reject();
            }
        },2000);
    })
}
func1().then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})