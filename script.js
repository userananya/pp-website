
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(e of tabcontents){
 e.classList.remove("active-tab")
    }
   document.getElementById(tabname).classList.add("active-tab");
}