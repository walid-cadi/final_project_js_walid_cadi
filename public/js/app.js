let dataBase = [];
class User {
  constructor(fullName, email, age, password) {
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.password = password;
  }
}
const validateFullName = (fullname) => {
  let nospacesname = fullname.trim();
  let splitname = nospacesname.split(" ");
  let upercase = splitname
    .map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase())
    .join(" ");
  let lengthname = splitname.join("").length;
  if (lengthname < 5) {
    alert("sorry your name is fewer than 5 char try again");
    return false;
  }
  if (/[^a-zA-Z ]/.test(upercase)) {
    alert("sorry thers a special char in your name try again");
    return false;
  }
  return upercase;
};
const validateEmail = (email) => {
  let nospacesemail = email.trim();
  let lowercaseemail = nospacesemail.slice(0).toLowerCase();
  let removespace = lowercaseemail.replace(/\s/g, "");
  if (removespace.length < 10) {
    alert("the email most be more than 10 char");
    return false
  }
  const at = removespace.split('@').length - 1;
  if (at !== 1) {
    alert("you need @ at your email")
    return false
  }
  return removespace
}
const validateAge = (age) => {
  let nospacesage = age.trim();
  if (!/^[0-9]+$/.test(nospacesage)) {
    alert("age is number try again");
    return false
  }
  if (!/^\d{1,2}$/.test(nospacesage) || nospacesage == 0) {
    alert("age most be 2 number try again");
    return false;
  }
  return nospacesage
}
const signUp = () => {
  //full name
  let fullname = prompt("enter your full name");
  while (!validateFullName(fullname)) {
    fullname = prompt("enter your full name");
  }
  fullname = validateFullName(fullname);
  //email
  let email = prompt("enter your email");
  while (!validateEmail(email)) {
    email = prompt("enter your email");
  }
  email = validateEmail(email)
  //age
  let age = prompt("enter your age");
  while (!validateAge(age)) {
    age = prompt("enter your age");
  }
  age = validateAge(age)


  //password
  //let password = prompt("enter your password");
  //confirmP
  //let confirmP = prompt("confirm your Password");
  //alert("you are sign Up");
  let user = new User(fullname,email,age);
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
