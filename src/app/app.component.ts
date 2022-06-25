import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  radioButtonNumbersCheck: boolean = false;
  radioButtonLettersCheck: boolean = false;
  radioButtonSymbolsCheck: boolean = false;

  password: string = '';
  lengthOfPassword: number = 0 ;

  radioButtonNumberCheck() {
    this.radioButtonNumbersCheck = !this.radioButtonNumbersCheck;
  }

  radioButtonSymbolCheck() {
    this.radioButtonSymbolsCheck = !this.radioButtonSymbolsCheck;
  }

  radioButtonLetterCheck() {
    this.radioButtonLettersCheck = !this.radioButtonLettersCheck;
  }

  generateUniquePassword() {
    const numbers = '1234567890';
    const letters = 'ABCDEFGHIKLMNOPQRSTVXYZabcdefghiklmnopqrstvxyz';
    const symbols = '!"§$%&/()=?.,;.-#~';

    let validCharacters = '';

    if (this.radioButtonNumbersCheck) {
      validCharacters += numbers;
    }

    if (this.radioButtonSymbolsCheck) {
      validCharacters += symbols;
    }

    if (this.radioButtonLettersCheck) {
      validCharacters += letters;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.lengthOfPassword; i++) {
      const index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[index];
    }
    this.password = generatedPassword;
  }

  getLengthOfPassword(value: number) {
    const parsedValueOfPassword = value;
    if (!isNaN(parsedValueOfPassword)) {
      this.lengthOfPassword = parsedValueOfPassword;
    }
    this.lengthOfPassword = value;
  }
  keyPressNumbers(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      alert(`Please enter the "Number" in the relevant field`);
      return false;
    } else {
      return true;
    }
  }
  onFocusEvent(event: any){

    const val = event.target.value.remove();
    
    return val;
 
 }
}
