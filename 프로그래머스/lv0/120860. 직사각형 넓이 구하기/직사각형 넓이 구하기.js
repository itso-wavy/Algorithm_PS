function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots.sort((a,b) => a[0] - b[0])
    return Math.abs((y1 - y2) * (x1 - x3))
}