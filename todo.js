
           




// PopUp Add Item List 
const pop = () => {
    document.getElementById("main").style.filter = "brightness(30%)";
    document.getElementById("pop_box").style.visibility = "visible";
    };
  document.getElementById("add_btn").addEventListener("click", pop);
  
  // Close Pop Up
  const close = () => {
    document.getElementById("main").style.filter = "none";
    document.getElementById("pop_box").style.visibility = "hidden";
  };
  const close2 = () => {
    document.getElementById("main").style.filter = "none";
    document.getElementById("pop_box2").style.visibility = "hidden";
  };
  document.getElementById("close").addEventListener("click", close);
  document.getElementById("close2").addEventListener("click", close2);
  
  // Adding Item List
  arr = [];
  const add = () => {
    a = arr.length;
    arr.push(a);
    let title = document.getElementById("p_mid_input").value;
    let d = document.createElement("div");
    d.className = "box";
    d.id=`box${arr[arr.length-1]}`
    d.style.minHeight="260px"
    // d.style.height = "max-content";
    d.style.width = "270px";
    d.style.margin = "3rem";
    d.style.padding = "1rem";
    d.style.backgroundColor = "white";
    d.innerHTML = `<h2 style="color:#00A5EC;margin:5px" onclick="open_list(event)" id="item_title${
      arr[arr.length - 1]
    }">${title}</h2> <hr> <div id="item_List_${
      arr[arr.length - 1]
    }"> </div><div id="add_new" style="position:absolute;top:512px;"> <span class="material-symbols-rounded" style="color: #00A5EC; font-size: 20px; margin: 41px;" onclick="add_item(event)" id="add_btn_box_${
      arr[arr.length - 1]
    }" class="sc">ADD</span> <span class="material-symbols-outlined del" style="color: red; font-size: 20px; margin: 39px;" onclick="del(event)" id="del_btn_box_${
      arr[arr.length - 1]
    }">DELETE</span>`;
    document.getElementById("container").appendChild(d);
    document.getElementById("noTask").style.visibility = "hidden";
  };
  
  // Delete List
  function del(event) {
    var x = event.target.id;
    document.getElementById(`${x}`).parentElement.parentElement.remove();
    console.log(document.getElementById("container").childElementCount);
    if (document.getElementById("container").childElementCount === 0) {
      document.getElementById("noTask").style.visibility = "visible";
    }
  }
  
  // Pop UP 2 Adding New Items
  var add_Id;
  function add_item(event) {
    
    document.getElementById("main").style.filter = "brightness(30%)";
    document.getElementById("pop_box2").style.visibility = "visible";
    add_Id = event.target.id;
}
    
  
  document.getElementById("add_new_task").addEventListener("click", add);
  document.getElementById("add_new_task").addEventListener("click", close);
  
  
  // Deleting Item
  function del_item(event) {
    var y = event.target.id;
    document.getElementById(`${y}`).parentElement.remove();
  }
  
  
  // Adding New Task To List
  arr2 = [];
  const newTaskAdd = () => {
    b = arr2.length;
    arr2.push(b);
    let t = document.getElementById("p2_mid_input").value;
    let b_d = document.getElementById(`${add_Id}`).parentElement.parentElement;
    b_d.children[2].innerHTML =
      `${b_d.children[2].innerHTML}` +`<div id="item_${arr2[arr2.length - 1]}" class="item"><input type="checkbox" class="check" id="checkBox_${arr2[arr2.length - 1]}" onclick="ifCheck(event)"> <span>${t}</span > <span style="color:red;font-size:20px" class="material-symbols-outlined" onclick="del_item(event)" id=c_${arr2[arr2.length - 1]}>cancel</span></div>`;
      if(typeof document.getElementById('newDiv')!="undefined"){
        b_d=document.getElementById(`newDiv`);
        b_d.children[2].innerHTML =
        `${b_d.children[2].innerHTML}` +`<div id="item_${arr2[arr2.length - 1]}" class="item"><input type="checkbox" class="check" id="checkBox_${arr2[arr2.length - 1]}" onclick="ifCheck(event)"> <span>${t}</span > <span style="color:red;font-size:20px" class="material-symbols-outlined" onclick="del_item(event)" id=c_${arr2[arr2.length - 1]}>cancel</span></div>`;
      }
      
  };
  document.getElementById("add_new_item").addEventListener("click", newTaskAdd);
  document.getElementById("add_new_item").addEventListener("click", close2);
  
  
  // If CHeckBox Checked
  const ifCheck = (event) => {
    var z = event.target.id;
    var c = document.getElementById(`${z}`);
    if (c.checked) {
      c.parentElement.childNodes[2].style.color = "grey";
      c.parentElement.childNodes[2].style.textDecoration = "line-through";
      c.checked = "checked";
    } else {
      c.parentElement.childNodes[2].style.color = "black";
      c.parentElement.childNodes[2].style.textDecoration = "none";
    }
  };
  
  
  // Open List
  const open_list = (event) => {
    var t = event.target.id;
    var par = document.getElementById(t).parentElement;
    arr3 = [];
    for (var i = 0; i < par.childElementCount; i++) {
      var val=par.children[i].cloneNode(true);
      window["child" + i] = val;
      arr3.push(window["child" + i]);
    }
    
    document.getElementById("container").style.visibility = "hidden";
    let ndiv = document.createElement("div");
    ndiv.className = "box";
    ndiv.id = "newDiv";
    ndiv.style.minheight = "260px";
    ndiv.style.width = "270px";
    ndiv.style.padding = "1rem";
    ndiv.style.backgroundColor = "white";
    ndiv.appendChild(arr3[0]);
    ndiv.appendChild(arr3[1]);
    ndiv.appendChild(arr3[2]);
    
    ndiv.appendChild(arr3[3]);
    document.getElementById("con_box").appendChild(ndiv);
    var txt = ndiv.children[0].innerText;
    ndiv.children[0].innerHTML = `<h2 style="color:#00A5EC;margin:5px">${txt}</h2>`;
    var back=document.createElement('div')
    back.innerHTML=`<span id='backBtn' class="material-symbols-outlined" style="font-size: 42px;color: grey; float:left" onclick="Back(event)"> <i class="fa fa-arrow-left" aria-hidden="true"></i> </span> <span id='bText' style="font-size: 40px">Back<span>`
    document.getElementById('add_new').innerHTML=`${back.innerHTML}  ${document.getElementById('add_new').innerHTML}`
    ndiv.parentElement.style.display='flex'
    ndiv.parentElement.style.justifyContent='center'
  }
  
  // Go Back
  const Back=(event)=>{
      document.getElementById('backBtn').remove()
      document.getElementById('bText').remove()
      document.getElementById('newDiv').remove()
      document.getElementById("container").style.visibility = "visible";
  }