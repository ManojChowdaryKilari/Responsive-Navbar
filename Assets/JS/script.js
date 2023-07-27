const togglebtn=document.querySelector('.toggle_btn')
const toggleBtnIcon=document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector(".dropdown_menu")

togglebtn.onclick= function(){
    dropdownMenu.classList.toggle('open')
}