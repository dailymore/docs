# 📖 Hướng Dẫn Viết Markdown

Markdown là một ngôn ngữ đánh dấu nhẹ giúp định dạng văn bản dễ dàng. Dưới đây là các cú pháp cơ bản để viết một tệp `.md`.

## 📝 1. Tiêu đề

Sử dụng dấu `#` để tạo tiêu đề:

```md
# 📌 Tiêu đề cấp 1

## 🔹 Tiêu đề cấp 2

### 🔸 Tiêu đề cấp 3
```

## ✨ 2. In đậm, in nghiêng

- **In đậm**: `**chữ in đậm**`
- _In nghiêng_: `*chữ in nghiêng*`
- **_In đậm và nghiêng_**: `***chữ in đậm và nghiêng***`

## 📋 3. Danh sách

- **Danh sách không thứ tự**:

```md
- ✅ Mục 1
- ✅ Mục 2
  - 🔹 Mục con
```

- **Danh sách có thứ tự**:

```md
1. 🔢 Mục 1
2. 🔢 Mục 2
   1. 🔸 Mục con
```

## 🔗 4. Đường dẫn và hình ảnh

- **Chèn liên kết**:

```md
[🌍 Google](https://www.google.com)
```

- **Chèn hình ảnh**:

```md
![🖼️ Alt text](https://example.com/image.jpg)
![🖼️ Alt text](src/assets/imgs)
<img src="../../assets/imgs/ddd.png" alt="DDD" style="border: 10px solid #EEEEEE; border-radius: 8px;">
```

## 💬 5. Đoạn trích dẫn

Sử dụng `>` để tạo đoạn trích dẫn:

```md
> 💡 Đây là một đoạn trích dẫn.
```

## 💻 6. Định dạng mã nguồn

Dùng dấu huyền (`) hoặc ba dấu huyền để hiển thị đoạn mã:

````md
`⚡ code ngắn`

```python
print("Hello, Markdown! 👋")
```
````

```python
print("Hello, Markdown! 👋")
```

## ⚡ 7. Kẻ dòng ngang

Dùng `---` hoặc `***` để tạo đường kẻ ngang:

```md
---
```

## 📊 8. Tạo bảng

Dùng dấu `|` để tạo bảng:

```md
| Cột 1     | Cột 2     | Cột 3     |
| --------- | --------- | --------- |
| Giá trị 1 | Giá trị 2 | Giá trị 3 |
| Giá trị 4 | Giá trị 5 | Giá trị 6 |
```

## 🔢 9. Gạch đầu dòng và danh sách nhiệm vụ

- Sử dụng dấu `-` hoặc `*` để tạo danh sách:

```md
- Mục 1
- Mục 2
  - Mục con
```

- **Danh sách nhiệm vụ**:

```md
- [x] Việc đã làm
- [ ] Việc cần làm
```

## 🎨 10. Tô màu văn bản (Hỗ trợ trên một số nền tảng)

Một số nền tảng như Discord, GitHub hỗ trợ tô màu văn bản với các ngôn ngữ lập trình:

```diff
+ Đoạn này sẽ có màu xanh lá
- Đoạn này sẽ có màu đỏ
```

## ⏳ 11. Chú thích (Footnotes)

Markdown hỗ trợ chú thích giúp bạn giải thích thêm mà không làm rối nội dung chính:

```md
Đây là một câu có chú thích[^1].

[^1]: Đây là nội dung chú thích.
```

## 🎭 12. Biểu tượng cảm xúc

Một số nền tảng hỗ trợ emoji bằng cách sử dụng cú pháp `:emoji_name:`:

```md
:sparkles: :smile: :rocket:
```

Sẽ hiển thị như: ✨ 😄 🚀
