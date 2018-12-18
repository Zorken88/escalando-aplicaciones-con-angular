import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Groups {
  id: string;
  value: string;
  active: boolean;
}

@Injectable()
export class GroupService {
  groups = [];

  constructor(
    private http: HttpClient
  ) { }

  getGroups(): Observable<Groups[]> {
    return this.http.get<any>(environment.endpoint.groups)
    .pipe(
      map(response => response.list)
    );
  }

  setGroups(list) {
    this.groups = list;
  }

  getStoredGroups() {
    return this.groups;
  }
}
