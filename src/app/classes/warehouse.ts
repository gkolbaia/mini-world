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
    private _warehouseOwer: Store;


    constructor(name: string, x: number, y: number, store: Store) {
        super(name, x, y);
        this.needsPermission = true;
        this._warehouseOwer = store;
        this._warehouseOwer.storesWarehouse = this;
    }

    addProducts(whoIsAdding, product, amount, price) {
        if (whoIsAdding == this._warehouseOwer) {
            if (this._warehouseProducts[product]) {
                this._warehouseProducts[product]['amount'] += amount;
            } else {
                this._warehouseProducts[product] = {
                    'amount': amount,
                    'price': price
                }
            }
        } else {
            console.log('we can not take this product');
        }


    }
    givePermission(visitor) {
        if (this._warehouseOwer.checkStaff(this._warehouseOwer['staff'], visitor)) {
            return true;
        } else {
            return false;
        }
    }
    get ownerStore(): Store {
        return this._warehouseOwer;
    }
    get warehouseProducts() {
        return this._warehouseProducts;
    }
    giveProductsToStore(whoIsTaking, product, amount) {
        if (whoIsTaking == this._warehouseOwer) {
            if (this._warehouseProducts[product]) {
                if (this._warehouseProducts[product]['amount'] > amount) {
                    this._warehouseProducts[product]['amount'] -= amount;

                    return this._warehouseProducts[product] = {
                        'amount': amount,
                        'procie': this._warehouseProducts[product]['price']
                    }
                } else if (this._warehouseProducts[product]['amount'] == amount) {
                    var x = this._warehouseProducts[product];
                    delete this._warehouseProducts[product];
                    return x;
                } else {
                    console.log('we only have ' + this._warehouseProducts[product]['amount'] + ' ' + product + ', take it ');
                    var x = this._warehouseProducts[product];
                    delete this._warehouseProducts[product];
                    return x;
                }

            } else {
                console.log('we dont have ' + product)
            }
        } else {
            console.log('gerara here')
        }
    }
    getWarehouseProducts(whoIsInterested){
        if(whoIsInterested = this._warehouseOwer){
            return this._warehouseProducts;
        }else{
            console.log('gerara here');

        }
    }


}

