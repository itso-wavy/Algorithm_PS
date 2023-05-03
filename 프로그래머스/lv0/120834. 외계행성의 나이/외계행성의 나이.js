function solution(age) {
    const arr = [];
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    age = age.toString().split('') 
    
    for(i=0; i< age.length; i++)
    arr.push(alpha[Number(age[i])])
    return arr.join('');
}