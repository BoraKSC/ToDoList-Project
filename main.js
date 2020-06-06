let items = ["Add or Remove.. " , "Add or Remove..", "Add or Remove..", " Add or Remove.."];

let list = document.getElementById("myList");

list.addEventListener('click' , function (item) { 
    if(item.target.tagName='li') {
        item.target.classList.toggle('checked');
    }
 })


items.forEach( function (item) { 

    createItem(item);
});2
   
function createItem(item) {  
    let li = document.createElement('li');
    let text = document.createTextNode(item);

    li.className="list-group-item";
    li.appendChild(text);
    list.appendChild(li);

    let span = document.createElement('span');
    let textSpan = document.createTextNode('x');
    span.className="close";
    span.appendChild(textSpan);
    li.appendChild(span);

    span.onclick = function () {
         
        var li= this.parentElement;
         li.style.display = "none";
         li.classList.remove('checked');
         
       }
}

 let btnCreate = document.getElementById('btnCreate');

 btnCreate.onclick = function () { 
        
    let item = document.getElementById('txtItem').value ;
    
    if(item === "") {
        alert('Please write something..') ; 
    }else {
        createItem(item);
    }
  }

let btnDelete = document.getElementById('btnDelete');

btnDelete.onclick = function () { 
    let elements =document.querySelectorAll('.checked');

    elements.forEach(function (item) { 
        item.style.display = "none" ;
     })
 }


