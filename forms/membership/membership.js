let user_name = ""

let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

butSubmit.onclick=function(){
  user_name = inptName.value
  if (members.includes(user_name) == true) {
    lblMem.value = "They are a member"
  } else {
    lblMem.value = "Not a member, but your name has been added now"
    members.push(user_name)
  }
}