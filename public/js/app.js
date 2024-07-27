// dataBase
let dataBase = [
  {
    fullName: "admin",
    email: "admin@gmail.com",
    age: "25",
    password: "12345",
    balance: 2500,
  },
];
//class of user
class User {
  constructor(fullName, email, age, password) {
    this.fullName = fullName;
    this.email = email;
    this.age = age;
    this.password = password;
    this.balance = 2500;
  }
}
// validation
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
    return false;
  }
  const at = removespace.split("@").length - 1;
  if (at !== 1) {
    alert("you need @ at your email");
    return false;
  }
  if (dataBase.find((el) => el.email == email)) {
    alert("the email has already taken");
    return false;
  }
  return removespace;
};
const validateAge = (age) => {
  let nospacesage = age.trim();
  if (!/^[0-9]+$/.test(nospacesage)) {
    alert("age is number try again");
    return false;
  }
  if (!/^\d{1,2}$/.test(nospacesage) || nospacesage == 0) {
    alert("age most be 2 number try again");
    return false;
  }
  return nospacesage;
};
const validatePass = (password) => {
  let nospacepass = password.trim();
  let removespace = nospacepass.replace(/\s/g, "");
  const regex = /[!@#\-+*\/]/;
  if (!regex.test(removespace)) {
    alert("password most have one or more special char");
    return false;
  }
  if (removespace.length < 7) {
    alert("password is less than 7");
    return false;
  }
  return removespace;
};
// sign up
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
  email = validateEmail(email);
  //age
  let age = prompt("enter your age");
  while (!validateAge(age)) {
    age = prompt("enter your age");
  }
  age = validateAge(age);
  //password
  let password = prompt("enter your password");
  while (!validatePass(password)) {
    password = prompt("enter your password");
  }
  password = validatePass(password);
  //confirmP
  let confirmP = prompt("confirm your Password");
  confirmP = confirmP.trim();
  confirmP = confirmP.replace(/\s/g, "");
  while (confirmP != password) {
    confirmP = prompt("password not match try again");
    if (confirmP != password) {
      return;
    }
  }
  alert("you are sign Up");
  let user = new User(fullname, email, age, password);
  dataBase.push(user);
};
// withdraw money
const withdrawMoney = (user) => {
  let getmoney = prompt("how much money do you want");
  while (getmoney > user.balance) {
    alert("sorry you dont have this much money");
    getmoney = prompt("how much money do you want");
  }
  if (getmoney <= user.balance) {
    user.balance -= getmoney;
  }
};
// deposit money
const depositMoney = (user) => {
  let putmoney = parseInt(prompt("how much money do you want to put"));
  while (putmoney > 1000) {
    alert("you can put money only less than 1000");
    putmoney = parseInt(prompt("how much money do you want to put"));
  }
  if (putmoney <= 1000) {
    user.balance += putmoney;
  }
};
// take a loan
//not complet
const takeAloan = (user) => {
  let x = (user.balance * 20) / 100;
  let loan = prompt("how much want to take the loan");
  while (loan > x) {
    loan = prompt("you can take loan of 20% of your acount balance");
  }
  user.balance += loan
};
// invest
const invest = (user) => {
}
// bank acount
const bankAcount = (user) => {
  alert(
    `walcome ${user.fullName} to your bank acount your balnece is ${user.balance}$`
  );
  let choose = prompt(
    "choose what you want and type it : Logout or Withdraw money or Deposit money or Take a loan or Invest"
  );
  while (!choose) {
    choose = prompt(
      "choose what you want and type it : Logout or Withdraw money or Deposit money or Take a loan or Invest"
    );
  }
  if (choose.toLowerCase() == "logout") {
    choosing();
  } else if (choose.toLowerCase() == "withdraw money") {
    withdrawMoney(user);
  } else if (choose.toLowerCase() == "deposit money") {
    depositMoney(user);
  } else if (choose.toLowerCase() == "take a loan") {
    takeAloan(user);
  }
   else if (choose.toLowerCase() == "invest") {
     invest(user);
   }
};
// log in
const logIn = () => {
  let verifyemail = prompt("enter your email to logIn");
  let findemail = dataBase.find((el) => el.email == verifyemail);
  if (findemail) {
    let verifypass = prompt("enter your password to logIn");
    if (dataBase.find((el) => el.password == verifypass)) {
      alert("now you log in");
      bankAcount(findemail);
    } else {
      alert("password are wrong");
    }
  } else {
    alert("the email are wrong");
  }
};
// change password
const changePassword = () => {
  let verifyemail = prompt("enter your email to change password");
  let findemail = dataBase.find((el) => el.email == verifyemail);
  if (findemail) {
    let newPass = prompt("enter the new password");
    findemail.password = newPass;
  } else {
    alert("email are wrong");
  }
};
// main prompt
const choosing = () => {
  let choose = prompt(
    "choose what you want and type it : SignUp or LogIn or Change Password or exict"
  );
  //while (!choose || choose == "exict") {
  //  choose = prompt(
  //    "choose what you want and type it : SignUp or LogIn or Change Password or exict"
  //  );
  //}
  if (choose.toLowerCase() == "signup") {
    signUp();
  } else if (choose.toLowerCase() == "login") {
    logIn();
  } else if (choose.toLowerCase() == "change password") {
    changePassword();
  }
};
choosing();

console.table(dataBase);
