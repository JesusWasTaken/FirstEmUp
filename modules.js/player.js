import Entity from './entity';
import Bullets from './bullets';

let scoreDisplay = document.getElementById('score');

export default class Player extends Entity {

    static inGame = false;
    static score = 0;
    // singleton, instance unique de la classe Player qui modélise le vaisseau du joueur
    static instance = null;

    // on utilise des entrées par défaut pour la création du vaisseau joueur
    constructor() {
        super(600, 700, 25, 7);
        this.hp = 3;
        this.onHit = 5;
        this.multiplier = 1;
        this.attackSpeed = 1;
        this.isFirable = true;
    }

    // fonction d'accès au singleton ou vaisseau joueur
    static getInstance() {
        if (Player.instance == null) {
            Player.instance = new Player();
        } else {
            return Player.instance;
        }
    }

    damage(x) {
        this.hp -= x;
        this.multiplier = 1;
        if (this.hp <= 0) {
            Player.inGame = false;
        }
    }

    // fonction de tir, qui instancie une bullet a la position actuelle
    shoot(type) {
        if (this.isFirable) {
            switch(type) {
                case 1:
                    new Bullets(this.posX, this.posY, false, "up");
                    break;
                case 2:
                    new Bullets(this.posX, this.posY, false, "left");
                    break;
                case 3:
                    new Bullets(this.posX, this.posY, false, "right");
                    break;
            }
            this.isFirable = false;
            setTimeout(() => {
                this.isFirable = true;
            },120/this.attackSpeed);
        }
    }

    addScore(scoring) {
        Player.score += Math.floor(scoring*this.multiplier);
        this.multiplier += 0.1;
        scoreDisplay.innerHTML = Player.score;
    }
}
