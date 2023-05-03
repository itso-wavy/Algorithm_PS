function solution(rank, attendance) {
    const arr = rank.map((v, i) => [v, i]).filter((v, i) => attendance[i] === true).sort((a, b) => a[0] - b[0])
    return 10000 * arr[0][1] + 100 * arr[1][1] + arr[2][1];
}
