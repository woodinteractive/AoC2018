let input = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`

let inputArray = input.split(/\n/)
let claims = []

inputArray.map((input) => {
    let obj = {}
    let props = ['id','x','y','w','h']
    let count = 0
  
    for(let char of input) {
        if(Number(char) > 0){
            obj[props[count]] = Number(char)
            count++
        }
    }
    start = 1
    length = 4
    for(let i=0; 0 < length; i++) {
        
    }

    claims.push(obj)
})

let sqIn = 0


if(x === num1, y === num2){
    sqin++
}

console.log(claims)

