function solution(box, n) {
    // 1)
    // const a = ~~(box[0] / n)
    // const b = ~~(box[1] / n)
    // const c = ~~(box[2] / n)
    // return a*b*c
    
    // 2)
    // const [width, length, height] = box;
    // return ~~(width/n)*~~(length/n)*~~(height/n)
    
    // 3)
    return box.reduce((a,v) => ~~(v / n) * a, 1)
}
