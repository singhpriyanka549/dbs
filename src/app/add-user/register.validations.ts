import { AbstractControl, ValidationErrors } from "@angular/forms";

export class RegisterValidations {
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Priyanka@gmail.com')
                    resolve({ shouldBeUnique: true });
                else resolve(null);
            }, 2000);
        });

    }
}