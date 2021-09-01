import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  userData: any;
  constructor(private getUserService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserService.getUsers().subscribe(data => {
      this.userData = data;
    })
  }

  redirectUser(id) {
    this.router.navigate(['/EditUser/' + id]);
  }

}
