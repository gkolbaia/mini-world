import Buildgins from './buildings'
import Store from './store';

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



export class Warehouse extends Buildgins {
    private _warehouseProducts: object = {};
    private _ownerStore: Store;


    constructor(name: string, x: number, y: number, store: Store) {
        super(name, x, y);
        this.needsPermission = true;
        this._ownerStore = store;
    }

    givePermission(visitor) {
        if(this._ownerStore.checkStaff(this._ownerStore['staff'],visitor)){
            return true;
        }else{
            return false;
        }
    }
    get ownerStore(): Store {
        return this._ownerStore;
    }

}

