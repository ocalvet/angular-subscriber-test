import { Component } from '@angular/core';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-subscriber-test';
  dog: any;
  constructor(private _dogs: DogsService) {
   this.getDog();
  }

  getDog() {
    this
      ._dogs
      .get()
      .subscribe(d => {
        console.log('Got a dog', d);
        this.dog = d;
      }, (error) => {
        console.log('ERROR', error);
      }, () => {
        console.log('Completed');
      });
  }
}
