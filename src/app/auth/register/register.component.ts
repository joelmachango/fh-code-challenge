import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: any[] = [];
  notifyMessage: string = "";

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
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
    this.auth.register(this.registerForm.value).subscribe(
      () => {
        this.router.navigate(["/login", { registered: "success" }]);
        console.log("success");
      },
      (errorResponse) => {
        console.log(errorResponse.error.errors);
        this.errors = errorResponse.error.errors;
      }
    );
    console.log(this.registerForm.value);
  }
}
