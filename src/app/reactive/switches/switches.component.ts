import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F', 
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset(this.persona)
  }

  guardar() {
    const formValue = {...this.miFormulario.value}
    delete formValue.condiciones;

    this.persona = formValue;
    console.log(this.persona);
  }
}
