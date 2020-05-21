// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

// Write your JavaScript code here!
window.addEventListener("load", function(){

   let planetIndex = Math.floor((Math.random() * 4) + 1);


   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {

         let missionTarget = document.getElementById("missionTarget")

         missionTarget.innerHTML = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[planetIndex]["name"]}</li>
               <li>Diameter: ${json[planetIndex]["diameter"]}</li>
               <li>Star: ${json[planetIndex]["star"]}</li>
               <li>Distance from Earth: ${json[planetIndex]["distance"]}</li>
               <li>Number of Moons: ${json[planetIndex]["moons"]}</li>
            </ol>
         <img src="${json[planetIndex]["image"]}"></img>`

      })
   })

   let form = document.getElementById("launchForm")

   form.addEventListener("submit", function(event) {

      let pilot = document.querySelector("input[name=pilotName]")

      let copilot = document.querySelector("input[name=copilotName]")
      
      let fuelLevel = document.querySelector("input[name=fuelLevel]")

      let cargoMass = document.querySelector("input[name=cargoMass]")
      
      
      
      
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} Ready`
      
      document.querySelector("#copilotStatus").innerHTML = `Copilot ${copilot.value} Ready`

      let launchStatus = document.getElementById("launchStatus")

      let ready = true
      
      if (pilot.value === "" || copilot.value === "") {
         alert("All fields are required!");
      }
      if (fuelLevel === null || cargoMass === null) {
         alert("All fields are required!");

      }
      
      if (Number(fuelLevel.value) < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("fuelStatus").innerHTML = `Fuel: ${fuelLevel.value}. Not enough fuel!`
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
         ready = false
         event.preventDefault();
      }

      if (cargoMass.value > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("cargoStatus").innerHTML = `Shuttle is too heavy!`
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
         ready = false
         event.preventDefault();
      }

      if (ready) {
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green"
         event.preventDefault();
      }
   })

})

