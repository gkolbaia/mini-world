import ObjectID from 'bson-objectid';
/** WHAT BASEOBJECT HAVE:
 * ID
 * NAME
 * ADDRESS
 * GETID()
 * GETDISTANCE()
 * CHECKDISTANCE()
 *
 */




export default class BaseObject {

    private _id: string;
    private _name: string = null;
    public adress: Point;


    constructor(name: string, x: number, y: number) {
        this._name = name;
        this._id = new ObjectID().str;

        this.adress = {
            'x': x,
            'y': y
        };


    }
    get id(){
        return this._id;
    }
    get name(){
        return this._name
    }
    getDistance(target){
        return (Math.sqrt(Math.pow(this.adress['x']-target.adress['x'],2) + Math.pow(this.adress['y']-target.adress['y'],2)));

    }
    checkDistance(target) {
        if(this.getDistance(target) <=5){
            return true;
        }else{
            return false;
        }
    }
}

interface Point{
    x: number;
    y: number;
}
