# Hướng dẫn cài đặt Java, Maven, Gradle trên Ubuntu 22.04 LTS

## Cài đặt SDKMAN

### 1. Cài đặt SDKMAN

```bash
curl -s "https://get.sdkman.io" | zsh
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

### 2. Kiểm tra danh sách SDK hỗ trợ

```bash
sdk list java
```

---

## Cài đặt Java

### 1. Cài đặt JDK (ví dụ: Oracle JDK 21)

```bash
sdk install java 21.0.6-oracle
```

### 2. Kiểm tra phiên bản Java đã cài

```bash
java -version
```

---

## Cài đặt Maven

### 1. Cài đặt Maven

```bash
sdk install maven
```

### 2. Kiểm tra Maven

```bash
mvn -version
```

---

## Cài đặt Gradle

### 1. Cài đặt Gradle

```bash
sdk install gradle
```

### 2. Chọn phiên bản Gradle nếu cần

```bash
sdk list gradle
sdk use gradle 8.13
```

### 3. Kiểm tra Gradle

```bash
gradle -v
```

**Kết quả mẫu:**

```
------------------------------------------------------------
Gradle 8.13
------------------------------------------------------------

Build time:    2025-02-25 09:22:14 UTC
Revision:      073314332697ba45c16c0a0ce1891fa6794179ff

Kotlin:        2.0.21
Groovy:        3.0.22
Ant:           Apache Ant(TM) version 1.10.15 compiled on August 25 2024
Launcher JVM:  21.0.6 (Ubuntu 21.0.6+7-Ubuntu-122.04.1)
Daemon JVM:    /usr/lib/jvm/java-21-openjdk-amd64 (no JDK specified, using current Java home)
OS:            Linux 6.8.0-52-generic amd64
```

---

## Chuyển từ Maven sang Gradle

_Maven thì chậm mà `pom.xml` nhìn rối mắt 😩 — chuyển sang Gradle cho mượt._

### 1. Tạo file cấu hình Gradle

Chạy lệnh:

```bash
gradle init
```

Chọn các tuỳ chọn phù hợp:

- Type of project: `basic`, `application`, `library`, v.v.
- DSL: `Kotlin` hoặc `Groovy` (nên chọn Groovy nếu mới dùng)
- Source build: có thể import từ Maven nếu có `pom.xml`

### 2. Hoặc dùng plugin để chuyển đổi

```bash
gradle init --type pom
```

Gradle sẽ tự đọc `pom.xml` và tạo `build.gradle` tương ứng.

### 3. Kiểm tra và chỉnh sửa `build.gradle`

Gradle dùng cú pháp đơn giản, dễ đọc, dễ tuỳ chỉnh hơn Maven.

---

## Gợi ý plugin Gradle cho Java

```groovy
plugins {
    id 'java'
    id 'application'
}

application {
    mainClass = 'com.example.Main'
}
```

---

Happy hacking! 🚀
