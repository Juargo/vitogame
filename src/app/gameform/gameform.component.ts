import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { GameServiceService } from '../game-service.service'

@Component({
  selector: 'app-gameform',
  templateUrl: './gameform.component.html',
  styleUrls: ['./gameform.component.css']
})
export class GameformComponent implements OnInit {

  public players = ['Vito', 'Perro', 'Carlos', 'Seba', 'Sisi'];
  public datagameActual;

  gameForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private _gameService: GameServiceService) {
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
    console.log(this.gameForm);
    this._gameService.getGameActual()
    .subscribe(data => this.datagameActual = data)
  }

  onFormSubmit() {
    console.log("holi")
    if (this.gameForm.valid) {
      let user = this.gameForm.value;
      console.log(user);
      this.router.navigate(['/'])
      /* Any API call logic via services goes here */
    }
  }

}
