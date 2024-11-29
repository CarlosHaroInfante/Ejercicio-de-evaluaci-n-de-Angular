import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {

  categorias = ['Accion', 'Thriller', 'Terror', 'Comedia'];

  @Output() categoriaSeleccionada = new EventEmitter<string>();

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada.emit(categoria);
  }
}
