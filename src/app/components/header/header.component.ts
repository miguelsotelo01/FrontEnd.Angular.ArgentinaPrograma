import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/services/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit():void {
  }


}
