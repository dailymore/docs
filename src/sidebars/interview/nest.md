# NestJS and Vue.js Interview Questions

## 🔧 NestJS (Backend)

### 1. Cơ bản

- **NestJS là gì? Tại sao chọn NestJS thay vì Express.js?**
  - Đề bài: Giải thích NestJS là gì và vì sao bạn lại chọn NestJS thay vì Express.js trong phát triển ứng dụng backend.
- **Decorator trong NestJS là gì? Kể tên một vài decorator thường dùng.**
  - Đề bài: Mô tả các decorator trong NestJS và liệt kê những decorator thường dùng trong một ứng dụng NestJS.
- **Mô hình kiến trúc của NestJS? Kiến trúc của NestJS dựa trên cái gì?**
  - Đề bài: Giải thích về mô hình kiến trúc của NestJS, dựa trên các nguyên lý OOP và DI.
- **Các thành phần chính trong một module của NestJS là gì?**
  - Đề bài: Trình bày các thành phần chính trong một module của NestJS.

### 2. Routing & Controller

- **Phân biệt `@Get()`, `@Post()`, `@Put()`, `@Delete()`?**
  - Đề bài: Giải thích sự khác nhau giữa các HTTP methods trong NestJS (`@Get()`, `@Post()`, `@Put()`, `@Delete()`).
- **Làm sao để lấy query params, path params, và body trong request?**
  - Đề bài: Trình bày cách lấy dữ liệu từ query params, path params và body trong request trong NestJS.

### 3. Dependency Injection & Service

- **NestJS quản lý Dependency Injection như thế nào?**
  - Đề bài: Giải thích cách NestJS thực hiện Dependency Injection và cách bạn sử dụng nó trong các service.
- **Giải thích sự khác nhau giữa `useClass`, `useValue`, `useFactory` trong provider.**
  - Đề bài: So sánh các phương thức cấu hình provider (`useClass`, `useValue`, `useFactory`) trong NestJS.

### 4. Middleware, Guard, Interceptor, Pipe

- **Guard là gì? Khác gì so với Middleware?**
  - Đề bài: Phân biệt giữa Guard và Middleware trong NestJS.
- **Pipe dùng để làm gì?**
  - Đề bài: Giải thích chức năng của Pipe trong NestJS và ứng dụng của nó trong xử lý request.
- **Interceptor có thể ứng dụng trong trường hợp nào?**
  - Đề bài: Mô tả cách sử dụng Interceptor trong NestJS và ứng dụng của nó trong thực tế.

### 5. Database & ORM

- **NestJS tích hợp TypeORM như thế nào?**
  - Đề bài: Mô tả cách tích hợp TypeORM vào NestJS và kết nối với database.
- **Làm sao để tạo mối quan hệ OneToMany / ManyToOne trong TypeORM?**
  - Đề bài: Trình bày cách thiết lập các mối quan hệ giữa các entity (OneToMany, ManyToOne) trong TypeORM.
- **Kể tên một vài lifecycle hook trong Entity (TypeORM)?**
  - Đề bài: Liệt kê các lifecycle hook trong TypeORM và ứng dụng của chúng.

### 6. Authentication / Authorization

- **So sánh JWT vs Session?**
  - Đề bài: Phân tích sự khác biệt giữa JWT và Session trong việc quản lý authentication.
- **Cách triển khai Auth Module trong NestJS?**
  - Đề bài: Trình bày cách bạn triển khai Auth Module trong NestJS sử dụng JWT hoặc Passport.
- **NestJS hỗ trợ Passport như thế nào?**
  - Đề bài: Mô tả cách NestJS hỗ trợ Passport để quản lý xác thực người dùng.

### 7. Testing

- **Cách viết Unit test cho một Service?**
  - Đề bài: Hướng dẫn cách viết Unit test cho một Service trong NestJS.
- **Phân biệt Unit test vs E2E test trong NestJS?**
  - Đề bài: So sánh Unit test và E2E test trong NestJS, cùng với ứng dụng thực tế của chúng.

### 8. Câu hỏi nâng cao

- **CQRS (Command Query Responsibility Segregation)** trong NestJS.
  - Đề bài: Giải thích CQRS và cách áp dụng CQRS trong một ứng dụng NestJS.
- **Tối ưu hiệu suất với NestJS.**
  - Đề bài: Trình bày các kỹ thuật tối ưu hiệu suất cho ứng dụng NestJS.
- **WebSockets và GraphQL Subscriptions trong NestJS.**
  - Đề bài: Mô tả cách sử dụng WebSockets và GraphQL Subscriptions trong NestJS cho các tính năng realtime.
- **Exception filters trong NestJS.**
  - Đề bài: Giải thích cách sử dụng exception filters để xử lý các lỗi trong NestJS.
- **Mocking Service khi viết Unit Test.**
  - Đề bài: Trình bày cách mock service khi viết Unit Test trong NestJS.
- **Lazy loading trong NestJS.**
  - Đề bài: Cách triển khai lazy loading cho các module trong NestJS.

---
