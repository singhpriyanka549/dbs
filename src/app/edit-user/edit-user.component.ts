import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterValidations } from '../add-user/register.validations';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  register = this.reg.group({
    name: [null, Validators.required],
    email: [null, [Validators.required, Validators.email, RegisterValidations.shouldBeUnique]],
    mobile: [null, [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.required]],
    website: [null]
  })

  constructor(private addUserService: UserService, private reg: FormBuilder, private route: ActivatedRoute, private router: Router) {

  }
  get f() { return this.register.controls; }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('userid');
    this.addUserService.getUser(id).subscribe(data => {
      let tempData = data as any;
      this.register.patchValue({
        name: tempData.title,
        email: "test@email.com",
        mobile: "9999999999",
        website: "helloworld.com"
      });
    })
  }

  onSubmit() {
    let apiData = {
      "Name": this.register.value.name,
      "email": this.register.value.email,
      "mobile": this.register.value.mobile,
      "website": this.register.value.website,
    }
    let id = this.route.snapshot.paramMap.get('userid');
    this.addUserService.updateUser(apiData, id).subscribe(data => {
      this.router.navigate(['/ShowUser']);
    });
  }
}
