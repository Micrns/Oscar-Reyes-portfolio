


window.onload = () =>{

    const transition_el = document.querySelector('.transition')
    setTimeout(()=> {transition_el.classList.remove('is-active')}, 2000);
  }


  //////////////////////////////////////////////////////////////////////////////

const text = document.querySelector(".second-text");

const textLoad =  () =>{
  setTimeout(() => {text.textContent = "Software Engineer";}, 0);
  setTimeout(() => {text.textContent = "graduate of UCI";}, 4000);
  setTimeout(() => {text.textContent = "visionary";}, 8000);

}

textLoad();
setInterval(textLoad, 12000);


/////////////////////////////////////////////////////////////////////////////
//expanding down text box


const button_click = document.querySelector(".click-down");
const expand_down = document.querySelector(".paragraph-1");


button_click.onclick = function(){
  expand_down.classList.toggle("active");
  button_click.classList.toggle("active");
}















