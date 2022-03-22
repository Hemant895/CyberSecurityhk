import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  public imageUrl='/assets/cyber.png';
  name:string="Cybersecurityhk.please follow us on instagram";


greet(): void {
 alert("welcome to "+this.name); 
};

  
}



