import BaseObject from "./base-object";
/**WHAT BUILDINGS HAVE:
 * ID
 * NAME
 * ADDRESS
 * GETID()
 * GETDISTANCE()
 * CHECKDISTANCE()
 * ceaturesInBuilding
 *
 */

export default class Buildgins extends BaseObject {
    needsPermission: boolean;
    creaturesInBuilding: string[] = [];
    constructor(name: string,x:number,y:number,) {
        super(name,x,y);
    }
}


