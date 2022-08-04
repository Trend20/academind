import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  username: string = "myname"

  constructor() { }

  ngOnInit(): void {
  }


  updateUsername(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  onButtonClick(){
    this.username = "";
  }

}
