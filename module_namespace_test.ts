import MathUtil, { Circle, Rectangle, Shape } from './module_namespace'

console.log(MathUtil.sum(1, 2, 3, 4, 5))

let circle: Shape = new Circle(10)
console.log(circle.area())

let rectangle = new Rectangle(10, 20)
console.log(rectangle.area())

