import BaseObject from "./base-object";
/**WHAT CREATURES HAVE:
 *  ID
 * NAME
 * ADDRESS
 * GETID()
 * GETDISTANCE()
 * CHECKDISTANCE()
 * wakeUp()
 * sleep()
 * move
 * enterBuilding
 * leaveBuilding
 * moving
 */

export default class Creature extends BaseObject {
    creatureIsIn: object = null;
    awake: boolean = null;
    constructor(name: string, x: number, y: number) {
        super(name, x, y);

    }
    wakeUp() {
        if (this.awake = false) {
            this.awake = true;
        } else {
            console.log('you are already awake');
        }
    }
    sleep() {
        this.awake = false;
    }
    move(target, speed) {
        // var x = this.adress['x'] - target.adress['x'];
        // var y = this.adress['y'] - target.adress['y'];
        // var z = this.getDistance(target);

        // var interval = setInterval(() => {
        //     if (this.checkDistance(target)) {
        //         //console.log(this.checkDistance(target));
        //         callBack();
        //         clearInterval(interval);
        //     } else if (x > 0 && y > 0) {
        //         this.adress['x'] -= (speed * (Math.abs(x) / z));
        //         this.adress['y'] -= (speed * (Math.abs(y) / z));
        //     } else if (x > 0 && y < 0) {
        //         this.adress['x'] -= (speed * (Math.abs(x) / z));
        //         this.adress['y'] += (speed * (Math.abs(y) / z));
        //     } else if (x < 0 && y > 0) {
        //         this.adress['x'] += (speed * (Math.abs(x) / z));
        //         this.adress['y'] -= (speed * (Math.abs(y) / z));
        //     } else if (x < 0 && y < 0) {
        //         this.adress['x'] += (speed * (Math.abs(x) / z));
        //         this.adress['y'] += (speed * (Math.abs(y) / z));
        //     } else if (x == 0) {
        //         if (y > 0) {
        //             this.adress['y'] -= speed;
        //         } else {
        //             this.adress['y'] += speed;
        //         }
        //     } else if (y == 0) {
        //         if (x > 0) {
        //             this.adress['x'] -= speed;
        //         } else {
        //             if (x < 0) {
        //                 this.adress['x'] += speed;
        //             }
        //         }
        //     }

        // }, time);

        //SECOND VARIANT

        var x = this.adress['x'] - target.adress['x'];
        var y = this.adress['y'] - target.adress['y'];
        var z = this.getDistance(target);


        if (this.checkDistance(target)) {
        } else if (x > 0 && y > 0) {
            this.adress['x'] -= (speed * (Math.abs(x) / z));
            this.adress['y'] -= (speed * (Math.abs(y) / z));
        } else if (x > 0 && y < 0) {
            this.adress['x'] -= (speed * (Math.abs(x) / z));
            this.adress['y'] += (speed * (Math.abs(y) / z));
        } else if (x < 0 && y > 0) {
            this.adress['x'] += (speed * (Math.abs(x) / z));
            this.adress['y'] -= (speed * (Math.abs(y) / z));
        } else if (x < 0 && y < 0) {
            this.adress['x'] += (speed * (Math.abs(x) / z));
            this.adress['y'] += (speed * (Math.abs(y) / z));
        } else if (x == 0) {
            if (y > 0) {
                this.adress['y'] -= speed;
            } else {
                this.adress['y'] += speed;
            }
        } else if (y == 0) {
            if (x > 0) {
                this.adress['x'] -= speed;
            } else {
                if (x < 0) {
                    this.adress['x'] += speed;
                }
            }
        }
    }
    enterBuilding(target) {
        var self = this;
        if (this.creatureIsIn != target) {
            if (!target.needsPermission || target.givePermission(this)) {
                if (this.checkDistance(target)) {
                    this.creatureIsIn = target;
                    target.creaturesInBuilding.push(this);
                } else {
                    // this.move(target, 2, 1000, function () {
                    //     self.creatureIsIn = target;
                    //     target.creaturesInBuilding.push(self);
                    // })
                    for (var i = (this.getDistance(target) / 2); (this.getDistance(target)) > 5; i--) {
                        this.move(target, 2);
                    }
                    if (this.checkDistance(target)) {
                        this.creatureIsIn = target;
                        target.creaturesInBuilding.push(this );
                    } else {
                        throw 'something went wrong'
                    }

                }
            }
        } else {
            console.log(this.name + ' is in that building')
        }
    }
    leaveBuilding(whatToLeave) {
        if (this.creatureIsIn) {
            if (this.creatureIsIn == whatToLeave) {
                this.creatureIsIn = null;
                for (var i = 0; i < whatToLeave.creaturesInBuilding.length; i++) {
                    if(whatToLeave.creaturesInBuilding[i]._id == this.id){
                        whatToLeave.creaturesInBuilding.splice(i,1);
                        break;
                    }
                }
            } else {
                console.log('you are not in that building');
            }
        } else {
            console.log('you are not in building');
        }
    }
}
