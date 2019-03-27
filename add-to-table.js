let users = [];
let noUsers = 0;
let globalColor = 'black';
let globalBackround = 'white';
let globalBorder = 'black';
const helpSort = {tname: 0, tsurname:0, tphone:0};
function sorting(column){
  clearSpan();
  users = users.sort(function(a,b) {
    let aName = a[column].toUpperCase();
    let bName = b[column].toUpperCase();
    if (helpSort[column]%2 == 0) {
      document.getElementById(column).innerHTML = '&#x2193;';
      if (aName < bName) return -1;
      if (aName > bName) return 1;
      return 0;
    } else {
      document.getElementById(column).innerHTML = '&#x2191;';
      if (aName > bName) return -1;
      if (aName < bName) return 1;
      return 0;
    }
  });
  helpSort[column]++;
  displayTable();
}
function displayTable(){
  document.getElementById('tbody').innerHTML = "";
  for(let i = 0; i < users.length; i++){
    document.getElementById('tbody').innerHTML += `<tr><td class="thtd">${users[i].tname}</td><td class="thtd">${users[i].tsurname}</td><td class="thtd">${users[i].tphone}</td><td class="thtd"><input type="checkbox" name="delete" value="${users[i].no}"></td></tr>`
  }
  let clas = document.getElementsByClassName('thtd');
  for(let i = 0; i < clas.length; i++){
    clas[i].style.backgroundColor = ''+globalBackround+'';
    clas[i].style.borderColor = `${globalBorder}`;
    clas[i].style.color = `${globalColor}`;
  }
}
function addToTable(){
  let name = document.getElementById('name').value;
  let surname = document.getElementById('surname').value;
  let telephone = document.getElementById('telephone').value;
  clearInput();
  document.getElementById('table').style = 'display: initial';
  users.push({tname: `${name}`,tsurname: `${surname}`,tphone: `${telephone}`,no: `${noUsers}`});
  displayTable();
  noUsers++;
}

function clearSpan(){
  let spans = document.getElementsByTagName('span');
  for(let i = 0; i < spans.length; i++){
    spans[i].innerHTML = "";
  }
}

function clearInput(){
  let input = document.getElementsByTagName('input');
  for(let i = 0; i < input.length; i++){
    input[i].value = "";
  }
}

function changeapperance(){
  globalBackround = document.getElementById('bg-color').value;
  globalBorder = document.getElementById('bc-color').value;
  globalColor = document.getElementById('fc-color').value;

  let clas = document.getElementsByClassName('thtd');
  for(let i = 0; i < clas.length; i++){
    clas[i].style.backgroundColor = `${globalBackround}`;
    clas[i].style.borderColor = `${globalBorder}`;
    clas[i].style.color = `${globalColor}`;
  }
}

function deleteUser(id) {
  let check = document.getElementsByName('delete');
  let arrCheck = [];
  for(let i = 0; i < check.length; i++){
    arrCheck.push(check[i].value);
  }
  for(let i = 0; i < users.length;i++){
    if(check[arrCheck.indexOf(users[i].no)].checked){
      users.splice(i,1);
      i--;
    }
  }
  displayTable();
}