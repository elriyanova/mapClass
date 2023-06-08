class Map {
  data
  constructor(sizex, sizey) {
    this.create(sizex, sizey)
  }

  create(sizex, sizey) {
    let array = []
    for (let i = 0; i < sizey; i++) {
      let arrayInner = []
      array.push(arrayInner)
      for (let j = 0; j < sizex; j++) {
        arrayInner.push([])
      }
    }
    this.data = array
  }

  getCell(x,y) {
    return this.data[y][x]
  }

  push(value, x,y) {
    if(y > 0 && x > 0 && y <= this.data.length && x <= this.data[0].length) {
      this.data[y][x].push(value)
    } else {
      console.log(`Incorrect coords x = ${x}, y = ${y} for value = ${value}`)
    }
  }

  show() {
    console.log(this.data)
  }

  find(value) {
    let found = [];
    for(let i = 0; i < this.data.length; i++) {
      for(let j = 0; j < this.data[0].length; j++) {
        if(this.data[i][j].find(element => element === value)){
          const coords = {
            x: j,
            y: i
          }
          found.push(coords)
        }
      }
    }
    return found
  }

  move(value, directionx, directiony) {
    let oldCoords = this.find(value)
    let newCoords = oldCoords.map(element => {
      let newObj = {
        x: directionx + element.x,
        y: directiony + element.y
      }
      return newObj
    })
    let found = newCoords.find(element => !(element.x < this.data[0].length && element.x > 0 && element.y < this.data.lnegth && element.y > 0))
    if (found) {
      return
    }
  }
}

const map = new Map(4, 7)
map.push(7, 2, 3)
map.push(7, 1, 1)
map.push(7, 103, 3)
map.show()
console.log(map.find(7))
