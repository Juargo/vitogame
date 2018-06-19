import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'


@Component({
  selector: 'app-gameform',
  templateUrl: './gameform.component.html',
  styleUrls: ['./gameform.component.css']
})
export class GameformComponent implements OnInit {

  public players = ['Vito', 'Perro', 'Carlos', 'Seba', 'Sisi'];

  gameForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.gameForm = this.fb.group({
      Games: this.fb.array([])
    })


    let plyrctrl = <FormArray>this.gameForm.controls.Games;

    this.players.forEach(element => {
      let gameformarray = this.fb.array([]);
      for (let index = 1; index <= 14; index++) {
        gameformarray.push(this.fb.group({
          NumMano: [index, [Validators.required, Validators.pattern("^[0-9]*$")]],
          Jugada: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
          Resultado: [0, [Validators.required, Validators.pattern("^[0-9]*$")]]
        }));
      }
      plyrctrl.push(this.fb.group({
        Jugador: element,
        Manos: gameformarray
      }))
    });


  }

  get Games(): FormArray {
    return this.gameForm.get('Games') as FormArray;
  }
  ngOnInit() {
    console.log(this.gameForm)
  }

}
