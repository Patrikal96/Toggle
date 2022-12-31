const body=document.querySelector('body');// si es una clase con query Selector
const toggle=document.getElementById('toggle');//es un id con getElementById

toggle.onclick=function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
};