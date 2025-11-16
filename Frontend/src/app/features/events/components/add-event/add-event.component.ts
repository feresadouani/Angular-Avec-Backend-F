import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { futurDateValidator } from '../../../../shared/Validators/futur-date.validator';
import { ApiService } from '../../../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css',
})
export class AddEventComponent {
  eventForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    this.eventForm = new FormGroup({
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(30),
      ]),
      date: new FormControl('', [Validators.required, futurDateValidator(7)]),
      prix: new FormControl('', [
        Validators.required,
        Validators.pattern('^\\d+(\\.\\d+)?$'),
      ]),

      nbPlaces: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9][0-9]?$|^100$'),
      ]),
      lieu: new FormControl('', [Validators.required]),
      imageUrl: new FormControl('', [Validators.required]),
      domaines: new FormArray([new FormControl('')]),
    });
  }
  ngOnInit() {
    //this.eventForm = FormGroup([]);
  }

  get titre() {
    return this.eventForm.get('titre');
  }
  get description() {
    return this.eventForm.get('description');
  }

  get date() {
    return this.eventForm.get('date');
  }

  get prix() {
    return this.eventForm.get('prix');
  }
  get nbPlaces() {
    return this.eventForm.get('nbPlaces');
  }
  get lieu() {
    return this.eventForm.get('lieu');
  }
  get domaines() {
    return this.eventForm.get('domaines') as FormArray;
  }

  addDomain() {
    this.domaines.push(
      new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ])
    );
  }
  onSubmit() {
    const formValue = this.eventForm.value;
    console.log(formValue);
    formValue.organisateurId = 1;
    this.apiService.AjoutEvent(formValue).subscribe({
      next: (data) => {
        console.log('Event added successfully:', data)
      }
    });
    this.router.navigate(['/events']);
  }

}
