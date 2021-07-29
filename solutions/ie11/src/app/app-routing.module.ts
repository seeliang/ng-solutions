import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component'
import {MainComponent} from './main/main.component'
import { HitComponent} from './hit/hit.component'

import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class setRouteReuseStrategy implements RouteReuseStrategy {
  handlers: { [key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    this.handlers[route.routeConfig.path] = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }

    return this.handlers[route.routeConfig.path];
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {

    return future.routeConfig === curr.routeConfig;
  }
}


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
    //loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'hit',
    component: HitComponent
    //loadChildren: () => import('./hit/hit.module').then(m => m.MainModule)
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: setRouteReuseStrategy
    }
  ]
})
export class AppRoutingModule { }


