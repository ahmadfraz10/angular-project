import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: any[] = [];
  loading = true;
  error: string | null = null;
  private subscription: Subscription;

  imgLink = 'https://bit.ly/3QYGWVR';

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.subscription = this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.loading = false;

    }, (err) => {
      this.error = 'failed to load users';
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
