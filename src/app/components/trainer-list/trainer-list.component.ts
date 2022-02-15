import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  @Input()
  userPokemon: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
