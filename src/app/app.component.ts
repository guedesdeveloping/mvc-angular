import { Component, VERSION } from '@angular/core';
import { user } from './model/user';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cl: user = {
    id: 201734,
    nome: 'Kaue Guedes',
    cpf: '538.993.***-19',
    plano: 'Blumed Santos',
    consultor: 'Fernando Honda',
  };

  mudarConsultor() {
    this.cl.consultor =
      this.cl.consultor === 'Fernando Honda'
        ? 'Joaquim Moraes'
        : 'Fernando Honda';
  }
}
