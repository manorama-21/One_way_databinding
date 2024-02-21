import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { validateHeaderName } from 'node:http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'one_w_databinding';
  uname='manu';
  ucolor="red";
  ubg="yellow";
  apply='a';
  but(val:any){
    // alert('hello')
    // console.log('hello')
    this.uname=val
    console.log(val)
  }
}
