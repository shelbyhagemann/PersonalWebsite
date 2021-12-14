const container = document.getElementById("container")

function main() {
  window.onload = makeGrid(5, 5)
  //window.addEventListener("load", makeGrid(5, 5))
}

function makeGrid(numRows, numCols) {
  for(row = 0 ; row < numRols ; row ++) {
    let newRow = document.createElement("div")
    for(col = 0 ; col < numCols ; col ++) {
      let newGrid = document.createElement("div")
      container.appendChild(newGrid).className = "box"
    }
  }
}


function findCoordinates() {
  for(row = 0 ; row < numRols ; row ++) {
    for(col = 0 ; col < numCols ; col ++) {
      let newGrid = document.createElement("div")
      container.appendChild(newGrid).className = "box"
    }
  }
}
