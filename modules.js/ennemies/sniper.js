import Enemy from "../enemy";
import Targeted from "../bulletTypes/targeted";
import Player from "../player";


export default class Sniper extends Enemy {
    constructor(posX, posY) {
        super(posX, posY, 30, 8, 3, 10);
        this.value = 40;
    }

    shoot() {
        new Targeted(this.posX, this.posY, true, Player.getInstance());
    }
}