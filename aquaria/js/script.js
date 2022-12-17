var date =
  new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
var nowdate = document.querySelectorAll(".nowdate");

nowdate.forEach(item=>
  {
    item.innerHTML = date;
  });
