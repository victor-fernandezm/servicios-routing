import { Component } from '@angular/core';
import { FacturaService } from '../factura.service';
import { Factura } from '../model/facturas';

@Component({
	selector: 'app-facturas',
	templateUrl: './facturas.component.html',
	styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {
	private _facturaService: FacturaService;
	constructor(facturaService: FacturaService) {
		this._facturaService = facturaService
	}

	factura: Factura = new Factura;
	salidaFuncion: any;

	updateSalida(returnValue: unknown): void {
		this.salidaFuncion = returnValue;
	}

	crear(): void {
		this._facturaService.create(this.factura);
		this.factura = new Factura;
	}
	leer(): Factura | undefined {
		return this._facturaService.read(this.factura.idFactura);
	}
	actualizar(idFactura: number = this.factura.idFactura, factura: Factura = this.factura): void {
		this._facturaService.update(idFactura, factura);
		this.factura = new Factura;
	}
	borrar(factura: Factura = this.factura): void {
		this._facturaService.delete(factura.idFactura);
	}

	get facturas(): Factura[] {
		return this._facturaService.facturas;
	}
}
