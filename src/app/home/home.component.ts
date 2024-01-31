import { Component } from '@angular/core';
import { FunctionServiceService } from '../service/function-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor(public serv : FunctionServiceService){
  // alert("Hi");
}
  logHello(): void{
    this.serv.logMessage();
   // window.alert('hello World');
  }
}
