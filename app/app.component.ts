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

/*****************************************************************************
 * EXERCICE 5 / Function
 ***************************************************************************** */

/*****************************************************************************
 * EXERCICE 6 / Propriétés
 ***************************************************************************** */

/*****************************************************************************
 * EXERCICE 6 / Function
 ***************************************************************************** */

}
