/*
<div id="div-ticket" class="container-desktop">
   <h1>Congrats, <span class="user-info">Full Name</span>! Your ticket is ready.</h1>

   <p id="ticket-email">We've emailed your ticket to <span class="user-info">Email@Address.com</span> and will send updates in the run up to the event.</p>

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
         <img src="/assets/images/image-avatar.jpg" alt="Photo de l'utilisateur" id="profile-picture">
         <span>
            <h3>Jonatant Kristof</h3>
            <p><img src="/assets/images/icon-github.svg" alt="Icone github">Identifiant github</p>
         </span>
      </div>
      </div>
      <p id="tag">#28401</p>
   </div>

</div>
<div class="attribution">
   Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
   Coded by <a href="#">Antoine Petit</a>.
</div>
      
*/

// Modification du HTML pour générer le ticket à la validation du formulaire

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
   e.preventDefault()
   const profilePicture = document.querySelector('#avatar').value
   const fullName = document.querySelector('#name').value
   const email = document.querySelector('#email').value
   const githubUsername = document.querySelector('#github-username').value
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
            <img src="/assets/images/image-avatar.jpg" alt="Photo de l'utilisateur" id="profile-picture">
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
      Coded by <a href="#">Antoine Petit</a>.
   </div>
   `
})