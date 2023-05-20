function solution(n) {
    const arr = [0, 1]
    for(let i=2; i<=n; i++){
        arr[i] = arr[i-1] + 1
        while(!(arr[i] % 3) || /3/.test(arr[i]+'')) ++arr[i]
    }
    return arr[n]
}