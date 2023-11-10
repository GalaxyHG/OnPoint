function menuDrop() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let btn = document.querySelector('.lnr-eye');
btn.addEventListener('click', function() {
    let input = document.querySelector('#senha');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
});