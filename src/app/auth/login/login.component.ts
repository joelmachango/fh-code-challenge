import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../shared/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  logingin: Boolean;
  loginForm: FormGroup;
  errors: any[] = [];
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
    this.loginForm = this.fb.group({
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
    });
  }

  login() {
    this.logingin = true;
    this.auth.login(this.loginForm.value).subscribe(
      (res) => {
        const loginToken = res.token;
        this.auth.saveToken(loginToken);
        this.router.navigate(["/grants"]);

        let tokenInfo = this.auth.decodeToken(loginToken);
        localStorage.setItem("fh_info", JSON.stringify(tokenInfo));

        let expireDate = tokenInfo.exp;
        localStorage.setItem("fh_expire", expireDate);

        this.logingin = false;
      },
      (errorResponse) => {
        this.logingin = false;
        console.log(errorResponse.error.message);
        this.toastr.error(errorResponse.error.message, "Login Failed", {
          timeOut: 3000,
        });
      }
    );
  }
}
