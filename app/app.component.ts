import { Component } from "@angular/core"

@Component({

  selector: 'ng-revision',
  templateUrl : `app/app.component.html`,
  styleUrls: ['app/app.component.css']

})

export class AppComponent {

/*****************************************************************************
 * EXERCICE 1 / Propriétés
 ***************************************************************************** */
alert: string = "Félicitation vous avez réussi !";
titreAlert: string = "Avez-vous réussi !?";
messageAlert: string = "Si vous avez réussi, le message s'affichera bien dans l'alerte verte, n'attendez plus, cliquez sur le bouton ci-dessous pour voir le résultat";
clicResult: string = "Cliquez sur ce message pour voir le résultat";
resultatAlert: string = "";
/*****************************************************************************
 * EXERCICE 1 / Function
 ***************************************************************************** */
voirAlert(){
  this.titreAlert = "Congratulation !!";
  this.messageAlert = "Franchement, c'est de la balle atomique, ça fonctionne du feu de dieu";
  this.clicResult = "Bravo inutile de cliquer, le bouton ne fera plus rien maintenant";
  this.resultatAlert = 'Félicitation vous avez réussi !';
}
/*****************************************************************************
 * EXERCICE 2 / Propriétés
 ***************************************************************************** */
messageSecret: string = "";
buttonMessageSecret: string = "Cliqué sur moi pour afficher le message secret";
/*****************************************************************************
 * EXERCICE 2 / Function
 ***************************************************************************** */
voirMessageSecret() {

  if ( this.messageSecret == "") {
    this.buttonMessageSecret = "Cachez vite ce message c'est très urgent.";
    this.messageSecret = "Salut moussaillons, tu as réussi bravo !";
  } else {
    this.buttonMessageSecret = "Cliqué sur moi pour afficher le message secret";
    this.messageSecret = "";

  }
}
/*****************************************************************************
 * EXERCICE 3 / Propriétés
 ***************************************************************************** */
maDate: Date;
messageButtonDate: string = "Affichez la date actuel";
/*****************************************************************************
 * EXERCICE 3 / Function
 ***************************************************************************** */
voirDate(){
  this.messageButtonDate = "Vous allez ré-initialisé la date actuel";
  this.maDate = new Date();
}
/*****************************************************************************
 * EXERCICE 4 / Propriétés
 ***************************************************************************** */
number: number = 1;
/*****************************************************************************
 * EXERCICE 4 / Function
 ***************************************************************************** */
augmenterNombre(){
  this.number++;
}
augmenterNombreDix(){
  this.number = this.number + 10;
}
augmenterNombreCent(){
  this.number = this.number + 100;
}
augmenterNombreMille(){
  this.number = this.number + 1000;
}

diminuerNombre(){
  this.number--;
}
diminuerNombreDix(){
  this.number = this.number - 10;
}
diminuerNombreCent(){
  this.number = this.number - 100;
}
diminuerNombreMille(){
  this.number = this.number - 1000;
}
/*****************************************************************************
 * EXERCICE 5 / Propriétés
 ***************************************************************************** */
// Attribut sélectionné de ma balise img
image: string = 'app/images/vaiana/vaiana1.jpg';
alt: string = "Présentation du nouveau disney en image";
largeur: string = '600';
hauteur: string = '250';

// description et titre de la photo
titlePhoto: string = 'Vaïana photo n°1';
descriptionPhoto: string = "Photo représentative de Vaïana l'héroïne et de Maoouï le dieu un peu loufoque du film."

// Bouton changement d'image
changeImage: string = 'Voir une autre image de Vaïana';


/*****************************************************************************
 * EXERCICE 5 / Function
 ***************************************************************************** */
nextImages() {
  if (this.image == 'app/images/vaiana/vaiana1.jpg') {
    this.image = 'app/images/vaiana/vaiana2.jpg';
    this.alt = 'Grimace des héros';
    this.hauteur = "350";
    this.titlePhoto = 'Vaïana photo n°2';
    this.descriptionPhoto = "Super montage sur les héros de vaïana en pleine séance de grimace pour nôtre plus grand plaisir";
  } else if ( this.image == 'app/images/vaiana/vaiana2.jpg') {
    this.image = 'app/images/vaiana/vaiana3.jpg';
    this.alt = 'La grand mère de vaiana';
    this.hauteur = "250";
    this.titlePhoto = 'Vaïana photo n°3';
    this.descriptionPhoto = "Voici un montage de la grand mère de Vaïana";
  } else if ( this.image == 'app/images/vaiana/vaiana3.jpg') {
    this.image = 'app/images/vaiana/vaiana4.jpg';
    this.alt = 'Montage utilisé pour la jaquette du film. Enfin pour ce qui est de la version VFF sortie fin d\'année 2016 en France';
    this.hauteur = "300";
    this.titlePhoto = 'Vaïana photo n°4';
    this.descriptionPhoto = "Affiche Vaïana";
  } else if ( this.image == 'app/images/vaiana/vaiana4.jpg') {
    this.image = 'app/images/vaiana/vaiana5.PNG';
    this.alt = 'Bébé Vaïana, trop à croquer';
    this.hauteur = "400";
    this.titlePhoto = 'Vaïana photo n°5';
    this.descriptionPhoto = "Bébé Vaïana";
  } else if ( this.image == 'app/images/vaiana/vaiana5.PNG') {
    this.image = 'app/images/vaiana/vaiana1.jpg';
    this.alt = 'Présentation du nouveau disney en image';
    this.hauteur = "250";
    this.titlePhoto = 'Vaïana photo n°1';
    this.descriptionPhoto = "Photo représentative de Vaïana l'héroïne et de Maoouï le dieu un peu loufoque du film.";
  }
}
/*****************************************************************************
 * EXERCICE 6 / Propriétés
 ***************************************************************************** */

position: number = 0;
lastName: string = '';
firstName: string = '';
logo: string = "";
altLogo: string = "";
width: string = "25";
height: string = "20";



/*****************************************************************************
 * EXERCICE 6 / Function
 ***************************************************************************** */
// Function Personne
personne() {
  var christelle = [1, "Personne", "Christelle", "20 ans", "app/images/clubFoot/psg.png"];
  var logo = "app/images/clubFoot/psg.png";
  if ( christelle[1] == "Personne" ) {
    this.position = 1;
    this.lastName = "Personne";
    this.firstName = "Christelle";
    this.logoClub = logo;
  }

}
// Function Caron
caron() {

}
// Function Guillon
guillon() {

}
// function All
all() {

}
}
