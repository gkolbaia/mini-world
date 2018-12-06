import Creature from "./creature";
/** WHAT PERSON HAVE:
 * -name
 * -id
 * -adress
 * -getObjectId
 * -getDistance
 * -checkDistance
 * -wakeUp
 * -sleep
 * -move
 * -enterBuilding
 * -leaveBuilding
 */




export default class Person extends Creature{
    constructor(name: string,x:number,y:number) {

        super(name,x,y);
    }
}
