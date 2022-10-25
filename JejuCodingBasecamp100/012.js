// 문제12: 게임 캐릭터 class 만들기

class Wizard {
    constructor(a, b, c) {
        this.health = a;
        this.mana = b;
        this.armor = c;
    }
    attack() {
        console.log('파이어볼')
    }
}
const x = new Wizard(545, 210, 10);

console.log(x.health, x.mana, x.armor); // 545 210 10
x.attack(); // 파이어볼

