function solution(array, commands) {
    return commands.map(v => {
        const [i, j, k] = v
        return array.slice(i-1,j).sort((a,b) => a-b)[k-1]
    })
}