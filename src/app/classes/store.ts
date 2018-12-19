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
    private _products: object = {};
    private _budget: number = 1000;
    storesWarehouse: Warehouse = null;
    staff: object[] = [];


    constructor(name: string, x: number, y: number) {
        super(name, x, y);
        this.needsPermission = true;
        this.openedOrClosed = true;
    }

    deleteProductIfThereIsNoAmount(product) {
        if (this._products[product]) {
            if (this._products[product]['amount'] == 0) {
                delete this._products[product];

            }
        }
    }
    createWarehouse(x, y) {
        var warehouseName = this.name + '\'s warehouse'
        this.storesWarehouse = new Warehouse(warehouseName, x, y, this);

    }
    buyingProducts(product, amount, price) {
        if (amount * price <= this._budget) {
            this.storesWarehouse.addProducts(this, product, amount, price);
        } else {
            console.log('we can not afford that product');
        }
    };
    getProductsFromWarehouse(product, amount) {
        var x = this.storesWarehouse.giveProductsToStore(this, product, amount);
        if (x) {
            this._products[product] = x;
        }
    };
    get products() {
        return this._products;
    }
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
        } else {
            this.staff.push(newStaff);
        }
    }
    removeStaff(staffPerson) {
        for (var i = 0; i < this.staff.length; i++) {
            if (this.staff[i] == staffPerson) {
                this.staff.splice(i, 1);
            } else {
                console.log('this person is not working here');
            }
        }
    }
    checkStaff(staff, personInStaff) {
        if (staff.length > 0 && staff.map(personFromStaff => personFromStaff == personInStaff)) {
            return true;
        } else {
            return false;
        }

    }
    checkProduct(product) {
        if (this._products[product]) {
            return true;
        } else {
            if (this.storesWarehouse.getWarehouseProducts(this)[product]) {
                return true;
            }else {
                return false;
            }
        }
    }
    checkProductAmount(product, amount) {


    }
    sellProducts(whoIsBuing,product, amount) {


    };


}




