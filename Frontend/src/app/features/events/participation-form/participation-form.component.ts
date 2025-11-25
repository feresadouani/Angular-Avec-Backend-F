import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrl: './participation-form.component.css'
})
export class ParticipationFormComponent {
  id!: number;
  price!: number;
  totalPrice!: number;
  constructor(private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.params['id'];
    this.price = this.activatedRouter.snapshot.params['prix'];
  }

  calculateTotalPrice(nbPlaces: number) {
    if (nbPlaces > 0) {
      this.totalPrice = this.price * nbPlaces;
    } else {
      this.totalPrice = 0;
    }

  }
}
