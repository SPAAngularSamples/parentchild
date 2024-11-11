import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
/**
 *
 */
@Input() id: number=0;
constructor( private route: ActivatedRoute) {
  
}

ngOnInit(): void {
  this.id = Number(this.route.snapshot.paramMap.get('id'));
}

}
