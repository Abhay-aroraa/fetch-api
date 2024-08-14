//link from we get the api
const URL = "https://cat-fact.herokuapp.com/facts"
// selecting the elements by ID.
let facts = document.getElementById("facts");
const btn = document.querySelector("#getfacts");
let nw = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let forth = document.getElementById("fourth");
//create a function by name getfacts it fetch data from url
const getfacts = async () => {
    let response = await fetch(URL);
    //and data store in data and converted into readable form json 
    let data = await response.json();
    console.log(data);

    var  Ary = [
        {data0  : data[1].text },
        {data1  : data[0].text },
        {data2  : data[2].text },
        {data3  : data[3].text },
        {data4  : data[4].text }
    ]
    var b = Ary.map(item => Object.values(item).join(" "));
    console.log(b);

    // Join the array into a single string for display
    document.getElementById("facts").innerHTML = b.join("<br> <br>");
};
   /*/ var b = Ary.map(abhay);
     console.log(b);
    function abhay(x) {
        for (var x  in Ary) {
        console.log(Ary[x]+"");
          };  document.getElementById("facts").innerHTML = b;
        }
 
}  facts.innerHTML = data[0].text;
    nw.innerHTML = data[1].text;
    second.innerHTML = data[2].text;
    third.innerHTML = data[3].text;
    forth.innerHTML = data[4].text;

    for (let i = data.text; i <= 4; i++) {
        console.log(data.text[i])
    } document.getElementById("facts").innerHTML = data.text[i];
    //WE CALL THE FUNCTION /*/
saveData();


function saveData() {
    localStorage.setItem("data", facts.innerHTML, nw.innerHTML, second.innerHTML, third.innerHTML, forth.innerHTML);
}
function showData() {
    facts.innerHTML, nw.innerHTML, second.innerHTML, third.innerHTML, forth.innerHTML = localStorage.getItem("data");
}

