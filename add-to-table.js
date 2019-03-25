function addToTable(){
  let name = document.getElementById('name').value;
  let surname = document.getElementById('surname').value;
  let telephone = document.getElementById('telephone').value;
  document.getElementById('table').style = 'display: initial';
  document.getElementById('tbody').innerHTML += `<tr><td>${name}</td><td>${surname}</td><td>${telephone}</td></tr>`;
  console.log(name + ' ' + surname + ' ' + telephone);
}