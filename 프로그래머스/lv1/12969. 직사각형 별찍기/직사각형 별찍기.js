process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const [n, m] = data.split(" ");
    let answer = ''
    for(let i =0; i<m; i++) {
        for(let j=0; j<n; j++){
            answer += (j === n-1? '*\n' : '*')
        }
    }
    console.log(answer);
});