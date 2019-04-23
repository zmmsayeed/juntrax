/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// function myFunction() {
//     var x = document.querySelector("ul.sidenav");
//     if (x.className === "sidenav") {
//         x.style.display = "hidden";
//     } else {
//         x.className = "sidenav";
//     }
//   }