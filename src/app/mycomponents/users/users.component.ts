import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  profile: any = {};
  repos: any[] = [];
  userList: any[] = [];

  loading = true;
  error: string | null = null;
  private subscriptions: Subscription[] = [];
  username: string = '';

  page = 0;
  since: number=0;  //page
  per_page: number=12 //per page records.

  
  
  

  constructor(private userService: UserService, private router: Router) {
    this.getList()
  }

  ngOnInit(): void {
    // this.findProfile();
    // this.getList();
    // this.updatePagination();
    // this.getList();
    this.findProfiles();
  }

  

  getUserProfile(): void {
    this.subscriptions.push(
      this.userService.getUsers().subscribe(
        (profile) => {
          this.profile = profile;
          this.loading = false;
          console.log(profile, "data");
        },
        (err) => {
          this.error = 'Failed to load profile';
          this.loading = false;
        }
      )
    );
  }

  getUserRepos(): void {
    this.subscriptions.push(
      this.userService.getProfileRepos().subscribe(
        (repos) => {
          this.repos = this.repos;
          this.loading = false;
          console.log(repos, "data");
        },
        (err) => {
          this.error = 'Failed to load repos';
          this.loading = false;
        }
      )
    );
  }

  findProfile(): void {
    this.loading = true;
    this.userService.updateProfile(this.username);
    this.getUserProfile();
    this.getUserRepos();
    this.loading = false;
  }

  // get Users list
  getList(): void {
    this.subscriptions.push(
      this.userService.getUserList().subscribe(
        (userList) => {
          this.userList = userList;
          this.loading = false;
          console.log(userList, "data");
        },
        (err) => {
          this.error = 'Failed to load repos';
          this.loading = false;
        }
      )
    );
  }

  getListUsers(): void {
    this.subscriptions.push(
      this.userService.getListUsers().subscribe(
        (userList: any) => {
          this.userList = userList.items;
          this.loading = false;
          console.log(userList, "data");
        },
        (err) => {
          this.error = 'Failed to load repos';
          this.loading = false;
        }
      )
    );
  }

  next() {
    this.loading = true;
    this.page = this.since++;
    console.log(this.page, "pageis");
    this.userService.updatePaginationData(this.page);
    this.getListUsers();
    this.loading = false;
  }

  previous() {
    this.loading = true;
    this.page = this.since--;
    console.log(this.page, "pageis");
    this.userService.updatePaginationData(this.page);
    this.getListUsers();
    this.loading = false;
  }

  updatePagination(){
    this.page=this.since;
    this.userService.updatePaginationData(this.page);
    this.getListUsers();

  }

  findProfiles() {
    // this.loading = true;
    this.userService.updateSearchRequest(this.username);
    this.loading = true;
    this.getListUsers();
    this.loading = false;
  }

  viewProfile(username: string) {
    this.username = username;
    this.findProfile();

  }

  // viewProfileDetails() {
  //   this.router.navigateByUrl(`/user/${this.username}`)
  // }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
