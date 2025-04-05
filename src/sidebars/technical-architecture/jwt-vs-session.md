# So sánh JWT và Session

## 1. JWT (JSON Web Token)

**JWT** là một tiêu chuẩn mở (RFC 7519) để truyền tải thông tin giữa các bên dưới dạng JSON. Token này thường được sử dụng trong các ứng dụng **stateless**, tức là ứng dụng không cần lưu trữ thông tin xác thực trên server.

### Cấu trúc của JWT:

JWT có ba phần chính:

1. **Header**: Thông tin về thuật toán mã hóa và loại token.
2. **Payload**: Thông tin (claims) chứa dữ liệu như user id, role, và các metadata.
3. **Signature**: Phần mã hóa giúp xác nhận tính hợp lệ của token.

### Quy trình sử dụng JWT:

1. **User Login**: Sau khi người dùng đăng nhập thành công, server sẽ tạo ra một JWT chứa các thông tin như user ID, thời gian hết hạn, và gửi lại cho client.
2. **Client**: Client lưu trữ JWT (thường là trong **localStorage** hoặc **sessionStorage**).
3. **Gửi request**: Mỗi lần client gửi request đến server, JWT sẽ được gửi đi trong header HTTP (thường là trong `Authorization` header dưới dạng `Bearer token`).
4. **Server**: Server sẽ xác thực JWT (kết hợp với key bí mật hoặc public key) và cho phép truy cập vào các tài nguyên nếu token hợp lệ.

### Ưu điểm của JWT:

- **Stateless**: Không cần lưu trữ session trên server, giúp giảm tải cho server và dễ dàng mở rộng.
- **Scalability**: Với việc không lưu trạng thái trên server, JWT dễ dàng tích hợp với các microservices.
- **Cross-domain**: JWT dễ dàng sử dụng trong các ứng dụng đa miền (cross-domain).

### Nhược điểm của JWT:

- **Không thể hủy bỏ**: Sau khi token được cấp, không thể thu hồi cho đến khi nó hết hạn. Điều này có thể gây rủi ro nếu token bị lộ.
- **Khả năng tấn công Replay Attack**: Nếu token bị lộ, kẻ tấn công có thể sử dụng lại token đó trong một khoảng thời gian cho đến khi token hết hạn.

---

## 2. Session (Session-Based Authentication)

**Session** là một phương pháp xác thực nơi thông tin người dùng được lưu trữ trên server. Khi người dùng đăng nhập, server sẽ tạo một phiên làm việc (session) và lưu thông tin vào server (thường là trong cơ sở dữ liệu hoặc memory) và gửi một **session ID** đến client dưới dạng **cookie**.

### Quy trình sử dụng Session:

1. **User Login**: Sau khi người dùng đăng nhập thành công, server tạo một **session** và lưu trữ thông tin như user ID, thời gian hết hạn trong memory hoặc database.
2. **Server tạo Session ID**: Server gửi một **cookie** chứa **session ID** về cho client.
3. **Client**: Client lưu cookie này và gửi lại trong các request tiếp theo.
4. **Server**: Mỗi khi client gửi request, server sẽ xác thực session ID và lấy thông tin người dùng từ session đã lưu.

### Ưu điểm của Session:

- **Có thể hủy bỏ**: Khi người dùng đăng xuất hoặc session hết hạn, server có thể xóa session, không còn khả năng truy cập.
- **Bảo mật hơn**: Session ID chỉ tồn tại trong **cookie** của client và không lưu trữ trên client dưới dạng thông tin dễ đọc như JWT. Điều này giúp giảm nguy cơ lộ dữ liệu.

### Nhược điểm của Session:

- **Stateful**: Server phải lưu trữ session và thông tin người dùng, điều này gây ra overhead và có thể gặp vấn đề khi mở rộng hệ thống (scalability).
- **Session Expiry**: Nếu session hết hạn, người dùng sẽ phải đăng nhập lại.
- **Dễ bị tấn công CSRF**: Nếu session ID bị đánh cắp (qua việc tấn công XSS), kẻ tấn công có thể giả mạo request thay mặt người dùng.

---

## 3. So sánh chi tiết JWT và Session:

| **Tiêu chí**                 | **JWT**                                                                          | **Session**                                                                              |
| ---------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| **Lưu trữ thông tin**        | Lưu trữ trên client (localStorage hoặc sessionStorage).                          | Lưu trữ trên server (database, memory, v.v).                                             |
| **Scalability**              | Dễ dàng mở rộng (stateless).                                                     | Cần lưu trữ thông tin trên server, khó mở rộng.                                          |
| **Xác thực**                 | Xác thực mỗi lần request với token.                                              | Xác thực thông qua session ID trong cookie.                                              |
| **Hủy bỏ**                   | Không thể hủy bỏ token khi đã cấp (cho đến khi hết hạn).                         | Có thể hủy bỏ session ngay lập tức (ngừng hoạt động).                                    |
| **Bảo mật**                  | Dễ bị tấn công Replay Attack nếu token không hết hạn nhanh.                      | Server có thể kiểm soát bảo mật tốt hơn, dễ dàng phát hiện và xử lý session bị tấn công. |
| **Phương thức lưu trữ**      | Token lưu trữ trên client (localStorage hoặc cookie).                            | Session ID lưu trong cookie trên client.                                                 |
| **Dễ tích hợp cross-domain** | Hỗ trợ tốt với các ứng dụng đa miền.                                             | Khó tích hợp cross-domain mà không sử dụng các kỹ thuật đặc biệt.                        |
| **Kích thước**               | Token có thể lớn, tùy vào dữ liệu cần lưu.                                       | Session ID nhỏ và chỉ cần lưu trữ ID.                                                    |
| **Tính bảo mật**             | Token có thể dễ dàng bị đánh cắp nếu không sử dụng HTTPS và cơ chế bảo mật khác. | Server có thể kiểm soát bảo mật tốt hơn, dễ dàng phát hiện và xử lý session bị tấn công. |

---

## 4. Khi nào nên sử dụng JWT và khi nào nên sử dụng Session?

- **Sử dụng JWT** khi:

  - Bạn xây dựng một ứng dụng **stateless** (không lưu trữ trạng thái) hoặc một **microservice**.
  - Cần tích hợp với **đa miền** hoặc ứng dụng **mobile** và cần sử dụng **REST API**.
  - Bạn muốn hệ thống có thể mở rộng và dễ dàng chia sẻ xác thực qua nhiều server.

- **Sử dụng Session** khi:
  - Bạn muốn có một giải pháp bảo mật **ngay lập tức** (ví dụ: thu hồi quyền truy cập sau khi người dùng đăng xuất).
  - Ứng dụng của bạn yêu cầu **quản lý trạng thái** và bạn không lo ngại về việc cần duy trì session trên server.
  - Bạn muốn kiểm soát và bảo mật **session ID** tốt hơn.
