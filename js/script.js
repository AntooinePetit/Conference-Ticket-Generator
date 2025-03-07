// Fonction pour récupérer l'image sur l'input file et gérer les conditions

function uploadImage(event){
   let files;

   if (event.dataTransfer) {
      files = event.dataTransfer.files;
   } else if (event.target && event.target.files) {
      files = event.target.files;
   }

   if (files && files.length > 0) {
      if (files.length > 1) {
         infoImage.innerHTML = `<img src="assets/images/icon-info.svg" alt="Icone d'information"> You can't upload multiple photos. Please upload a single photo`
         infoImage.classList.add('error-text')
         infoImage.classList.remove('info-image')
         return;
      }
      
      const file = files[0];

      if(file.size > 500000){
         infoImage.innerHTML = `<img src="assets/images/icon-info.svg" alt="Icone d'information"> File too large. Please upload a photo under 500KB.`
         infoImage.classList.add('error-text')
         infoImage.classList.remove('info-image')
         return
      }

      if (file.type.startsWith("image/png") || file.type.startsWith("image/jpeg") && file.size <= 500000) {
         const dataTransfer = new DataTransfer();
         dataTransfer.items.add(file);
         fileInput.files = dataTransfer.files;

         imageUrl = URL.createObjectURL(file);
         const avatar = document.querySelector('#upload-area label')
         avatar.innerHTML = `
            <img src="${imageUrl}" alt="Image téléchargée" id="uploaded-image">
            <div id="uploaded-image-div">
               <button id="remove-image">Remove image</button>
               <label for="avatar" id="change-image">Change image</label>
            </div
         `;
         uploadArea.classList.remove('hoverable')
         removeImage = document.querySelector('#remove-image')
         changeImage = document.querySelector('#change-image')
      }
     
   }
}

// Handling the input file, drag & drop, remove and change

const uploadArea = document.querySelector('#upload-area')
const fileInput = document.querySelector('#avatar')
let imageUrl = "";
const infoImage = document.querySelector('#info-image')
let removeImage;
let changeImage;

uploadArea.addEventListener('dragover', (e) => {
   e.preventDefault()
   uploadArea.classList.add('dragover')
})

uploadArea.addEventListener('dragleave', (e) => {
   e.preventDefault()
   uploadArea.classList.remove('dragover')
})

uploadArea.addEventListener("drop", e => {
   e.preventDefault();
   uploadArea.classList.remove("dragover");
   uploadImage(e)
});

fileInput.addEventListener('change', (e) => {
   uploadImage(e)
})

uploadArea.addEventListener('click', ()=> {
   if(imageUrl == ""){
      fileInput.click()
   }
})




// Modification du HTML pour générer le ticket à la validation du formulaire


const form = document.querySelector('form')

// Input file
const labelUpload = document.querySelector('#label-upload')
labelUpload.addEventListener('click', (e) => {
   e.preventDefault()
})

// Input Name + Error
const inputName = document.querySelector('#name')
const errorName = document.createElement('p')
errorName.classList.add('error-text')
inputName.after(errorName)

// Input Mail + Error
const inputEmail = document.querySelector('#email')
const errorEmail = document.createElement('p')
inputEmail.after(errorEmail)
errorEmail.classList.add('error-text')

// Input Github Username + Error
const inputGithub = document.querySelector('#github-username')
const errorGithub = document.createElement('p')
errorGithub.classList.add('error-text')
inputGithub.after(errorGithub)

inputGithub.addEventListener('focus', (e) => {
   if(inputGithub.value == ""){
      inputGithub.value = "@"
   }
})

form.addEventListener('submit', (e) => {
   e.preventDefault()
   const fullName = document.querySelector('#name').value
   const email = document.querySelector('#email').value
   const githubUsername = document.querySelector('#github-username').value

   if(imageUrl == ""){
      infoImage.classList.add('error-text')
      infoImage.classList.remove('info-image')
   }

   if(fullName == ""){
      inputName.classList.add('error-input')
      errorName.innerHTML = `<img src="assets/images/icon-info.svg" alt="Icone d'information">Please enter a valid name`
   } else {
      inputName.classList.remove('error-input')
      errorName.innerHTML = ""
   }


   if(email == ""){
      inputEmail.classList.add('error-input')
      errorEmail.innerHTML = `<img src="assets/images/icon-info.svg" alt="Icone d'information">Please enter a valid email adress`
   } else {
      inputEmail.classList.remove('error-input')
      errorEmail.innerHTML = ""
   }

   if(githubUsername == "" || !githubUsername.startsWith("@")){
      inputGithub.classList.add('error-input')
      errorGithub.innerHTML = `<img src="assets/images/icon-info.svg" alt="Icone d'information">Please enter a valid github username`
   } else {
      inputGithub.classList.remove('error-input')
      errorGithub.innerHTML = ""
   }

   if(fullName != "" && email != "" && githubUsername != "" && githubUsername.startsWith("@") && imageUrl != ""){
      const main = document.querySelector('main')
      const numeroTicket = Math.floor(Math.random()*99998+1)
      main.innerHTML = `
      <img src="assets/images/logo-full.svg" alt="Logo Coding Conf" id="logo">
      <div id="div-ticket" class="container-desktop">
         <h1>Congrats, <span class="user-info">${fullName}</span>! Your ticket is ready.</h1>
   
         <p id="ticket-email">We've emailed your ticket to <span class="user-info">${email}</span> and will send updates in the run up to the event.</p>
   
         <div id="ticket">
            <div>
            <div id="ticket-top">
               <img src="/assets/images/logo-mark.svg" alt="Logo de Coding Conf">
               <span>
                  <h2>Coding Conf</h2>
                  <p>Jan 31, 2025 / Austin, TX</p>
               </span>
            </div>
            
            <div id="ticket-bot">
               <img src="${imageUrl}" alt="Photo de l'utilisateur" id="profile-picture">
               <span>
                  <h3>${fullName}</h3>
                  <p><img src="/assets/images/icon-github.svg" alt="Icone github">${githubUsername}</p>
               </span>
            </div>
            </div>
            <p id="tag">#${numeroTicket}</p>
         </div>
   
      </div>
      <div class="attribution">
         Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
         Coded by <a href="https://github.com/AntooinePetit">Antoine Petit</a>.
      </div>
      `
   }
})