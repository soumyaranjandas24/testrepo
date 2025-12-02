let userRole = "employee";
let accessDietaryService;

if(userRole === "employee"){
    console.log("Authorized to full access to \"Dietary Services\"");
}else if(userRole === "enrolled_member"){
    console.log("Authorized to access \"Dietary Services\" and one-on-one interaction with a dietician.");
}else if(userRole === "subscriber"){
    console.log("Authorized to partial access to \"Dietary Services\"");
}else {
    console.log("Need to enroll or at least subscribe first to avail this facility.");
}
