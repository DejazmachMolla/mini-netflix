import { OnInit, OnDestroy, Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mini-netflix';
  subscription: Subscription;
  constructor(
    private router: Router
  ) {
    }
  ngOnInit() {
    this.subscription=this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => window.scrollTo(0,0));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
