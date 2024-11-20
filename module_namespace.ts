export interface Shape {
    area(): number
}

export class Circle implements Shape {
    constructor(private radius: number) {}
    area() {
        return Math.PI * this.radius * this.radius
    }
}

export class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}
    area() {
        return this.width * this.height
    }
}

export default class MathUtil {
    static sum(...args: number[]): number {
        return args.reduce((acc, curr) => acc + curr, 0)
    }
}
