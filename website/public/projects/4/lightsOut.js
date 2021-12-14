const selected = document.addEventListener('click', changeColor)
//selected.onclick = changeColor()
//if(selected) {
  //selected.style.background = 'black';
//  selected.addEventListener('click', changeColor(cell))
//}


function changeColor() {
  if(this.classList.contains('clicked') === true) {
    this.classList.remove('clicked');
  }
  else {
    this.classList.add('clicked');
  }
}
