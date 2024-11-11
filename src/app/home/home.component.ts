import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Documents: Document[] = [
    { id: 12, name: 'Dr. Nice' },
    { id: 13, name: 'Bombasto' }
  ];
}

export interface Document {
  id: number;
  name: string;
}
