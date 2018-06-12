import { Component, OnInit } from '@angular/core';
import { Mano, Game } from '../game';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  gameForm: FormGroup;
  gameTest: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  createForm() {
    this.gameTest = this.fb.group({
      Game: this.fb.array([
        this.fb.group({
          Jugador: 'Vito',
          Manos:this.fb.array([
            this.fb.group({
              NumMano: 1,
              Jugada: 2,
              Resultado:3
            }),
            this.fb.group({
              NumMano: 2,
              Jugada: 5,
              Resultado:12
            })
          ])
        }),
        this.fb.group({
          Jugador: 'Perro',
          Manos:this.fb.array([
            this.fb.group({
              NumMano: 1,
              Jugada: 4,
              Resultado:12
            }),
            this.fb.group({
              NumMano: 2,
              Jugada: 5,
              Resultado:9
            })
          ])
        })
      ]) 
    })


    this.gameForm = this.fb.group({
      numgame: [1, Validators.required],
      jugador: ['Vito', Validators.required],
      Manos: this.fb.array([])
      // Manos: new FormArray([
      // //   // new FormControl('SF')
      // //   this.fb.group({
      // //     num: 1,
      // //     jugada:2,
      // //     resultado:10
      // //   }),
      // //   this.fb.group({
      // //     num: 2,
      // //     jugada:3,
      // //     resultado:11
      // //   })
      //  ])
    })

    let ctrl = <FormArray>this.gameForm.controls.Manos;

    for (let index = 1; index <=14; index++) {
      ctrl.push(this.fb.group({
        mano: [index,[Validators.required,Validators.pattern("^[0-9]*$")]],
        jugada: [0,[Validators.required,Validators.pattern("^[0-9]*$")]],
        resultado:[0,[Validators.required,Validators.pattern("^[0-9]*$")]]
      }));
    }

  }

  //metodo necesario para obtener los componentes del array del form y presentarlos en el for del formHtml
  // get Manos(): FormArray {
  //   return this.gameForm.get('Manos') as FormArray;
  // }

  get Manos(): FormArray {
    return this.gameTest.controls[0].get('Manos') as FormArray;
  }
  
  get Game(): FormArray {
    return this.gameTest.get('Game') as FormArray;
  }

  // submitted = false;

  // onSubmit() { this.submitted = true; }

  // public model=new Game(0,"0",0,0,0);

  ngOnInit() {
    // let manosArray :  Array<Mano> =[]
    // // this.gameForm.reset()
    // for (let index = 1; index <= 14; index++) {
    //   manosArray.push({mano:index,jugada:0,resultado:0})
    // }
    // const manosFGs = manosArray.map(manoss => this.fb.group(manoss))
    
    // var manosArrayFrom = this.fb.array(manosFGs)

    // this.gameForm.setControl('Manos',manosArrayFrom)
    
    console.log(this.gameForm)
    console.log(this.gameTest)
  }

  // newGame(){
  //   this.model=new Game(0,'',0,0,0)
  // }

}
