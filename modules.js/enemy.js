import Entity from './entity';
import Bullets from './bullets';
import Player from './player';
import { defaultPatterns } from './assets/patterns';

class Enemy extends Entity {
    static count = 0;
    static enemyTab = [];
    constructor(posX, posY,radius, speed, hp, onHit) {
        super(posX, posY);
        this.radius = radius;
        this.speed = speed;
        this.hp = hp;
        this.onHit = onHit;
        this.id = Enemy.count;
        Enemy.count ++;
        this.bottomBorder = Entity.canvas.height - 120;
        this.currentMove = null;
        this.pattern = defaultPatterns;
        this.getNextMove();
        Enemy.enemyTab.push(this)
        this.value = 10;
    }

    shoot() {
        new Bullets(this.posX, this.posY, true, "down");
    }

    getNextMove() {
        if (this.currentMove == null || this.currentMove.length <= this.state) {
            this.state = 0;
            this.currentMove = this.pattern[Math.floor(Math.random()*this.pattern.length)];
        }
        this.move(this.currentMove[this.state]);
        this.state ++;
    }

    damage() {
        this.hp -= 1;
        if (this.hp == 0) {
            Player.getInstance().addScore(this.value);
            this.delete();  
        }
    }

    delete() {
        for (let i = 0; i<Enemy.enemyTab.length;i++) {  
            if(this.id == Enemy.enemyTab[i].id) {
                Enemy.enemyTab.splice(i,1);
                    delete this;
                    return;
            }
        }
    }

    static isEmpty() {
        for (let i = 0; i < Enemy.enemyTab.length;i++) {
            if (Enemy.enemyTab != null) {
                return false;
            }
        }
        return true;
    }
}

export default Enemy;