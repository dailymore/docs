# 🐳 Hướng Dẫn Cài Đặt Docker Trên Ubuntu 22.04

## 🔥 1. Cập nhật hệ thống

```bash
sudo apt update -y && sudo apt upgrade -y
```

---

## 🔥 2. Cài đặt Docker

### 📌 Cài đặt các gói cần thiết

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y
```

### 🔑 Thêm khóa GPG của kho lưu trữ Docker

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

### 📦 Thêm kho lưu trữ Docker

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

### 🔄 Cập nhật packages và kiểm tra phiên bản Docker

```bash
sudo apt update
sudo apt-cache policy docker-ce
```

🎯 **Kết quả mong muốn:**

```bash
docker-ce:
  Installed: (none)
  Candidate: 5:28.0.0-1~ubuntu.22.04~jammy
  Version table:
    ...
```

---

### 🚀 Cài đặt Docker

```bash
sudo apt install docker-ce -y
```

### 🔍 Kiểm tra trạng thái Docker

```bash
sudo systemctl status docker
```

🎯 **Kết quả mong muốn:**

```
● docker.service - Docker Application Container Engine
   Loaded: loaded ...
   Active: active (running)
```

---

## 🔥 3. Cấu hình quyền Sudo cho User sử dụng Docker

Docker mặc định yêu cầu quyền `root`. Để chạy Docker mà không cần `sudo`:

```bash
sudo usermod -aG docker $(whoami)
```

✅ Kiểm tra user:

```bash
whoami
```

🔄 **Khởi động lại hệ thống**, sau đó kiểm tra:

```bash
docker ps
```

🎯 Nếu không có lỗi, bạn đã cấu hình thành công!

---

## 🔥 4. Docker với WSL (Windows Subsystem for Linux)

### 📝 Lưu ý:

WSL không sử dụng systemd, nên Docker **không tự khởi động**.

---

### ⚡ Giải pháp 1: Khởi động thủ công bằng `dockerd`

```bash
sudo dockerd
```

🎯 Nếu hiển thị như sau, Docker đã chạy thành công:

```
INFO[...] Docker daemon is running
```

---

### ⚡ Giải pháp 2: Tự động khởi động Docker khi mở terminal

#### 🛠️ Bước 1: Thêm quyền chạy `dockerd` không cần mật khẩu

```bash
sudo visudo
```

📌 Thêm dòng sau vào cuối file (thay `ndmc` bằng username của bạn):

```bash
ndmc ALL=(ALL) NOPASSWD: /usr/bin/dockerd
```

---

#### 🛠️ Bước 2: Tự động chạy Docker khi mở terminal

👉 Với `bash`, thêm vào `~/.bashrc`.  
👉 Với `zsh`, thêm vào `~/.zshrc`.

```bash
# 🚀 Tự động khởi động Docker daemon nếu chưa chạy
RUNNING=$(ps aux | grep dockerd | grep -v grep)
if [ -z "$RUNNING" ]; then
    echo "👉 Starting Docker daemon..."
    sudo dockerd > /dev/null 2>&1 &
    disown
fi
```

👉 Sau đó reload:

```bash
source ~/.bashrc
# hoặc
source ~/.zshrc
```

---

## 🎉 Thành công!

Docker sẽ tự chạy khi bạn mở terminal trên WSL2!

🌍[How to automatically start the Docker daemon on WSL2](https://blog.nillsf.com/index.php/2020/06/29/how-to-automatically-start-the-docker-daemon-on-wsl2/)

---
