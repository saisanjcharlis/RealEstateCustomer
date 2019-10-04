import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'prop-detail',
  templateUrl: './prop-detail.component.html',
  styleUrls: ['./prop-detail.component.css']
})
export class PropDetailComponent implements OnInit {
  id: number;
  private sub: any;
  propertyDetails;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
    });
    this.propertyDetails = JSON.parse(localStorage.getItem('passDetailsSelected'));
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
