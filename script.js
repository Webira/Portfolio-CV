console.log("ok");
/*-------menu mobil----------------------*/

const openMenu = () => {
  const menu = document.querySelector(".header-menu");
  console.log(menu);
  //menu.style.display = "flex";

  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    document.querySelector("header.material-symbols-outlined").innerHTML =
      "close";
  } 
  else {
    document.querySelector("header.material-icons").innerHTML = "menu";
  }
};
/*-------------------------CV------------------------*/


/* ----------caroussele--------*/
function openCity(evt, imgName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    // tabcontent[i].style.backgroundImage =url('images/photosEcole/Acc.png') ; // Change l'image de fond
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(imgName).style.display = "block";
  evt.currentTarget.className += " active";
}
/*-------------- fin caroussele-------------*/

/*--------------coordoner----------------*/

const telAffich = document.querySelector(".tel");

telAffich.addEventListener("click", function () {
  console.log("tel clik");

  const affich = telAffich.innerText;

  if (affich === "Afficher le numero") {
    telAffich.innerText = "+33 6 31 79 92 04";
  } else {
    telAffich.innerText = "Afficher le numero";
  }
});
/* accordeon */
/*const imgAccord = document.querySelectorAll('.img');

imgAccord.forEach(function(item){
    item.addEventListener('click', function(){
        console.log(item);
        const next = item.nextElementSibling;
        console.log(next);
    })
})*/
