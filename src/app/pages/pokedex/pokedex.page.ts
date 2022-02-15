import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService} from 'src/app/services/user.service';
import { Router } from '@angular/router';
import {environment} from "src/environments/environment"

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.css']
})
export class PokedexPage implements OnInit {

  constructor(private pokemonService: PokemonService, private userService: UserService, private router: Router) { }

  private PokeURL = environment.pokemonApi

  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons
  }

  onClickLogout(){
    this.userService.logout();
  }
  
  onClickTrainer(){
    this.router.navigate(['trainer'])
  }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon();
  }

}
