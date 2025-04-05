# 🚀 Cài Đặt Zsh Shell Trên Ubuntu

## 📌 1. Cài Đặt Zsh

```bash
sudo apt-get install zsh -y
```

---

## ✅ Kiểm tra Zsh đã được cài đặt

```bash
which zsh
```

🎯 Kết quả mong muốn:

```
/usr/bin/zsh
```

---

## 🔥 Mở Zsh trong Terminal

```bash
zsh
```

---

## 🔧 2. Đặt Zsh Làm Shell Mặc Định

```bash
chsh -s $(which zsh)
```

🔄 **Khởi động lại hệ thống hoặc đăng xuất để thay đổi có hiệu lực.**

---

## 🔥 3. Cài Đặt zsh-autosuggestions

### 📌 Trước tiên, cài đặt Oh My Zsh

```bash
sudo curl -L http://install.ohmyz.sh | sh
```

---

### ⚡ Cài đặt plugin zsh-autosuggestions

✨ Plugin giúp **gợi ý tự động các lệnh bạn đã dùng trước đó**, rất tiện lợi!

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```

---

## ✅ Kích hoạt plugin `zsh-autosuggestions`

Thêm dòng sau vào cuối file `~/.zshrc`:

```bash
source ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions/zsh-autosuggestions.zsh
```

🔄 Sau đó reload lại Zsh:

```zsh
source ~/.zshrc
```

---

## 🎉 Thành Công!

Giờ đây bạn đã có một môi trường Zsh mạnh mẽ và thông minh hơn với autosuggestions! 🚀
