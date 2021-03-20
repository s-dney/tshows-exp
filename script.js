let target = document.getElementById('placeholder');

target.style.color = "lightblue"

fetch("/info.json")
.then(response => response.json()) // parse the JSON from the server
  .then(json => {
    var schoolsList = json.schools;

    function display(schoolObject) {
      var p = document.createElement("p");

      p.innerText = schoolObject.school_name;

      if (schoolObject["urls"]["bfa"] && schoolObject["urls"]["mfa"]) {
        // do some shenanigans here so they both show up.
      } else if (schoolObject["urls"]["bfa"]) {
        var a = document.createElement("a");
        a.href = schoolObject["urls"]["bfa"];
        a.appendChild(p);
        document.body.appendChild(a);
      } else if (schoolObject["urls"]["mfa"]) {
        var a = document.createElement("a");
        a.href = schoolObject["urls"]["mfa"];
        a.appendChild(p);
        document.body.appendChild(a);
      }
    }

    schoolsList.forEach(display);
  });

// var schoolsList = info.schools;

// function display(schoolObject) {
//     var p = document.createElement('p');
    
//     p.innerText = schoolObject.school_name;

//     if(schoolObject["urls"]["bfa"] && schoolObject["urls"]["mfa"]) {
// // do some shenanigans here so they both show up.
//     }
//     else if (schoolObject["urls"]["bfa"]) {
//       var a = document.createElement('a');
//       a.href = schoolObject["urls"]["bfa"];
//       a.appendChild(p);
//       document.body.appendChild(a);
//     }
//     else if (schoolObject["urls"]["mfa"]) {
//       var a = document.createElement('a');
//       a.href = schoolObject["urls"]["mfa"];
//       a.appendChild(p);
//       document.body.appendChild(a);
//     }

// }

// schoolsList.forEach(display)