document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const messageInput = document.getElementById("message");
  const firstNameError = document.getElementById("first-name-error");
  const lastNameError = document.getElementById("last-name-error");
  const commentList = document.getElementById("comment-list");


  form.addEventListener("submit", function (event){

    let isValid = true;

    // Vérification du prénom
    if (firstNameInput.value.trim() === "") {
      firstNameError.textContent = "Le prénom est obligatoire.";
      isValid = false;
    } else {
      firstNameError.textContent = "";
    }

    // Vérification du nom
    if (lastNameInput.value.trim() === "") {
      lastNameError.textContent = "Le nom est obligatoire.";
      isValid = false;
    } else {
      lastNameError.textContent = "";
    }

    // Vérification du commentaire
    if (messageInput.value.trim() === "") {
      document.getElementById("comment-error").textContent = "Le commentaire est obligatoire.";
      isValid = false;
    } else {
      document.getElementById("comment-error").textContent = "";
    }

    if (isValid) {
      // Créer un nouvel élément de commentaire
      const commentElement = document.createElement("div");
      commentElement.classList.add("flex", "space-x-4", "text-sm", "text-gray-500");

      const commentContent = `
        <div class="flex-1 py-10">
          <h3 class="font-medium text-gray-900">${firstNameInput.value} ${lastNameInput.value}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${messageInput.value}</p>
          </div>
        </div>
      `;

      commentElement.innerHTML = commentContent;

      // Ajouter le nouvel élément à la liste de commentaires
      commentList.appendChild(commentElement);

      // Réinitialiser les champs de formulaire
      firstNameInput.value = "";
      lastNameInput.value = "";
      messageInput.value = "";
    }
    debugger
/*
   if (!isValid) {
    //redirectTo('/');
    
    event.defaultPrevented(); // Empêcher l'envoi du formulaire si des erreurs existent.
   console.log('Votre commentaire est pris en compte');
  }*/
  });

});

/*
try{
  myVariable++;
} catch (error){
  console.log(error.name);
  //ReferenceError à examiner dans le code
  console.log(error.message);
  console.log(error.stack);
  Sentry.captureError(error);
};
*/


