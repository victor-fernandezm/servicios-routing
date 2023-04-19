export class Factura {
    private _idCliente: number;
    public get idCliente(): number {
        return this._idCliente;
    }
    public set idCliente(value: number) {
        this._idCliente = value;
    }

    private _idFactura: number;
    public get idFactura(): number {
        return this._idFactura;
    }
    public set idFactura(value: number) {
        this._idFactura = value;
    }

    private _totalFactura: number;
    public get totalFactura(): number {
        return this._totalFactura;
    }
    public set totalFactura(value: number) {
        this._totalFactura = value;
    }

    private _iva: number;
    public get iva(): number {
        return this._iva;
    }
    public set iva(value: number) {
        this._iva = value;
    }

    constructor(idCliente: number = 0, idFactura: number = 0, totalFactura: number = 0, iva: number = 0) {
        this._idCliente = idCliente;
        this._idFactura = idFactura;
        this._totalFactura = totalFactura;
        this._iva = iva;
    }

    public equals(other: Factura): boolean {
        return this._idFactura == other._idFactura;
    }

    public toString(): string {
        return `${this.idCliente} ${this.idFactura} ${this.totalFactura} ${this.iva}`;
    }
}