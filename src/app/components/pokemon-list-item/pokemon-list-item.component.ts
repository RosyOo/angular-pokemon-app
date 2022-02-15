import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from "src/app/models/pokemon.model"
import { User } from 'src/app/models/user.model';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {

  @Input()
  pokemon!: Pokemon;

  @Output()
  clicked: EventEmitter<Pokemon> = new EventEmitter();

  public sprite: string = "";
  pokemons: Pokemon[] = [];
  private pokeURL = environment.pokemonApi

  constructor(private userService: UserService, private pokemonService: PokemonService) {}


  onCatchPokemon(pokemon: Pokemon): void{
    /* TODO: fix and get localStorage user 
    const storedUser = localStorage.getItem("user");
    if(storedUser === "string"){
      this.userService.user = JSON.parse(storedUser)
    }
    this.pokemonService.catchPokemonToUser(storedUser, pokemon)
    */ 

    this.clicked.emit(this.pokemon)
    alert("You have caught "+this.pokemon.name+" to your collection");
  }

  ngOnInit(): void {
    this.sprite = this.pokeURL + this.pokemon.id + ".png"
  }

}


