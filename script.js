//link from we get the api
const URL = "https://cat-fact.herokuapp.com/facts"
// selecting the elements by ID.
let facts = document.getElementById("facts");
const btn = document.querySelector("#getfacts");
let nw =document.getElementById("first");
let second=document.getElementById("second");
let third=document.getElementById("third");
let forth=document.getElementById("fourth");
//create a function by name getfacts it fetch data from url
const getfacts = async () => {
    let response = await fetch(URL);
    //and data store in data and converted into readable form json 
    let data = await response.json();
    console.log(data);
    //here we put data inside the  id. 
    facts.innerHTML = data[0].text;
    nw.innerHTML = data[1].text;
    second.innerHTML=data[2].text;
    third.innerHTML=data[3].text;
    forth.innerHTML=data[4].text;
    //WE CALL THE FUNCTION 
    saveData();
    
}
function saveData() {
    localStorage.setItem("data", facts.innerHTML,nw.innerHTML,second.innerHTML,third.innerHTML,forth.innerHTML);
}
function showData(){
 facts.innerHTML,nw.innerHTML,second.innerHTML,third.innerHTML,forth.innerHTML= localStorage.getItem("data");
}

