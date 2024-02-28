let items=[];

function addItems(){
  let  inputElement=document.getElementById("inputValue");
  let  dateElement=document.getElementById("date");
  let  timeElement=document.getElementById("time");
  let todoValue=inputElement.value.trim();
  let todoDate=dateElement.value.trim();
  let todoTime = timeElement.value.trim(); 
  if(todoValue !=="" && todoDate!=="" && todoTime!==""){
  inputElement.value="";
  dateElement.value="";
  timeElement.value="";
  items.push({value:todoValue,date:todoDate, time:todoTime});
  displayItems();
}
}
function displayItems(){
  let displayElement=document.getElementById("container");
  displayElement.innerHTML=" ";
  items.forEach((item, index) => {
    displayElement.innerHTML += `<div class="task">${item.value} </div> <span>Date:${item.date}</span>  <span>Time:${item.time}</span> <button class="delete-button" onclick="deleteItem(${index});">Delete</button><br><hr>`;
      });
}

function deleteItem(index){
  items.splice(index,1);
  displayItems();
}