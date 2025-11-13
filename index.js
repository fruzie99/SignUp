function signup(userName) {
    let users = ["madhurisha", "pranav", "tanmayee", "aarthi"];

    if (users.includes(userName)) {
        return "User Already Regsistered, Please Login";
    } else {
        users.push(userName);
        return "Signup Sucessfull, Please Login";
    }
}

// testing
console.log(signup("madhuri"));   // User Already Regsistered
console.log(signup("newUser"));   // Signup Sucessfull
