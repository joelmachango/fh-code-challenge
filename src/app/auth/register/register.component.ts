import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registering: Boolean;
  registerForm: FormGroup;
  errors: any;
  notifyMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.fb.group({
      name: ["", Validators.required],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
          ),
        ],
      ],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    });
  }

  register() {
    this.registering = true;
    this.auth.register(this.registerForm.value).subscribe(
      () => {
        this.router.navigate(["/login", { registered: "success" }]);
        this.registering = false;
      },
      (errorResponse) => {
        this.errors = errorResponse.error.errors.email[0];
        console.log(this.errors);
        this.toastr.error(this.errors, "Registration Error!");
        this.registering = false;
      }
    );
  }
}
