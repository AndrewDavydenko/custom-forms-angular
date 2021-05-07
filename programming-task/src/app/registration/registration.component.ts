import { FieldService } from './../services/field.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
})
export class RegistrationComponent implements OnInit {
  userFormData: any[] = [];

  constructor(private service: FieldService) { }

  ngOnInit(): void {
    this.service.get().subscribe((data: any[]) => {
      this.userFormData = data;
    });
  }
}


