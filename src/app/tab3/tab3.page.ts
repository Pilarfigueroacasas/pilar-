import { Component } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public cartService: CartService) { }

  crearMensaje() {
    let parteProductos = "";
    this.cartService.carrito.forEach(productoCarrito => {
      const mensajeProducto = `-$productoCarrito.producto.nombre- ${productoCarrito.cantidad} `;
       parteProductos = parteProductos + mensajeProducto;
       })
     const primeraparte = "https://api.whatsapp.com/send/?phone=3413049280&text&type=phone_number&app_absent=0";
    const segundaparte = `Hola, quiero hacer un pedido:
          ${ parteProductos }

    Mis datos:
      -nombre: NOMBRE
      - Direccion: DIRECCION
      Notas:
      `;
    const mensaje = primeraparte+segundaparte;
    console.log(
      mensaje,
      this.cartService.carrito[0].producto,
      this.cartService.carrito[0].cantidad,
      // window.open(this.crearMensaje)

      )

  }

}
