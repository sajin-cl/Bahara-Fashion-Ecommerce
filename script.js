//select side nav bar
var sideNavbar = document.querySelector(".side-navbar")

function showNavbar() {

    sideNavbar.style.left = "0";

}


function closeNavbar() {

    sideNavbar.style.left = "-60%";

}


/* collection page script */

/* select product and search*/
var productContainer = document.getElementById("product");

var search = document.getElementById("search");

var productList = productContainer.querySelectorAll("div")



search.addEventListener("keyup", function (event) {

    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count++) {

        var productName = productList[count].querySelector("p").textContent

        if (productName.toUpperCase().indexOf(enteredValue) < 0) {

            productList[count].style.display = "none";


        }

        else {

            productList[count].style.display = "block"
        }
    }
})