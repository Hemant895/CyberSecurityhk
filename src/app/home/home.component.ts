import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  title = ' First Angular project ';
  public imageUrl='/assets/security1.jpg';
  public image_Url='/assets/2.jpg';
  public imageUrl1='/assets/3.jpg';
  public imageUrl2='/assets/4.jpg';
  public imageUrl3='/assets/5.jpg';
  toggleOn:boolean=true;

}
