// 문제10: 별 찍기(loof)

const enter = 5

for(let i = 0; i < enter; i++) {
    // i: 0 1 2 3 4
    // j: 5 4 3 2 1 
    // k: 1 3 5 7 9

    let star = ''
    
    for(let j = enter - i; j > 0; j--) star += ' '
    
    for(let k = 1; k <= i * 2 + 1; k++) star += '*'

    console.log(star)
}

//     *
//    ***
//   *****
//  *******
// *********