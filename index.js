var data = new Date();
var day = data.getDate();



var month_name = data.toLocaleDateString("en", { month: "long" });

var dayName = data.toLocaleDateString("en", { weekday: "long" });
var nextDay = data.getDate() +1
var nextnextday = data.getDate() + 2



nextnextdayy.innerHTML = nextnextday

var btn = document.querySelector(".buttonn")
 var inputval = document.getElementById(".cityinput")



//https://api.weatherapi.com/v1/search.json?key=fc845ad1659349e8bbb120038231902&q=
//xml.open("GET", `https://api.weatherapi.com/v1/search.json?key=fc845ad1659349e8bbb120038231902&q=);

 

var recipes = [];
var dataarr =[];
function getData() {
    var xml = new XMLHttpRequest();
    xml.open("GET", `https://api.weatherapi.com/v1/search.json?key=fc845ad1659349e8bbb120038231902&q=london`  );
    xml.send();

    xml.addEventListener("readystatechange", function () {
        if (xml.readyState == 4 && xml.status == 200)
            recipes = JSON.parse(xml.response);
        display();
    });
}
function addlink() {
    var dataobj = {
        data_cityObj: inputval.value,
        

    }}

getData();


   
function display() {
    var box = "";
      for (var i = 0; i <1; i++) {
      
        
     
        box += `
        
        <div class="col">
            <div class="card ">
         <div class="card-header d-flex flex-row justify-content-between">
                    <div> ${dayName}</div>
                    <div > ${day}  ${month_name} </div>
                    
                </div>
                 <div class="card-body">
    <div class="col-md-4" onclick="getDetails(${recipes[i]})">
   
    <p> name :${recipes[0].name}</p>
     <p> lat: ${recipes[0].lat}</p>
      <p> lon: ${recipes[0].lon}</p>
      </div>
    
  </div>
  </div>
  </div>
      <div class="col">
            <div class="card ">
         <div class="card-header text-center">
                   
                    <div > ${nextDay}  ${month_name} </div>
                    
                </div>
                 <div class="card-body">
    <div class="col-md-4" onclick="getDetails(${recipes[i]})">
   
    <p> name :${recipes[1].name}</p>
     <p> lat: ${recipes[1].lat}</p>
      <p> lon: ${recipes[1].lon}</p>
      </div>
    
  </div>
  </div>
  </div>
    <div class="col">
            <div class="card">
         <div class="card-header text-center">

                    <div > ${nextnextday}  ${month_name} </div>
                    
                </div>
                 <div class="card-body">
    <div class="col-md-4" onclick="getDetails(${recipes[i]})">
   
    <p class="w-100"> name:${recipes[2].name}</p>
     <p> lat: ${recipes[2].lat}</p>
      <p> lon: ${recipes[2].lon}</p>
      </div>
    
  </div>
  </div>
  </div>
    `;}
    
    Row.innerHTML = box;
}



