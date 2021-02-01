document.addEventListener("DOMContentLoaded", function () {
    let button = document.createElement("button");
    let buttonText = document.createTextNode("SING!");
    button.appendChild(buttonText);
    document.body.appendChild(button);
  
    button.addEventListener("click", linesOfCode);
  
    let friends = ["Peter", "Lois", "Stewie", "Brian", "Chris"];
  
    function linesOfCode() {

      for (let names of friends) {
       
        let div = document.createElement("div");
        div.classList = "friend";
        document.body.appendChild(div);
     
        let friendHeader = document.createElement("h3");
        div.appendChild(friendHeader);
        friendHeader.textContent = names;
        for (let i = 99; i > 0; i--) {
       
          let paragraph = document.createElement("p");
          let lines = function () {
            if (i <= 99) {
              return "lines";
            } else if (i == 1) {
              return "line";
            }
          };
    
          paragraph.textContent = `${i} ${lines()} of code on the wall; ${names} strikes one out, clears it all out ${ i - 1} ${lines()} of code on the wall`;
          div.appendChild(paragraph);
        }
      }
    }
  });