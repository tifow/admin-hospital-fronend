let firstname = document.querySelector('#fastname'),
lastname= document.querySelector('#lastname'),
age= document.querySelector('#age'),
numbet = document.querySelector('#number'),
condition = document.querySelector('#condition');
let btn = document.querySelector('#submit');
class form{
    constructor(firstname,lastname,age,number,condition){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.number = number;
        this.condition = condition;
    }
}
let forms = new form;
let b = {
    "firstname": firstname.value,
    "lastname" : lastname.value, 
    "age" : age.value,
    "number": number.value,
    "condition":condition.value
}
btn.addEventListener('click',localStorage.setItem('file', JSON.stringify(b)));
document.innerHTML.b;
// let w = localStorage.getItem("file",JSON.parse(b));
// console.log(b);
