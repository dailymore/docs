# DOM Ảo (Virtual DOM)

## Khái Niệm

**DOM ảo (Virtual DOM)** là một khái niệm được sử dụng trong các thư viện hoặc framework JavaScript như **React**, **Vue.js**, và một số framework khác. DOM ảo là một phiên bản mô phỏng của **DOM thật (Real DOM)**, được lưu trữ trong bộ nhớ (memory), nhưng nó chỉ là một cấu trúc dữ liệu nhẹ nhàng, không trực tiếp liên kết với giao diện người dùng (UI), giúp cải thiện hiệu suất của ứng dụng web.

## Khác Biệt Giữa DOM Ảo Và DOM Thật

### DOM Thật (Real DOM)

- **DOM thật** là cấu trúc cây của các phần tử HTML được trình duyệt sử dụng để hiển thị giao diện người dùng (UI) trên trình duyệt.
- Khi có thay đổi trong DOM (ví dụ: khi người dùng tương tác với trang), trình duyệt cần phải tính toán lại và cập nhật lại DOM, điều này có thể gây tốn kém về hiệu suất, đặc biệt với các ứng dụng lớn.
- **DOM thật** là một cây đối tượng được trình duyệt sử dụng để biểu diễn các phần tử HTML thực tế trên trang.
- Mỗi thay đổi trong **DOM thật** yêu cầu trình duyệt phải tính toán lại và vẽ lại giao diện. Nếu có nhiều thay đổi, nó có thể làm chậm quá trình render, gây giật lag trong ứng dụng.

### DOM Ảo (Virtual DOM)

- **DOM ảo** là một bản sao của **DOM thật**, nhưng nó tồn tại trong bộ nhớ, không trực tiếp làm việc với DOM của trình duyệt.
- Khi có thay đổi trong UI, thay vì cập nhật trực tiếp lên **DOM thật**, hệ thống sẽ cập nhật lên **DOM ảo** trước. Sau đó, **DOM ảo** sẽ so sánh với **DOM thật** (quá trình gọi là **diffing**), và chỉ cập nhật những phần thay đổi thực sự lên **DOM thật**.
- Cách này giúp giảm thiểu số lần cập nhật **DOM**, do đó cải thiện hiệu suất ứng dụng.

## Lợi Ích Của DOM Ảo

- **Hiệu suất cao hơn**: Việc thay đổi và so sánh **DOM ảo** thay vì trực tiếp thao tác với **DOM thật** giúp giảm thiểu các thao tác tốn kém về hiệu suất như reflow, repaint.
- **Bảo mật**: Vì việc thao tác với **DOM thật** diễn ra sau khi đã so sánh với **DOM ảo**, quá trình cập nhật này trở nên tối ưu và không có rủi ro thay đổi không mong muốn.
- **Dễ dàng tối ưu hóa**: Các framework sử dụng **DOM ảo** có thể tối ưu hóa cách cập nhật **DOM** (chỉ cập nhật các phần bị thay đổi), làm cho quá trình render nhanh hơn và giảm thiểu việc vẽ lại toàn bộ UI.

**DOM ảo** là một bản sao của **DOM thật**, giúp tối ưu hiệu suất bằng cách giảm số lượng thao tác với **DOM thật**. Khi có thay đổi, **DOM ảo** sẽ được cập nhật trước, và sau đó chỉ cập nhật những phần thay đổi vào **DOM thật**.

## Ví Dụ

Giả sử bạn có một ứng dụng với một danh sách và bạn chỉ muốn cập nhật một phần tử trong danh sách (thay vì toàn bộ danh sách). Nếu bạn sử dụng **DOM thật**, việc thay đổi sẽ yêu cầu toàn bộ danh sách phải được cập nhật lại trong **DOM**, gây tốn kém tài nguyên. Tuy nhiên, với **DOM ảo**, chỉ phần tử thay đổi trong danh sách mới được cập nhật, và các phần tử còn lại không bị ảnh hưởng, tiết kiệm được tài nguyên và thời gian.

## Tóm Tắt

**DOM ảo** giúp tăng hiệu suất và tối ưu hóa việc cập nhật giao diện người dùng trong các ứng dụng web, đặc biệt là các ứng dụng có tính tương tác cao.
