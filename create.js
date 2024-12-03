const   API_URL = 'https://674f038bbb559617b26da9f8.mockapi.io/Crud'
let myForm = document.forms["createForm"]

myForm.addEventListener('submit',async(e)=>{
    e.preventDefault()
    try {
        let data = {
            name: myForm.name.value,
            email:myForm.email.value,
            mobile:myForm.mobile.value,
            gender:myForm.gender.value,
            dob:myForm.dob.value,
            address:{
                addressLine:myForm.addressLine.value,
                city:myForm.city.value,
                state:myForm.state.value,
                zipcode:myForm.zipcode.value
            }
        }
        let res = await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        if(res.status===201)
        {
            window.location.href = './index.html'
        }
    } catch (error) {
        
    }
})