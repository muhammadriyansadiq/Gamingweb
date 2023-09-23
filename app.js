
var closeall = document.getElementById("humbergclose")
var cross = document.getElementById("humbergclose")
var buton = document.getElementById("humbergstyle")
var hambergexpand = document.getElementById("humbergerexpander")
buton.addEventListener("click", function() {

    hambergexpand.classList.add("myClass");
    cross.classList.add("crossadd");
     })

     closeall.addEventListener("click", function() {
        hambergexpand.classList.remove("myClass");
    cross.classList.remove("crossadd");
         })