import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStatus = 'LoggedOut';
  loginStatusSignUp = false;
  loginNew = 'true';
  // Sign In succesfully (Status = loggedInProfile)
  // Sign Up succesfully (Status = loggedInProfile)
  // Welcome Page for UnSigned Users succesfully (Status = ViewOnlyProjects)
  constructor() { }
}
