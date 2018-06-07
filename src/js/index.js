function a(){
    console.log('gulp')
}
function b(){
    let  set = new Set([1,2,3,4,5,6]) 
    console.log(set)
}

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toString() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  }
  let point = new Point(1,2)

  let f = v=>v