import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'prop-detail',
  templateUrl: './prop-detail.component.html',
  styleUrls: ['./prop-detail.component.css']
})
export class PropDetailComponent implements OnInit {
  //variables
  id: number;
  private sub: any;
  propertyDetails;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // URL id populated
    });
    // Saved to variable Passbook Details from local storage
    this.propertyDetails = JSON.parse(localStorage.getItem('passDetailsSelected'));
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
