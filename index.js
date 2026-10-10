// Write your code here!

//function displayUser(userInfo){
	//const header = document.querySelector("#main")
     

    const userInfo = {
	username: "flatUser123",
	description: "Hi, welcome to my webpage! Just a new user of this website!",
	theme: "red",

    
}
  //return userInfo;
//}




function displayUser(userInfo){
	const header = document.querySelector("#main")
    header.textContent = userInfo.username + "'s Personal Webpage"
    header.className = userInfo.theme

    const description = document.createElement("p")
	const body = document.querySelector("body")
    description.textContent = userInfo.description
	description.className = userInfo.theme
    body.append(description)
    return userInfo
}

console.log(displayUser(userInfo))

