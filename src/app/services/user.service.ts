import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, tap } from 'rxjs';
import { User} from '../models/user.model';
import { Router } from '@angular/router';

const userURL = environment.userApi;
const apiKey = environment.apiKey;
const USER_KEY = "user";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient, private router: Router) {
    const storedUser: string = sessionStorage.getItem(USER_KEY) ?? "[]";
    if(storedUser){
      const json = JSON.parse(storedUser) as User;
      this._user = json;
    }
    
  }
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    });
  }

  private _user? : User | undefined;
  private _username: string = "";

  get username(): string {
    return this._username;
  }
  get user(): User | undefined {
    return this._user;
  }
  set username(username: string) {
    sessionStorage.setItem(USER_KEY, username);
    this._username = username;
  }
  set user(user: User | undefined) {
    this._user = user;
  }


  //check if user exists
  public checkUser(): Observable<User | undefined> {
    return this.http.get<User[]>(`${userURL}?username=${this.username}`).pipe(map((response: User[]) => response.pop()))
  }

  //create a user
  public createUser(username: string): Observable<User> {
    const user = {
      username,
      pokemon: [],
    };
    const headers = this.createHeaders();
    return this.http.post<User>(userURL, user, {headers})
  }

  public logout(){
    sessionStorage.clear();
    //localStorage.clear();
    this.router.navigate([""]);
  }

  //Login user, create if not there, not working
  //Do a check on login page
  /*
  public loginUser(username: string) {
    return this.checkUser(username).pipe(
      switchMap((user: User | undefined) => {
        if(user === undefined){
          return this.createUser(username);
        }
        return of(user);
      })
    )
  }*/
}
