console.log(firebase)
var databse=firebase.database().ref('usermessages')
function chat(){
    var geting_message=document.getElementById('gettinginput') 
    var database=firebase.database().ref('usermessages')
    var key=database.push().key
    var li_updated={
        a:geting_message.value,
        key:key
    }
database.child(key).set(li_updated)
// console.log(li_updated)

}
var paravalue=firebase.database().ref('usermessages').on('child_added',function(data){
    var table_list=document.getElementById("table")
    var li_make=document.createElement('li')
    li_make.setAttribute('class','box')
    var pra=document.createElement('p')
    pra.setAttribute('class','message')
    var para_text=document.createTextNode(data.val().a)
    pra.appendChild(para_text)
    li_make.appendChild(pra)
    table_list.appendChild(li_make)
    console.log(data.val().a)
})