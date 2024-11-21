export namespace Validation {

    export interface StringValidator {
        isValid(s: string): boolean
    }

    export class EmailValidator implements StringValidator {
        isValid(s: string): boolean {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(s)
        }
    }
    
    export class ZipCodeValidator implements StringValidator {
        isValid(s: string): boolean {
            const zipCodeRegex = /^[0-9]{5}$/;
            return zipCodeRegex.test(s)
        }
    }
}

let emailValidator = new Validation.EmailValidator()
let zipCodeValidator = new Validation.ZipCodeValidator()

console.log(emailValidator.isValid('test.com'))
console.log(zipCodeValidator.isValid('12345'))