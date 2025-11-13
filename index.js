function signup(userName) {
    let users = ["madhurisha", "pranav", "tanmayee", "aarthi"];

    if (users.includes(userName)) {
        return "User Already Regsistered, Please Login";
    } else {
        users.push(userName);
        return "Signup Sucessfull, Please Login";
    }
}

function login(userName, password) {
    let users = ["madhurisha", "pranav", "tanmayee", "aarthi"];

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } 
    else if (password !== "Emp@123") {
        return "Wrong Password....";
    } 
    else {
        return "Login Sucessfull...";
    }
}

// testing
console.log("Signup Tests:");
console.log(signup("madhurisha"));    // User Already Registered
console.log(signup("newUser"));       // Signup Successful

console.log("\nLogin Tests:");
console.log(login("madhurisha", "Emp@123")); //logined
console.log(login("randomUser", "Emp@123"));  // User Not Found
console.log(login("pranav", "wrongpass"));    // Wrong Password
