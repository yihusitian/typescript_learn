import MathUtil, { Circle, Rectangle, Shape } from './module_namespace'
import { Validation } from './module_namespace1'

console.log(MathUtil.sum(1, 2, 3, 4, 5))

let circle: Shape = new Circle(10)
console.log(circle.area())

let rectangle = new Rectangle(10, 20)
console.log(rectangle.area())


let emailValidator = new Validation.EmailValidator()
let zipCodeValidator = new Validation.ZipCodeValidator()

console.log(emailValidator.isValid('test.com'))
console.log(zipCodeValidator.isValid('12345'))