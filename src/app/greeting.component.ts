import { Component, Input } from '@angular/core';
@Component({
  selector: 'greetings',
  templateUrl: './greetings.component.html'
})
export class GreetingsComponent {
  @Input() name : string;
  constructor() {
    // this.name = 'Jingus';
  }

  sayMyName() {
        console.log('My name is', this.name)
  }

}
