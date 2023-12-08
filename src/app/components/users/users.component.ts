import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import type  { User} from './users.types'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:User[]= []
 constructor( private userservice:UsersService){ }

 ngOnInit() {
   this.userservice.getUsers().subscribe((res:User[]) => { this.users=res   })
 }

}
