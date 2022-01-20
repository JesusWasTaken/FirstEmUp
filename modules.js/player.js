import Entity from './entity';
import PlayerBullets from './bulletTypes/playerBullets';

let scoreDisplay = document.getElementById('score');

export default class Player extends Entity {

    static inGame = false;
    static score = 0;
    // singleton, instance unique de la classe Player qui modélise le vaisseau du joueur
    static instance = null;
    // on utilise des entrées par défaut pour la création du vaisseau joueur
    constructor() {
        super(600, 700, 25, 8);
        this.hp = 3;
        this.onHit = 5;
        this.multiplier = 1;
        this.attackSpeed = 1;
        this.isFirable = true;
        this.isBoostAvailable = true;
        this.initSpeed = this.speed;
        this.isSlowable = true;
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
    shoot() {
        if (this.isFirable) {
            new PlayerBullets(this.posX, this.posY, false, "up");
            this.slowed(true); 
            this.isFirable = false;
            setTimeout(() => {
                this.slowed(false);
                this.isFirable = true;
            },120/this.attackSpeed);
        }
    }

    addScore(scoring) {
        Player.score += Math.floor(scoring*this.multiplier);
        this.multiplier += 0.1;
        scoreDisplay.innerHTML = Player.score;
    }

    boost() {
        if (this.isBoostAvailable) {
            this.speed = (this.speed == this.initSpeed) ? this.initSpeed *2 : this.initSpeed*1.4;
            this.isSlowable = false;
            this.isBoostAvailable = false;
            setTimeout(() => {
                this.speed = this.initSpeed;
                this.isSlowable = true;
            }, 250);
            setTimeout(() => {
                this.isBoostAvailable = true;
            }, 1500);
        }
    }

    slowed(bool){
        if (this.isSlowable == true) {
            if (bool) {
                this.speed = this.initSpeed/1.8;
            } else {
                this.speed = this.initSpeed;
            }
        }
    }
}
