import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'owl-carousel-tutorial';
  customOptions: OwlOptions = {
    loop: true, //Enables continuous looping of slides
    mouseDrag: true, //Enables dragging the carousel with the mouse for manual navigation.
    touchDrag: true, //Enables dragging the carousel with touch gestures on mobile devices.
    pullDrag: true, //Enables dragging the carousel by pulling on the sides of the viewport
    dots: true, //Enables pagination dots for navigating to specific slides
    navSpeed: 700, //Sets the animation speed for navigation transitions to 700 milliseconds
    navText: ['Previous', 'Next'], //Replaces default navigation button text with "Previous" and "Next"
    responsive: {
      0: {
        items: 1, //Shows one slide item on screens up to 400px wide
      },
      400: {
        items: 1, //Shows one slide item on screens between 400px and 740px wide.
      },
      740: {
        items: 1, //Shows one slide item on screens between 740px and 940px wide.
      },
      940: {
        items: 2, //Shows two slide items on screens 940px wide and above
      },
    },
    nav: true, //Enables navigation buttons for moving between slides
  };
}
