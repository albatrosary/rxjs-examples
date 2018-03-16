import {
  Observable,
  Observer,
  Scheduler,
  Subscriber,
  Subject
} from 'rxjs';

export function checkDoubleClick(
  observe,
  subscribe,
  scheduler) {

  observe
    .buffer(observe.throttleTime(250, scheduler))
    .map((x) => x.length)
    .filter((n) => n >= 2)
    .subscribe(subscribe);
}

export function dragAndDropObserve(
  mouseUpObserve,
  mouseDownObserve,
  mouseMoveObserve,
  beforeMouseDown,
  subscribeMouseUp,
  subscribe,
  scheduler
) {

  var source = mouseDownObserve
    .do(() => beforeMouseDown())
    .flatMap((mdEvent) =>
      mouseMoveObserve
        .map((mmEvent) => mmEvent)
        .takeUntil(mouseUpObserve))

  mouseUpObserve.subscribe(subscribeMouseUp);
  source.subscribe(subscribe);
}

/**
 * observer examples
 */
export class SampleObservable {
  constructor(obs) {
    this.fetchObserve = obs;
  }
}

/**
 * subject examples
 */
export class SampleSubject {
  constructor() {
    this.fetchSubject = new Subject();
  }
}
