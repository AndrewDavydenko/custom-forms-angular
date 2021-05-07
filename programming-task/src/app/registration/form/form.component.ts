import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FieldService } from 'src/app/services/field.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form.component.html',
  styleUrls: [`./form.component.sass`]
})
export class MyFormSubComponent implements OnInit {
  @Input() formConfig: any[] = [];
  form: FormGroup;
  userGroup: any = {};
  isHidePassword = true;

  constructor(private service: FieldService) { }

  ngOnInit(): void {
    for (const config of this.formConfig) {
      this.userGroup[config.name] = new FormControl(
        config.value || '',
        this.emailDomainValidator(config)
      );
    }
    this.form = new FormGroup(this.userGroup);
  }

  emailDomainValidator(control: any): object {
    return (controller: AbstractControl): any => {
      for (const validator of control.validations) {
        if (
          (validator.name === 'maxlength' && controller.value > validator.value) ||
          (validator.name === 'minlength' && controller.value < validator.value) ||
          (validator.name === 'regex' && !controller.value.match(validator.value))
        ) {
          return {
            error: validator.message,
          };
        }
      }
    };
  }

  toggleShowPassword(): void {
    this.isHidePassword = !this.isHidePassword;
  }

  onSubmit(): void {
    this.service.post(this.form.value);
  }
}
