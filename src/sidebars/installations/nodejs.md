# 🚀 Cách Cài Đặt Node.js Trên Ubuntu 22.04 LTS

## 🎨 Cài đặt NVM (Node Version Manager)

### 📌 NVM giúp bạn dễ dàng cài đặt và quản lý nhiều phiên bản Node.js. Bạn có thể tải phiên bản mới nhất từ repository chính thức của NVM.

---

## 🔧 1. Cài đặt NVM

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | zsh
```

---

## 🛠️ 2. Tải lại shell config

```bash
source ~/.zshrc
```

---

## ✅ 3. Kiểm tra xem đã cài thành công hay chưa

```bash
command -v nvm
```

🎯 Nếu hiện ra:

```
nvm
```

Là bạn đã cài đặt thành công!

---

# 🌟 Cài Đặt Node.js Qua NVM

## 🔧 1. Hiển thị danh sách phiên bản Node có thể cài đặt

```bash
nvm ls-remote
```

---

## 🛠️ 2. Cài đặt một phiên bản Node cụ thể (ví dụ: v22.14.0)

```bash
nvm install v22.14.0
```

---

## ✅ 3. Kiểm tra phiên bản Node sau khi cài

```bash
node -v
```

🎯 Kết quả mong muốn:

```
v22.14.0
```

---

## 🎉 Thành Công!
