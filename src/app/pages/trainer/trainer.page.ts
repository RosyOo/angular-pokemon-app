import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.css']
})
export class TrainerPage implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  get userPokemonList(){
    return this.userService.user?.pokemon;
  }
  
  ngOnInit(): void {
  }

  onClickPokedex(){
    this.router.navigate(['pokedex'])
  }

  onClickLogout(){
    this.userService.logout();
  }

}
