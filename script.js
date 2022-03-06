let nav = document.createElement('nav');
nav.setAttribute('id', 'nav-bar');
nav.classList.add('navbar', 'navbar-light', 'bg-info');
document.body.appendChild(nav);

let div = document.createElement('div');
div.setAttribute('id', 'first-div');
div.classList.add('container');
document.getElementById('nav-bar').appendChild(div)

let forms = document.createElement('form');
forms.setAttribute('id', 'forms')
forms.setAttribute('onsubmit', false)
forms.classList.add('d-flex');
document.getElementById('first-div').appendChild(forms);


let searchdata = document.createElement('input');
searchdata.setAttribute('id', 'search-Box');
searchdata.setAttribute('type', 'text');
searchdata.setAttribute('placeholder', 'search');
searchdata.setAttribute('aria-label', 'search');
searchdata.classList.add('form-control', 'me-2','bg-info','text-danger','fw-bold');
document.getElementById('forms').appendChild(searchdata);


let btn = document.createElement('button');
btn.setAttribute('id', 'se-btn');
btn.setAttribute('type', 'button');
btn.setAttribute('onclick', 'search()');
btn.classList.add('btn', 'btn-outline-success');
btn.innerHTML = 'Search';
document.getElementById('forms').appendChild(btn);



let div1 = document.createElement('div');
div1.setAttribute('id', 'second-div');
div1.classList.add('container', 'mt-4');
document.body.appendChild(div1);

let div2 = document.createElement('div');
div2.setAttribute('id', 'data');
div2.classList.add('row', 'mt-4', 'bg-info','text-danger');
document.getElementById('second-div').appendChild(div2);

let p1 = document.createElement('ul');
p1.classList.add('col-3','text-break', 'h4', 'fs-4','fw-bold', 'bg-info');
p1.innerHTML = 'Id'
document.getElementById('data').appendChild(p1);

let p2 = document.createElement('ul');
p2.classList.add('col-3','text-break', 'h4', 'fs-4','fw-bold', 'bg-info');
p2.innerHTML = 'Name'
document.getElementById('data').appendChild(p2);

let p3 = document.createElement('ul');
p3.classList.add('col-3','text-break', 'h4', 'fs-4','fw-bold', 'bg-info');
p3.innerHTML = 'Address'
document.getElementById('data').appendChild(p3);

// let p4 = document.createElement('ul');
// p4.classList.add('col-2','text-break', 'h4', 'fs-4','fw-bold', 'bg-info');
// p4.innerHTML = 'Website'
// document.getElementById('data').appendChild(p4);

let p5 = document.createElement('ul');
p5.classList.add('col-2','text-break', 'h4', 'fs-4','fw-bold', 'bg-info');
p5.innerHTML = 'Phone'
document.getElementById('data').appendChild(p5);




let globalResponse;
fetch("https://api.openbrewerydb.org/breweries")
  .then((x) => x.json())
  .then((response) => {
    let parentDiv = document.getElementById("content");

    response.filter((x) => {
      let para = document.createElement("p");
      para.classList.add("col-3","text-break");
      para.innerText = x.id;
      para.classList.add("text-danger");
      parentDiv.appendChild(para);

      let para1 = document.createElement("p");
      para1.classList.add("col-3","text-break");
      para1.innerText = x.name;
      para1.classList.add("text-danger");
      parentDiv.appendChild(para1);

      let para2 = document.createElement("p");
      para2.classList.add("col-2","text-break");
      para2.innerText = x.street
      para2.classList.add("text-danger");
      parentDiv.appendChild(para2);

      let para3 = document.createElement("p");
      para3.classList.add("col-2","text-break");
      para3.innerText = x.website_url;
      para3.classList.add("text-danger");
      parentDiv.appendChild(para3);

      let para4 = document.createElement("p");
      para4.classList.add("col-2","text-break");
      para4.innerText = x.phone;
      para4.classList.add("text-danger");
      parentDiv.appendChild(para4);

    })
    }).catch((er)=>console.error(er))


    async function fetchData() {
      try {
        const result = await axios.get("https://api.openbrewerydb.org/breweries")
       .then((result)=>{
         result.filter((m)=>m.id)
         console.log(m)
       }).then((result)=>{
        result.filter((m)=>m.name)
        console.log(m).then((result)=>{
          result.filter((m)=>m.street)
          console.log(m)
    .then((v) => v.json())
    .then((response) => {
        globalResponse = response;
        let parentDiv = document.getElementById("data");
        response.map((x) => {

            let id = document.createElement("li");
            id.setAttribute('id', 'data1');
            id.classList.add("col-3");
            id.innerText = x.id;
            parentDiv.appendChild(id);

            let name = document.createElement("li");
            name.setAttribute('id', 'data1');
            name.classList.add("col-3");
            name.innerText =  x.name;
            parentDiv.appendChild(name);

            let street = document.createElement("li");
            street.setAttribute('id', 'data1');
            street.classList.add("col-3");
            street.innerText = x.street;
            parentDiv.appendChild(street);

            // let web = document.createElement("li");
            // web.setAttribute('id', 'data1');
            // web.classList.add("col-2");
            // web.innerText = x.website_url;
            // parentDiv.appendChild(web);

             let phone = document.createElement("li");
            phone.setAttribute('id', 'data1');
            phone.classList.add("col-2");
            phone.innerText = x.phone;
            parentDiv.appendChild(phone);

        })
      })
      } catch (error) {
        console.error(error);
      }
    } 
}).catch((er) => console.error(er));



async function search() {

    let parentDiv = document.getElementById("data");
    while (parentDiv.childNodes.length > 4) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
    fetch("https://api.openbrewerydb.org/breweries")
        .then((v) => v.json())
        .then((response) => {
            let a = document.getElementById('search-Box').value;
            response.map((x) => {
                if (((x.id != null) && (x.id.includes(a))) || (( x.name != null) && ( x.name.includes(a))) || ((x.street!= null) && (x.street.includes(a))) ||(( x.phone != null) && ( x.phone.includes(a)))) {
                     let id = document.createElement("li");
            id.setAttribute('id', 'data1');
            id.classList.add("col-3");
            id.innerText = x.id;
            parentDiv.appendChild(id);

            let name = document.createElement("li");
            name.setAttribute('id', 'data1');
            name.classList.add("col-2");
            name.innerText =  x.name;
            parentDiv.appendChild(name);

            let street = document.createElement("li");
            street.setAttribute('id', 'data1');
            street.classList.add("col-2");
            street.innerText = x.street;
            parentDiv.appendChild(street);

            let web = document.createElement("li");
            web.setAttribute('id', 'data1');
            web.classList.add("col-2");
            web.innerText = x.website_url;
            parentDiv.appendChild(web);

            let phone = document.createElement("li");
            phone.setAttribute('id', 'data1');
            phone.classList.add("col-2");
            phone.innerText = x.phone;
            parentDiv.appendChild(phone);
           }
            })
        }).catch((er) => console.error(er))
    }