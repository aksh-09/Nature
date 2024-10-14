import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivatedGuardService implements CanDeactivate<CanComponentDeactivate>{

  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean> | Promise<boolean>{
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
