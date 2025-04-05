# SOLID Principles with Examples in Java

| **Nguyên Tắc** | **Tên Nguyên Tắc**                        | **Mô Tả**                                                                                                                                 | **Ví Dụ Minh Họa**                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **S**          | **Single Responsibility Principle (SRP)** | Mỗi lớp chỉ nên có một lý do duy nhất để thay đổi. Mỗi lớp chỉ nên chịu trách nhiệm cho một nhiệm vụ cụ thể.                              | Ví dụ: Lớp `Invoice` trong hệ thống quản lý đơn hàng chỉ nên chịu trách nhiệm về việc tính toán và lưu trữ thông tin hóa đơn. Lớp `InvoicePrinter` lại chịu trách nhiệm in hóa đơn, thay vì gộp cả hai vào một lớp duy nhất.                                                                                                                                                                               |
| **O**          | **Open/Closed Principle (OCP)**           | Class phải được mở rộng chứ không sửa đổi trực tiếp.                                                                                      | Ví dụ: Một lớp `Shape` có phương thức `draw()`. Khi cần thêm các hình dạng mới như `Circle`, `Rectangle`, thay vì thay đổi lớp `Shape`, ta tạo thêm các lớp con như `Circle` và `Rectangle` mở rộng từ `Shape` để vẽ hình mới mà không thay đổi lớp gốc.                                                                                                                                                   |
| **L**          | **Liskov Substitution Principle (LSP)**   | Các đối tượng của lớp con phải có thể thay thế lớp cha mà không làm thay đổi tính đúng đắn của chương trình.                              | Ví dụ: Nếu bạn có lớp `Bird` và lớp con `Penguin`, thì theo nguyên tắc này, bạn không nên để `Penguin` thay thế `Bird` trong một phương thức yêu cầu `Bird` có thể bay, vì chim cánh cụt không thể bay.                                                                                                                                                                                                    |
| **I**          | **Interface Segregation Principle (ISP)** | Một lớp không nên bị buộc phải implement các phương thức mà nó không sử dụng. Nên phân tách giao diện thành các phần nhỏ hơn, dễ sử dụng. | Ví dụ: Giả sử bạn có một giao diện `AnimalActions` với các phương thức `eat()`, `fly()`, và `swim()`. Nếu lớp `Penguin` không cần phương thức `fly()`, bạn nên tách giao diện thành các giao diện nhỏ hơn như `Eat`, `Fly`, `Swim` thay vì bắt `Penguin` phải cài đặt phương thức không liên quan đến nó.                                                                                                  |
| **D**          | **Dependency Inversion Principle (DIP)**  | Các module cấp cao không nên phụ thuộc vào các module cấp thấp, mà cả hai đều phải phụ thuộc vào các abstractions (trừu tượng).           | Ví dụ: Một lớp `OrderService` không nên trực tiếp tạo đối tượng của lớp `DatabaseConnection`. Thay vào đó, nó nên phụ thuộc vào một interface `IDatabaseConnection` và `DatabaseConnection` sẽ là một lớp cụ thể triển khai interface đó. Điều này giúp `OrderService` không bị ràng buộc vào một phương thức kết nối cơ sở dữ liệu cụ thể, và dễ dàng thay đổi các kết nối cơ sở dữ liệu trong tương lai. |

# Java Code Examples

### Single Responsibility Principle (SRP)

```java
// Lớp này chỉ chịu trách nhiệm về việc tính toán và lưu trữ hóa đơn
class Invoice {
    private double amount;

    public Invoice(double amount) {
        this.amount = amount;
    }

    public double getAmount() {
        return amount;
    }
}

// Lớp này chỉ chịu trách nhiệm in hóa đơn
class InvoicePrinter {
    public void printInvoice(Invoice invoice) {
        System.out.println("Invoice amount: " + invoice.getAmount());
    }
}
```

> **_Giải thích_**: Lớp Invoice chỉ chịu trách nhiệm về thông tin hóa đơn, còn InvoicePrinter chỉ chịu trách nhiệm in hóa đơn. Mỗi lớp có một lý do duy nhất để thay đổi.

### Open/Closed Principle (OCP)

```java
// Lớp Shape mở để mở rộng, nhưng đóng để sửa đổi
abstract class Shape {
    public abstract void draw();
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

> **_Giải thích_**: Bạn có thể thêm các hình dạng mới (ví dụ: Triangle, Square) mà không cần thay đổi mã nguồn của lớp DrawingApp hay Shape.

### Liskov Substitution Principle (LSP)

```java
class Bird {
    public void fly() {
        System.out.println("Flying");
    }
}

class Sparrow extends Bird {
    @Override
    public void fly() {
        System.out.println("Sparrow flying");
    }
}

class Penguin extends Bird {
    @Override
    public void fly() {
        throw new UnsupportedOperationException("Penguins can't fly");
    }
}

class BirdWatcher {
    public void watch(Bird bird) {
        bird.fly(); // Đây sẽ gây lỗi nếu penguin được truyền vào
    }
}
```

> **_ Giải thích_**: Lỗi ở đây là Penguin không thể thay thế Bird một cách hợp lệ vì chim cánh cụt không thể bay. Để tuân thủ LSP, bạn cần xem xét thay đổi phương thức fly() để không yêu cầu mọi loài chim đều có thể bay.

### Interface Segregation Principle (ISP)

```java
interface Eater {
    void eat();
}

interface Swimmer {
    void swim();
}

interface Flyer {
    void fly();
}

class Duck implements Eater, Swimmer, Flyer {
    @Override
    public void eat() {
        System.out.println("Duck eating");
    }

    @Override
    public void swim() {
        System.out.println("Duck swimming");
    }

    @Override
    public void fly() {
        System.out.println("Duck flying");
    }
}

class Penguin implements Eater, Swimmer {
    @Override
    public void eat() {
        System.out.println("Penguin eating");
    }

    @Override
    public void swim() {
        System.out.println("Penguin swimming");
    }
}
```

> **_Giải thích_**: Thay vì để Penguin implement giao diện Flyer mà không sử dụng, ta chia nhỏ các giao diện thành các phần (tách biệt các hành động eat(), swim(), fly()) để mỗi lớp chỉ cần implement những gì cần thiết.

### Dependency Inversion Principle (DIP)

```java
// Interface xác định một hành động
interface DatabaseConnection {
    void connect();
}

// Lớp cài đặt DatabaseConnection cho MySQL
class MySQLConnection implements DatabaseConnection {
    @Override
    public void connect() {
        System.out.println("Connecting to MySQL database");
    }
}

// Lớp cài đặt DatabaseConnection cho PostgreSQL
class PostgreSQLConnection implements DatabaseConnection {
    @Override
    public void connect() {
        System.out.println("Connecting to PostgreSQL database");
    }
}

// Lớp phụ thuộc vào trừu tượng DatabaseConnection thay vì cài đặt cụ thể
class UserService {
    private DatabaseConnection dbConnection;

    public UserService(DatabaseConnection dbConnection) {
        this.dbConnection = dbConnection;
    }

    public void performAction() {
        dbConnection.connect(); // Không cần biết chi tiết kết nối
    }
}

// Sử dụng
public class Main {
    public static void main(String[] args) {
        DatabaseConnection connection = new MySQLConnection();
        UserService userService = new UserService(connection);
        userService.performAction(); // Sử dụng MySQL để kết nối
    }
}
```

> **_Giải thích_**: UserService không phụ thuộc vào một cài đặt kết nối cơ sở dữ liệu cụ thể. Thay vào đó, nó phụ thuộc vào một interface DatabaseConnection. Điều này giúp dễ dàng thay đổi nguồn kết nối cơ sở dữ liệu mà không làm thay đổi UserService.
