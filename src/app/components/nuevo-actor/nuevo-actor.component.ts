import { Component, EventEmitter, Output } from '@angular/core';
import { ActorService, Actor } from '../../services/actor.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo-actor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nuevo-actor.component.html',
  styleUrls: ['./nuevo-actor.component.css']
})
export class NuevoActorComponent {
  // Modelo del formulario
  nuevoActor: Partial<Actor> = {
    categoria: '',
    peliculas: [],
    personaje: '',
    nombreReal: '',
    edad: undefined,
    nacionalidad: '',
    fechaNacimiento: ''
  };

  // Evento para notificar al componente padre
  @Output() actorAñadido = new EventEmitter<Actor>();

  // Inyectamos el servicio
  constructor(private actorService: ActorService) {}

  // Método para enviar el actor
  agregarActor() {
    if (this.nuevoActor.categoria && this.nuevoActor.nombreReal) {
      this.actorService.agregarActor(this.nuevoActor).subscribe({
        next: (actor) => {
          // Emitimos el nuevo actor al padre
          this.actorAñadido.emit(actor);
          alert('¡Actor añadido con éxito!');
          // Reseteamos el formulario
          this.nuevoActor = {
            categoria: '',
            peliculas: [],
            personaje: '',
            nombreReal: '',
            edad: undefined,
            nacionalidad: '',
            fechaNacimiento: ''
          };
        },
        error: (err) => console.error('Error al añadir el actor', err)
      });
    } else {
      alert('Por favor, completa los campos obligatorios.');
    }
  }
}






