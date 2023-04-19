import { Component } from '@angular/core';
import { FacturaService } from '../factura.service';
import { Factura } from '../model/facturas';

@Component({
	selector: 'app-facturas',
	templateUrl: './facturas.component.html',
	styleUrls: ['./facturas.component.css']
})
export class FacturasComponent {
	constructor(private facturaService: FacturaService) {
	}

	factura: Factura = new Factura;
	salidaFuncion: any;

	updateSalida(returnValue: unknown): void {
		this.salidaFuncion = returnValue;
	}

	crear(): void {
		this.facturaService.create(this.factura);
		this.factura = new Factura;
	}
	leer(): Factura | undefined {
		return this.facturaService.read(this.factura.idFactura);
	}
	actualizar(idFactura: number = this.factura.idFactura, factura: Factura = this.factura): void {
		this.facturaService.update(idFactura, factura);
		this.factura = new Factura;
	}
	borrar(factura: Factura = this.factura): void {
		this.facturaService.delete(factura.idFactura);
	}

	get facturas(): Factura[] {
		return this.facturaService.facturas;
	}
}
