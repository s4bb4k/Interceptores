import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private usersService: UsersService ) {

    this.usersService
      .getUsers()
      .subscribe(
        (res: any) => {
          console.log(res);
        }, (error) => {
          console.log('error in request');
        }
      );

  }

}
