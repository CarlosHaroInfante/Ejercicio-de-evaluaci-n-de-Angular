import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorService, Actor } from '../../services/actor.service';

@Component({
  selector: 'app-detalle-actores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-actores.component.html',
  styleUrl: './detalle-actores.component.css'
})
export class DetalleActoresComponent implements OnChanges {
  @Input() categoria: string = '';  // Recibe la categoría seleccionada
  actores: any[] = [];  // Array para almacenar los actores

  constructor(private actorService: ActorService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['categoria'] && this.categoria) {
      this.obtenerActoresPorCategoria(this.categoria);  // Llamar al servicio para obtener actores
    }
  }

  obtenerActoresPorCategoria(categoria: string) {
    this.actorService.getActoresPorCategoria(categoria).subscribe((actores) => {
      this.actores = actores;  // Asignar los actores filtrados
    });
  }
}
