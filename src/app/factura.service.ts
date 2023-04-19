import { Injectable } from '@angular/core';
import { Factura } from './model/facturas';

@Injectable({
	providedIn: 'root',
})
export class FacturaService {
	private _facturas: Factura[] = [];
	
	create(factura: Factura): void {
		this._facturas.push(factura);
	}

	read(idFactura: number): Factura | undefined {
		return this._facturas.find(v => v.idFactura == idFactura);
	}

	update(idFactura: number, factura: Factura): void {
		let fac = this._facturas.find(v => v.idFactura == idFactura);
		if(fac != undefined) {
			fac.idCliente = factura.idCliente;
			fac.totalFactura = factura.totalFactura;
			fac.iva = factura.iva;
		}
	}

	delete(idFactura: number): void {
		let idx: number = this._facturas.findIndex(v => v.idFactura == idFactura);
		if(idx != -1)
			this._facturas.splice(idx, 1);
	}

	public get facturas(): Factura[] {
		return this._facturas;
	}
}
