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
      numgame: [0, Validators.required],
      jugador: ['', Validators.required],
      //  Manos:this.fb.group(new Mano)
      Manos: new FormArray([
        // new FormControl('SF')
        this.fb.group({
          num: 1,
          jugada:2,
          resultado:10
        }),
        this.fb.group({
          num: 2,
          jugada:3,
          resultado:11
        })
      ])
    })
  }

  // submitted = false;

  // onSubmit() { this.submitted = true; }

  // public model=new Game(0,"0",0,0,0);

  ngOnInit() {
  }

  // newGame(){
  //   this.model=new Game(0,'',0,0,0)
  // }

}
