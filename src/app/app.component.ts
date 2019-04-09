import { Component } from '@angular/core';
import {Calculador} from './calculador';
import { UsersService} from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebasPracticas';

  //priubea basica
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    /*let calculador= new Calculador();
    let result = calculador.multiply(3,3);
    console.log(result===9);//test pased
    console.log(result !== 12); //test passed

    let result2= calculador.divide(6,2)
    console.log(result2===3);
    console.log(result2===3);

    let result3= calculador.divide(6,0);
    console.log(result3==null);
*/

  }
}
