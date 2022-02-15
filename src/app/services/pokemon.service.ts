import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon, PokemonResponse } from '../models/pokemon.model';
import { environment } from 'src/environments/environment';
import { catchError, map, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.service';

const pokemonURL = environment.pokemonApi;
const userURL = environment.userApi;
const apiKey = environment.apiKey;
const USER_KEY = "pokemon-user";

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient, private userService: UserService) { }

  private _pokemons: Pokemon[] = [] //JSON.parse(sessionStorage.getItem('pokemon') || '');

  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
    });
  }

  /*get user(): User {
    let result = undefined;
    const storage = sessionStorage.getItem(USER_KEY ?? "{}")
    if(storage !== null){
      result = JSON.parse(storage);
    }
    return result;
  }*/
  get user(): User | undefined{
    return this.userService.user
  }

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  //fetch pokemon from api 
  //TODO: get the id of the pokemon o_O
  //TRY: map the response.results???
  getAllPokemon(){
    this.http.get<PokemonResponse>(pokemonURL)
    .pipe(
      map((response: PokemonResponse) =>{
        return response.results;
      }
      //map
      ),
    )
    .subscribe({
      next: (pokemon: Pokemon[]) => {
        this._pokemons = pokemon;
        sessionStorage.setItem('pokemon', JSON.stringify(this._pokemons));
      },
    }), catchError((error) => { throw error.error.error})
  }

  //catch pokemon and add to user
  //...pipe tap? subscribe?
  catchPokemonToUser(pokemon: string, user: User): Observable<User | undefined> {
    const body = JSON.stringify({pokemon: [...user.pokemon, pokemon]})
    const headers = this.createHeaders();
    return this.http.patch<User>(`${userURL}/${user.id}`, body, {headers})
  }

}
