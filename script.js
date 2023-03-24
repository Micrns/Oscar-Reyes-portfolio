


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
















