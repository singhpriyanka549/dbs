import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { RegisterValidations } from './register.validations';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  register = this.reg.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email, RegisterValidations.shouldBeUnique]],
    mobile: [null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.required]],
    website: [null]
  })

  constructor(private addUserService: UserService, private reg: FormBuilder, private router: Router) {

  }
  get f() { return this.register.controls; }

  ngOnInit(): void {
  }

  onSubmit() {
    let apiData = {
      "Name": this.register.value.name,
      "email": this.register.value.email,
      "mobile": this.register.value.mobile,
      "website": this.register.value.website,
    }
    this.addUserService.postUser(apiData).subscribe(data => {
      this.router.navigate(['/ShowUser']);
    });
  }

}
