import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
     Username:string="";
     password: string="";

Send(){
  console.log([this.Username, this.password]);
  // console.log(this.designation);
  alert("Logged In Successfully!")
}

}


