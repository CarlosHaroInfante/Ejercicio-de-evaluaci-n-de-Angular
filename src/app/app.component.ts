import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { DetalleActoresComponent } from "./components/detalle-actores/detalle-actores.component";
import { CategoriaComponent } from "./components/categoria/categoria.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';  // Importa FormsModule




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetalleActoresComponent, CategoriaComponent, CommonModule, FormsModule, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categoriaSeleccionada: string = '';

  seleccionarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }

  mostrarFormulario = false;

  toggleFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }
}