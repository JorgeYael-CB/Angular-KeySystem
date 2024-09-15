import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../interfaces/api/dtos';

@Component({
  selector: 'app-key',
  standalone: true,
  imports: [],
  templateUrl: './key.component.html',
  styleUrl: './key.component.css'
})
export class KeyComponent implements OnInit {

  ngOnInit(): void {
    this.route.params.forEach( params => {
      this.getUser(params['id']);
    });
  }

  //DI
  route = inject(ActivatedRoute);

  // fields
  user?: IUser;


  //methdos
  getUser( userId?: string ){
    if( userId && userId.trim().length > 1 ){
      //TODO: obtener la informacion del usuario desde la base de datos.
    }
  }

}
