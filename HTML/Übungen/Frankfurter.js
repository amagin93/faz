document.addEventListener("DOMContentLoaded", function () {
  const userIcon = document.getElementById("user-icon");

  if (userIcon) {
    userIcon.addEventListener("mouseover", function () {
      userIcon.style.cursor = "pointer";
    });

    userIcon.addEventListener("mouseout", function () {
      userIcon.style.cursor = "auto";
    });

    userIcon.addEventListener("click", function () {
      alert("Hier können Sie sich anmelden.");
    });
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const timeDate = document.getElementById("time-date");

//   if (time) {
//     timeDate.addEventListener("mouseover", function () {
//       timeDate.style.cursor = "pointer";
//     });

//     timeDate.addEventListener("mouseout", function () {
//       timeDate.style.cursor = "auto";
//     });

//     timeDate.addEventListener("click", function () {
//       document.getElementById("time-date").innerHTML = Date();
//     });
//   }
// });


document.addEventListener("DOMContentLoaded", function () {
  setInterval(myTimer, 1000);

  function myTimer() {
    const timeDate = new Date();
    document.getElementById("time").innerHTML = "Uhrzeit: " + timeDate.toLocaleTimeString();
    document.getElementById("date").innerHTML = "Datum: " + timeDate.toLocaleDateString();
  }

});