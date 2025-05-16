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
Tự động chuyển Node Version khi cd vào thư mục
- Thêm vào cuối file ~/.zshrc hoặc ~/.bashrc

#### bash
```bash
# Tự động sử dụng Node từ .nvmrc nếu có (bash)
cdnvm() {
    cd "$@" || return $?
    if [[ -f .nvmrc && -r .nvmrc ]]; then
        nvm use
    fi
}
alias cd='cdnvm'
```
#### zsh
```zsh
# Tự động sử dụng Node từ .nvmrc khi chuyển thư mục
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

---

## 🎉 Thành Công!
