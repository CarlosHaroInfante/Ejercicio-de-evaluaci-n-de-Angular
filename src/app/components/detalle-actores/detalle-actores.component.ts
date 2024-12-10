import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorService, Actor } from '../../services/actor.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NuevoActorComponent } from '../nuevo-actor/nuevo-actor.component';


@Component({
  selector: 'app-detalle-actores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-actores.component.html',
  styleUrl: './detalle-actores.component.css'
})
export class DetalleActoresComponent implements OnChanges {
  @Input() categoria: string = '';  // Recibe la categoría seleccionada
  actores: Actor[] = [];  // Array para almacenar los actores

  nuevoActor: Partial<Actor> = {
    nombreReal: '',
    personaje: '',
    peliculas: [],
    edad: 0,
    nacionalidad: '',
    categoria: this.categoria
  };

  constructor(
    private actorService: ActorService,
    private modalService: NgbModal // Inyecta NgbModal
  ) {}

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

  abrirFormularioAgregarActor() {
    const modalRef = this.modalService.open(NuevoActorComponent);
    modalRef.componentInstance.categoria = this.categoria;

    modalRef.result
      .then((nuevoActor) => {
        if (nuevoActor) {
          nuevoActor.categoria = this.categoria; // Asigna la categoría al nuevo actor
          this.actorService.agregarActor(nuevoActor).subscribe(() => {
            this.obtenerActoresPorCategoria(this.categoria);  // Refresca la lista de actores
          });
        }
      })
      .catch(() => {
        console.log("Modal cerrado sin agregar actor");
      });
  }
}
