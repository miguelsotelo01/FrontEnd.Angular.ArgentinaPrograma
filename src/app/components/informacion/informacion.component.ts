import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import {PersonaService} from './../../services/persona.service';
import{ HttpClient,   HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  public personas:Persona[];
  public editPersona: Persona;
  public deletePersona: Persona;
  cerrarModal:boolean=false;
  constructor(private personaService: PersonaService) { }
  ngOnInit():void {
    this.getPersonas();
  }
  public getPersonas(): void {
    this.personaService.getPersonas().subscribe(
      (response: Persona[]) => {
        this.personas = response;
        console.log(this.personas);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddPersona(addForm: NgForm): void {
    document.getElementById('add-persona-form').click();
    this.personaService.addPersona(addForm.value).subscribe(
      (response: Persona) => {
        console.log(response);
        this.getPersonas();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePersona(persona: Persona): void {
    this.personaService.updatePersona(persona).subscribe(
      (response: Persona) => {
        console.log(response);
        this.getPersonas();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    //window.location.reload();
  }

  public onDeletePersona(personaId: number): void {
    this.personaService.deletePersona(personaId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPersonas();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onOpenModal(persona: Persona, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPersonaModal');}
      if (mode === 'edit') {
        this.editPersona = persona;
        button.setAttribute('data-target', '#updatePersonaModal');}
        if (mode === 'delete') {
          this.deletePersona = persona;
          button.setAttribute('data-target', '#deletePersonaModal');}
          container.appendChild(button);
          button.click();}
}

