# Object-Oriented Programming (OOP) Principles with Examples in Java

| **Nguyên Tắc**            | **Tên Nguyên Tắc** | **Mô Tả**                                                                                                                                           | **Ví Dụ Minh Họa**                                                                                                                                                         |
| ------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Encapsulation**         | **Đóng gói**       | Làm ẩn chi tiết triển khai và chỉ cung cấp một giao diện công khai (public interface) cho người dùng.                                               | Ví dụ: Lớp `BankAccount` ẩn chi tiết số dư tài khoản và chỉ cung cấp các phương thức công khai như `deposit()` và `withdraw()` để thao tác với số dư.                      |
| **Abstraction**           | **Trừu tượng hóa** | Chỉ làm việc với những gì cần thiết và ẩn đi các chi tiết không quan trọng.                                                                         | Ví dụ: Lớp `Vehicle` có thể có các phương thức `start()` và `stop()`, nhưng chi tiết về cách mỗi loại xe hoạt động có thể được ẩn đi trong các lớp con như `Car`, `Truck`. |
| **Inheritance**           | **Kế thừa**        | Cho phép tạo ra một lớp mới từ một lớp đã có, kế thừa các thuộc tính và phương thức của lớp cha.                                                    | Ví dụ: Lớp `Dog` có thể kế thừa từ lớp `Animal`, vì chúng có chung các đặc điểm như ăn uống, ngủ nghỉ, nhưng lớp `Dog` có thể có thêm các phương thức riêng như `bark()`.  |
| **Polymorphism**          | **Đa hình**        | Cho phép một phương thức có nhiều hình thức khác nhau, với cùng một tên nhưng có thể thực hiện các hành động khác nhau tùy thuộc vào đối tượng gọi. | Ví dụ: Phương thức `draw()` có thể được sử dụng cho cả các đối tượng `Circle`, `Rectangle` mà không cần biết đối tượng cụ thể là gì.                                       |
| **Composition** (bổ sung) | **Kết hợp**        | Thay vì kế thừa, tạo các đối tượng nhỏ hơn và kết hợp chúng lại để xây dựng các đối tượng phức tạp hơn.                                             | Ví dụ: Lớp `Car` có thể kết hợp các đối tượng `Engine`, `Wheel`, và `Door` để xây dựng một chiếc xe thay vì kế thừa từ một lớp xe chung.                                   |

### Java Code Examples

## 1. **Encapsulation**

```java
class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public void withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
        }
    }

    public double getBalance() {
        return balance;
    }
}
```

> **_ Giải thích_**: Trường balance là private và không thể truy cập trực tiếp từ bên ngoài lớp. Các phương thức deposit(), withdraw(), và getBalance() được sử dụng để thao tác với số dư tài khoản.

## 2. Abstraction (Trừu tượng hóa)

```java
abstract class Vehicle {
    public abstract void start();
    public abstract void stop();
}

class Car extends Vehicle {
    @Override
    public void start() {
        System.out.println("Car is starting");
    }

    @Override
    public void stop() {
        System.out.println("Car is stopping");
    }
}

class Truck extends Vehicle {
    @Override
    public void start() {
        System.out.println("Truck is starting");
    }

    @Override
    public void stop() {
        System.out.println("Truck is stopping");
    }
}
```

> **_Giải thích_**: Lớp Vehicle định nghĩa các phương thức trừu tượng start() và stop(). Các lớp Car và Truck cung cấp triển khai cụ thể cho những phương thức này.

## 3. Inheritance (Kế thừa)

```java
class Animal {
    public void eat() {
        System.out.println("Eating");
    }

    public void sleep() {
        System.out.println("Sleeping");
    }
}

class Dog extends Animal {
    public void bark() {
        System.out.println("Barking");
    }
}

class Cat extends Animal {
    public void meow() {
        System.out.println("Meowing");
    }
}
```

> **_Giải thích_**: Các lớp Dog và Cat kế thừa từ lớp Animal, vì vậy chúng có quyền truy cập các phương thức eat() và sleep(). Thêm vào đó, chúng có thể có các phương thức riêng như bark() và meow().

## 4. Polymorphism (Đa hình)

```java
class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a Circle");
    }
}

class Rectangle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a Rectangle");
    }
}

class DrawingApp {
    public void drawShape(Shape shape) {
        shape.draw();
    }
}
```

> **_Giải thích_**: Phương thức drawShape() có thể được sử dụng với bất kỳ đối tượng nào của loại Shape, cho dù đó là Circle, Rectangle hay bất kỳ lớp con nào của Shape. Đây là một ví dụ về đa hình.

## 5. Composition (Kết hợp)

```java
class Engine {
    public void start() {
        System.out.println("Engine starting");
    }
}

class Wheel {
    public void rotate() {
        System.out.println("Wheel rotating");
    }
}

class Car {
    private Engine engine;
    private Wheel[] wheels;

    public Car() {
        engine = new Engine();
        wheels = new Wheel[4];
        for (int i = 0; i < 4; i++) {
            wheels[i] = new Wheel();
        }
    }

    public void start() {
        engine.start();
        for (Wheel wheel : wheels) {
            wheel.rotate();
        }
        System.out.println("Car is running");
    }
}
```

> **_Giải thích_**: Lớp Car kết hợp các đối tượng Engine và Wheel thay vì kế thừa từ chúng. Đây là một ví dụ về kết hợp.
