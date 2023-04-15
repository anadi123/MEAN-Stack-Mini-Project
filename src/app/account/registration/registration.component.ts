
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AccountserviceService} from '../accountservice.service';
import {Accountinfo} from '../accountinfo';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  //imports:[ReactiveFormsModule, FormsModule]

})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup ;
  datasaved = false;
  massage: string ;
  
  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
       Name: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    console.log("Entered Submit");
//     let userinfo = this.regForm.value;
// console.log(userinfo);
    // this.createuserAccount(userinfo);
    // this.regForm.reset();
  }
  createuserAccount(accinfo:Accountinfo) {
    this.accountservice.createaccount(accinfo).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "User Created";
       this.regForm.reset();
      }
    )
  }
}
