import Stage from "../stage";
import Boss1 from "../ennemies/boss1";
import Corvete from "../ennemies/corvete";
import Minion from "../ennemies/minion";
import Sniper from "../ennemies/sniper";


export default class Stage1 extends Stage {
    

    spawnWave() {
        switch(this.wave) {
            case 1:
                new Minion(300, 60);
                new Minion(600, 60);
                new Minion(900, 60);
                break;
            case 2:
                new Minion(300, 60);
                new Sniper(600, 70);
                new Minion(900,60);
                break;
            case 3:
                new Minion(300, 150);
                new Sniper(300, 70);
                new Sniper(900, 70);
                new Minion(900, 150);
                break;
            case 4:
                new Sniper(300, 70);
                new Sniper(600, 70);
                new Sniper(900, 70);
                new Minion(450, 120);
                new Minion(750, 120);
                break;
            case 5:
                new Corvete(600, 72);
                break;
            case 6:
                new Minion(100, 60);
                new Minion(200, 60);
                new Minion(300, 60);
                new Minion(400, 60);
                new Minion(500, 60);
                new Minion(600, 60);
                new Minion(700, 60);
                new Minion(800, 60);
                new Minion(900, 60);
                new Minion(1000, 60);
                new Minion(1100, 60);
                break;
            case 7:
                new Minion(400, 120);
                new Minion(500, 120);
                new Minion(600, 120);
                new Minion(700, 120);
                new Minion(800, 120);
                new Corvete(600, 50);
                break;
            case 8:
                new Minion(450, 50);
                new Minion(500, 80);
                new Minion(600,100);
                new Minion(700, 80);
                new Minion(750, 50);
                new Sniper(600, 50);
                break;
            case 9:
                new Minion(250,100);
                new Sniper(200,50);
                new Corvete(600, 70);
                new Sniper(1000,50);
                new Minion(950, 100);
                break;
            case 10:
                new Boss1(600, 310);
                break;
            default:
                console.log("Launching next stage");
                Stage.nextStage();
        }
    }
}