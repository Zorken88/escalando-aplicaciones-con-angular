import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsResolverService implements Resolve<Groups[]> {

  constructor(
    private groupService: GroupService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<Groups[]> {
    return this.groupService.getGroups();
  }
}

interface Groups {
  id: string;
  value: string;
  active: boolean;
}
