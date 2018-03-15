import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/sampleTime';

const button = document.querySelectorAll('button');

// let clicks = Observable.fromEvent(button[1], 'click');

// Observable
//   .interval(2000)
//   .sample(clicks)
//   .subscribe(x => console.log(x));


Observable.fromEvent(button[1], 'click')
  .sampleTime(2000)
  .subscribe(x => console.log(x));
