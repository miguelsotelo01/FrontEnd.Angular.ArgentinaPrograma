import { Component, OnInit } from '@angular/core';
import { Persona } from './model/persona';
import { PersonaService } from './services/persona.service';
import{ HttpClient,   HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public personas:Persona[];
  constructor(private personaService: PersonaService) { }
  ngOnInit():void {

  }

}
