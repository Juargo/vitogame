import { Component, OnInit } from '@angular/core';
import { Mano, Game } from '../game';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  gameForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.gameForm = this.fb.group({
      numgame: [1, Validators.required],
      jugador: ['Vito', Validators.required],
      Manos: new FormArray([
      //   // new FormControl('SF')
      //   this.fb.group({
      //     num: 1,
      //     jugada:2,
      //     resultado:10
      //   }),
      //   this.fb.group({
      //     num: 2,
      //     jugada:3,
      //     resultado:11
      //   })
       ])
    })
  }

  //metodo necesario para obtener los componentes del array del form y presentarlos en el for del formHtml
  get Manos(): FormArray {
    return this.gameForm.get('Manos') as FormArray;
  }

  // submitted = false;

  // onSubmit() { this.submitted = true; }

  // public model=new Game(0,"0",0,0,0);

  ngOnInit() {
    let manosArray :  Array<Mano> =[]
    // this.gameForm.reset()
    for (let index = 1; index <= 14; index++) {
      manosArray.push({mano:index,jugada:0,resultado:0})
    }
    const manosFGs = manosArray.map(manoss => this.fb.group(manoss))

    var manosArrayFrom = this.fb.array(manosFGs,Validators.required)

    this.gameForm.setControl('Manos',manosArrayFrom)
    
    console.log(this.gameForm)
  }

  // newGame(){
  //   this.model=new Game(0,'',0,0,0)
  // }

}
