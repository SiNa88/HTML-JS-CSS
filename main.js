/*//alert("Hello world!");
console.log("Hello world!");
console.warn("This is a warning!");
console.error("This is an error!");

document.getElementById("content").innerHTML="Lets update the text"*/

const myform= document.querySelector("#my-form");
const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");
const msg= document.querySelector(".msg");
const users= document.querySelector("#users");

myform.addEventListener("submit",onSubmit)

function onSubmit(e){
    e.preventDefault()
    console.log(nameInput.value)
    if( nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML="<h5>please enter all fields</h5>"
        msg.classList.add("error")

        setTimeout(()=>{
            msg.innerHTML='';
            msg.classList.remove("error")
        },3000)
    }
    else{
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(nameInput.value + " : " + emailInput.value))
        users.appendChild(li)
        nameInput.value='';
        emailInput.value='';
    }
}



