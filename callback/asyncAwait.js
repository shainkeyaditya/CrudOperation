console.log("This is Shainkey Aditya jain");

async function githubUser() {
    console.log("Inside githubUser function");
    const response = await fetch('https://api.github.com/users');
    console.log("Before response");
    const users = await response.json();
    console.log('Users resolved');
    return users;
}
console.log("Before githubUser function");
let a = githubUser();
console.log("After calling githubUser function");
a.then((users)=>{
    console.log(users);
}).catch((err)=>{
    console.log(err);
})
console.log("Last line of the file");