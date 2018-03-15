import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/range';
import 'rxjs/add/operator/skipLast';
import 'rxjs/add/operator/skipWhile';

const button = document.querySelectorAll('button');

Observable.fromEvent(button[1], 'click')
  .throttleTime(1000)
  .map(event => event.clientX)
  .scan((count, clientX) => count + clientX, 0)
  .subscribe(count => console.log(count));

Observable.range(1, 5)
  .skipWhile(x => x < 3)
  .subscribe(x => console.log(x));
  