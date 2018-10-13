import { Directive, OnInit, ElementRef, Input, Output, EventEmitter, Host } from '@angular/core';
import { Content } from '@ionic/angular';
import { fromEvent, merge } from 'rxjs';
import { filter, map, skipWhile, takeUntil, last } from 'rxjs/operators';



@Directive({
  selector: '[fivPull]'
})
export class PullDirective implements OnInit {

  @Input() minPullHeight = 112;
  @Input() maxPullHeight = 168;
  @Input() enabled = true;

  @Output() fivRefresh = new EventEmitter<any>();
  @Output() fivCancel = new EventEmitter<any>();
  @Output() fivPull = new EventEmitter<number>();

  scrollY: HTMLElement;

  constructor(private element: ElementRef, @Host() private content: Content) {
  }

  ngOnInit(): void {

    this.content.scrollEvents = true;
    this.content.getScrollElement().then(s => {
      this.scrollY = s; // needed for scrollTop
      this.setupPanListener();
    });


  }

  private setupPanListener() {
    const touchstart$ = fromEvent(this.element.nativeElement, 'touchstart');
    const touchmove$ = fromEvent(this.element.nativeElement, 'touchmove');
    const touchend$ = fromEvent(this.element.nativeElement, 'touchend');
    const touchcancel$ = fromEvent(this.element.nativeElement, 'touchcancel');
    const end$ = merge(touchend$, touchcancel$);

    const dragAtTop = touchstart$
      .pipe(
        filter(e => this.scrollY.scrollTop === 0 && this.enabled)
      );

    const dragTopDown = dragAtTop
      .pipe(
        map((start: any) => {
          const startY = start.touches[0].pageY;
          return touchmove$
            .pipe(
              map((move: any) => {
                const currentY = move.touches[0].pageY;
                return {
                  startEvent: start,
                  moveEvent: move,
                  startY: startY,
                  currentY: currentY,
                  offset: currentY - startY
                };
              }),
              skipWhile(drag => drag.offset < 0),
              takeUntil(end$)
            );
        }));


    dragTopDown.forEach(drags => {
      drags.forEach(drag => {
        drag.moveEvent.preventDefault();
        const offset = drag.offset / 2;
        if (offset < 0 || offset > this.maxPullHeight) {
          return;
        }
        if (offset <= this.maxPullHeight) {

        }
        console.log('progress', offset / this.maxPullHeight);
        this.fivPull.emit(offset / this.maxPullHeight);
      });

      drags
        .pipe(
          last()
        )
        .subscribe(drag => {
          const offset = drag.offset / 2;
          const refresh = offset >= this.minPullHeight;
          if (refresh) {
            console.log('refresh', refresh, offset);
            this.fivRefresh.emit();
          } else {
            console.log('no refresh', refresh, offset);
            this.fivCancel.emit();
          }
        });
    });
  }
}
