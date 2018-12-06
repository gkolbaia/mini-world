import Buildgins from './buildings'
import { Warehouse } from './warehouse';
/** WHAT STORE HAVE:
 *  ID
 * NAME
 * ADDRESS
 * GETID()
 * GETDISTANCE()
 * CHECKDISTANCE()
 * creaturesInBuilding
 * openOrClosed
 * Products
 * buyingProducts()
 * getProducstsFromWarehouse()
 * sellProducts
 *
 *
 */


export default class Store extends Buildgins {
    openedOrClosed: boolean = null;
    products: object = {};
    budget: number = 1000;
    storesWarehouse: any = null;
    staff: object[] = [];


    constructor(name: string, x: number, y: number) {
        super(name, x, y);
        this.needsPermission = true;
        this.openedOrClosed = true;
    }
    createWarehouse(x, y) {
        var warehouseName = this.name + '\'s warehouse'
        this.storesWarehouse = new Warehouse(warehouseName, x, y,this);
        this.storesWarehouse.owner = this;
        return this.storesWarehouse;
    }
    buyingProducts() { };
    getProductsFromWarehouse() { };
    sellProducts() { };
    givePermission(visitor) {

        if (this.checkStaff(this.staff, visitor)) {

            return true;

        } else {
            if (this.openedOrClosed && visitor._name != 'giorgi') {
                return true;
            } else {
                console.log('you can not come in');
                return false;
            }
        }

    }
    takestaff(newStaff) {
        if (this.checkStaff(this.staff, newStaff)) {
            console.log('you are already workin here')
        }else{
            this.staff.push(newStaff);
        }
    }
    checkStaff(staff, personInStaff) {
        if (staff.length > 0 && staff.map(personFromStaff => personFromStaff == personInStaff)) {
            return true;
        } else {
            return false;
        }

    }

}




