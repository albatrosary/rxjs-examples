import { Observable } from 'rxjs/Observable';
import { EventEmitter } from 'events';
import 'rxjs/add/observable/fromEvent';

console.log('Hello World!');

// DOMイベントの監視
const emitter = new EventEmitter();
const button = document.querySelector('button');

// ボタンクリック
Observable
  .fromEvent(button, 'click')
  .subscribe(function (e) {
    emitter.emit('click-data', e.clientX + ' ' + e.clientY);
    emitter.emit('click', 'ほげ');
  });
// ボタンへのへのマウスオーバー
Observable
  .fromEvent(button, 'mouseover')
  .subscribe(function (e) {
    emitter.emit('mouseover-data', e.clientX + ' ' + e.clientY);
  });

// データイベントの監視
Observable
  .fromEvent(emitter, 'click-data')
  .subscribe(function (x) {
    console.log('click:', x);
  });
Observable
  .fromEvent(emitter, 'mouseover-data')
  .subscribe(function (x) {
    console.log('mouseover:', x);
  });
Observable
  .fromEvent(emitter, 'click')
  .subscribe(function (x) {
    console.log('click:', x);
  });