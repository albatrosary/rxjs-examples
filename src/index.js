import { Observable } from 'rxjs/Observable';
import { EventEmitter } from 'events';
import 'rxjs/add/observable/fromEvent';

console.log('Hello World!');

// DOMイベントの監視
const emitter = new EventEmitter();
const button = document.querySelector('button');
const source = Observable.fromEvent(button, 'click');
source.subscribe(function (e) {
  emitter.emit('data', e.clientX + ' ' + e.clientY);
});

// データイベントの監視
const sources = Observable.fromEvent(emitter, 'data');
sources.subscribe(function (x) {
  console.log('data:', x);
});
