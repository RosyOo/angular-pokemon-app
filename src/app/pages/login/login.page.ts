import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private userService: UserService) { }


  onLoginSubmit(form: NgForm): void {
    console.log(form.value.username);
    const { username } = form.value;
    this.userService.username = username;
    //Check if user exist
    this.userService.checkUser().subscribe((user) => {
      //if the username input exist in storage, navigate to pokedex
      if(user?.username === username) {
        sessionStorage.setItem("user", JSON.stringify(username));
        this.router.navigate(["pokedex"])
      }
      else if(user?.username !== username){
        //If there are no user with the username, create user, set user to sessionStorage and navigate to pokedex
          this.userService.createUser(username).subscribe(() => {
          sessionStorage.setItem("user", JSON.stringify(username));
          this.router.navigate(["pokedex"])
        })
      }
    })    
  } 
  
  ngOnInit(): void {
  }

}
