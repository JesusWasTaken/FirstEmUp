import { boss2Patterns } from "../assets/patterns";
import Targeted from "../bulletTypes/targeted";
import Enemy from "../enemy";
import Entity from "../entity";


export default class Boss2 extends Enemy {
    constructor(posX) {
        super(posX, 101, 100, 9, 180, 10);
        this.value = 2000;
        this.phase = 1;
        this.threshold = this.hp / 2;
        this.pattern = boss2Patterns;
    }

    shoot() {
        for(let i = 0; i<= 5; i++) {
            setTimeout(() => {
                if (this.posX > Entity.canvas.width /2) 
                {
                    new Targeted(this.posX, this.posY, true, Entity.canvas.width*(i/5), Entity.canvas.height);
                } 
                else 
                {
                    new Targeted(this.posX, this.posY, true, Entity.canvas.width - Entity.canvas.width*(i/5), Entity.canvas.height);
                }  
            },i*60);
        }
    }
}