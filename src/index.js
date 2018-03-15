import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';

const button = document.querySelectorAll('button');

let i=0;
Observable.fromEvent(button[1], 'click')
  .map(x => (i++)*2)
  .scan((acc, one) => acc + one, 1)
  .subscribe(count => console.log(`Clicked ${count} times`));
