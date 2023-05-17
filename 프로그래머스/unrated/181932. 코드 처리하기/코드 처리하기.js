function solution(code) {
    let mode = 0;
    let ret = '';
    [...code].forEach((v, idx) => {
        v === '1' 
        ? mode = +!mode 
        : (mode + idx)%2 === 0 ? ret += v : ''
    })
    return ret ? ret : 'EMPTY';
}