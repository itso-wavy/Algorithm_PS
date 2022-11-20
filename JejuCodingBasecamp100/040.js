// 문제40: 놀이동산에 가자

let limit = ~~prompt('Enter the weight limit') // 50
const friends = ~~prompt('Enter the number of friends') // 5
const arr = new Array()
for(let i = 0; i < friends; i++ )
arr.push(~~prompt('Enter the weight one by one')) // [20, 20, 20, 20, 20]

for(let i = 0; i < friends; i++) {
    limit -= arr[i]
    if(limit < 0) {
        console.log(i);
        break;
    }    
}

