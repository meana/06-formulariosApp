import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{
  /*
  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)
  })
  */
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //Could be better to use reset, because setValue force to add all form fields
    this.miFormulario.setValue({
      nombre: 'RTX 4080ti',
      precio: 1600,
      existencias: 10
    })
  }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors && 
      this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
