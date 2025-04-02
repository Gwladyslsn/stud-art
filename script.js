
// On attend que la page soit chargée
window.onload = function() {
    // On récupère le formulaire
    let formulaire = document.getElementById('contactForm');

    // On récupère les champs
    let nom = document.getElementById('name');
    let email = document.getElementById('email');
    let sujet = document.getElementById('subject');
    let message = document.getElementById('message');
    let feedback = document.getElementById('formFeedback');

    // Quand on envoie le formulaire
    formulaire.onsubmit = function(event) {
        event.preventDefault(); // On empêche l'envoi du formulaire

        // On vérifie si les champs sont vides
        if (nom.value === '') {
            nom.style.border = '2px solid red';
        } else {
            nom.style.border = '2px solid green';
        }

        if (email.value === '') {
            email.style.border = '2px solid red';
        } else {
            email.style.border = '2px solid green';
        }

        if (sujet.value === '') {
            sujet.style.border = '2px solid red';
        } else {
            sujet.style.border = '2px solid green';
        }

        if (message.value === '') {
            message.style.border = '2px solid red';
        } else {
            message.style.border = '2px solid green';
        }

        // Si tous les champs sont remplis
        if (nom.value !== '' && email.value !== '' && sujet.value !== '' && message.value !== '') {
            feedback.innerHTML = '<div class="alert alert-success">Formulaire envoyé avec succès !</div>';
            formulaire.reset(); // On vide le formulaire
        } else {
            feedback.innerHTML = '<div class="alert alert-danger">Veuillez remplir tous les champs.</div>';
        }
    }
}



