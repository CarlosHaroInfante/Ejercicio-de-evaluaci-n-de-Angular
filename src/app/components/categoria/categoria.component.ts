import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-categoria', 
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './categoria.component.html', 
  styleUrls: ['./categoria.component.css'] 
})
export class CategoriaComponent {

  // Definición de las categorias del proyecto
  categorias = ['Accion', 'Thriller', 'Terror', 'Comedia'];

  // Declaración de un evento de salida (Output) para comunicar la selección de una categoría al componente padre
  @Output() categoriaSeleccionada = new EventEmitter<string>();

  // Método que se llama cuando el usuario selecciona una categoría
  seleccionarCategoria(categoria: string) {
    // Manda la categoría seleccionada al componente padre
    this.categoriaSeleccionada.emit(categoria);
  }
}

