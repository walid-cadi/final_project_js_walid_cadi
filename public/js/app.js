let dataBase = [];
class User {
  constructor(fullName, email, age, password, confirmPassword) {
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
//let filter = /[!@#$%^&*()-+={}[]:;"'<>,.?/ | /\]/;
const signUp = () => {
  //full name
  let fullname = prompt("enter your full name");
  let nospaces = fullname.trim();
  let splitname = nospaces.split(" ");
  let upercase = splitname
    .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
    .join(" ");
  let lengthname = splitname.join("").length;
  if (lengthname < 5) {
    alert("sorry your name is fewer than 5 char");
  }
  //console.log(lengthname);
  if (/[^a-zA-Z ]/.test(upercase)) {
    alert("sorry thers a special char in your name");
  }
  //email
  //let email = prompt("enter your email");
  //age
  //let age = prompt("enter your age");
  //password
  //let password = prompt("enter your password");
  //confirmP
  //let confirmP = prompt("confirm your Password");
  //alert("you are sign Up");
  let user = new User(upercase);
  dataBase.push(user);
};
//signUp();

let user = new User();

const choosing = () => {
  let choose = prompt(
    "choose what you want and type it : SignUp or LogIn or Change Password or exict"
  );
  while (!choose || choose == "exict") {
    choose = prompt(
      "choose what you want and type it : SignUp or LogIn or Change Password or exict"
    );
  }
  if (choose == "SignUp") {
    signUp();
    choose = prompt(
      "choose what you want and type it : SignUp or LogIn or Change Password or exict"
    );
  } else if (choose == "LogIn") {
  } else if (choose == "ChangePassword") {
  } else if (choose == "exict") {
  }
};
choosing();

console.table(dataBase);

//let a = "walid cadi";
//if (/[^a-zA-Z ]/.test(a)) {
//  console.log("test");
//}
//let x = a.split(" ");
//let z = x.map((e) => e[0].toUpperCase() + e.slice(1));
//let f = z.join(" ");
