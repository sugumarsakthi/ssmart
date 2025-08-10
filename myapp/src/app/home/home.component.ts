import { Component } from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
   providers: [provideNativeDateAdapter()],
})
export class HomeComponent {

}
