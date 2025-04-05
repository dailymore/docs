# 🌐 Free Online Databases (Hosted)

Danh sách các dịch vụ **database online miễn phí** và được **host sẵn**, bạn có thể kết nối qua internet dễ dàng mà không cần tự cài đặt server.

---

## 🔸 1. MongoDB Atlas

- 🌱 NoSQL (Document-based)
- ✅ Free tier:
  - 512MB storage
  - 100 concurrent connections
- 🌐 Kết nối: `mongodb+srv://...`
- UI trực quan, dễ dùng
- 📎 Link: https://www.mongodb.com/cloud/atlas

---

## 🔸 2. Supabase

- 🐘 PostgreSQL + Auth + Storage
- ✅ Free tier:
  - 500MB database
  - RESTful & Realtime API auto-generated
- 🎯 Tốt cho fullstack app hoặc MVP
- 🌐 Kết nối qua URI, hoặc REST/JS SDK
- 📎 Link: https://supabase.com

---

## 🔸 3. Firebase (Firestore / Realtime DB)

- 🔥 NoSQL (Realtime hoặc Document)
- ✅ Free tier:
  - 1GB Firestore / 100MB Realtime DB
  - 50K reads/ngày (Firestore)
- Bao gồm Auth, Hosting, Functions
- 🌐 Kết nối qua SDK hoặc REST
- 📎 Link: https://firebase.google.com

---

## 🔸 4. Railway

- 🧪 Hỗ trợ PostgreSQL / MySQL / MongoDB
- ✅ Free tier:
  - Easy setup
  - Có connection string
- Giao diện đẹp, dễ dùng
- 📎 Link: https://railway.app

---

## 🔸 5. Render (PostgreSQL)

- 💻 SQL (PostgreSQL only)
- ✅ Free tier:
  - 256MB storage
- Có UI để quản lý
- 🌐 Kết nối qua PostgreSQL URI
- 📎 Link: https://render.com

---

## ✅ Khi sử dụng bạn cần:

- 📌 Lấy **connection URI** từ dashboard
- 📦 Dùng các thư viện backend để kết nối:
  - `mongoose` cho MongoDB
  - `pg`, `prisma` cho PostgreSQL
  - `firebase-admin` cho Firebase
- ⚠️ Nhớ bảo vệ thông tin đăng nhập!

---

## 📌 Gợi ý theo nhu cầu:

| Nhu cầu                | Gợi ý               |
| ---------------------- | ------------------- |
| Dùng MongoDB           | MongoDB Atlas       |
| Dùng PostgreSQL        | Supabase / Render   |
| Cần Auth, File storage | Supabase / Firebase |
| Làm realtime app       | Firebase            |
| Làm app nhỏ, test      | Railway             |

---

> ✍️ Ghi chú: Các gói miễn phí thường giới hạn RAM, storage, hoặc request rate. Nên dùng cho mục đích học tập hoặc MVP.

# 🔍 Giới hạn thời gian của các gói miễn phí (Database Online)

Dưới đây là tổng hợp thông tin về các dịch vụ database online miễn phí và thời hạn sử dụng của từng gói free tier.

| Dịch vụ                 | Free tier | Thời hạn                             | Ghi chú thêm                                                 |
| ----------------------- | --------- | ------------------------------------ | ------------------------------------------------------------ |
| **MongoDB Atlas**       | ✅ Có     | **Không giới hạn thời gian**         | Gói miễn phí “M0” là free forever                            |
| **Supabase**            | ✅ Có     | **Không giới hạn thời gian**         | Gói "Free Plan", dùng mãi nếu không vượt giới hạn            |
| **Firebase**            | ✅ Có     | **Không giới hạn thời gian**         | Gói “Spark Plan” dùng lâu dài                                |
| **Railway**             | ✅ Có     | **Có thể giới hạn nếu không active** | Miễn phí nhưng có thể bị xóa sau vài ngày không hoạt động    |
| **Render (PostgreSQL)** | ✅ Có     | **Không có thời hạn chính thức**     | Vẫn giữ project nếu còn hoạt động, nhưng tài nguyên khá thấp |

---

## 📝 Lưu ý

- Hầu hết các gói miễn phí là **miễn phí vĩnh viễn**, miễn là bạn **không vượt quá giới hạn tài nguyên** như RAM, storage, hoặc requests.
- Một số dịch vụ (như Railway) có thể **xóa project sau vài ngày không hoạt động** nếu bạn không tương tác (dù vẫn miễn phí).
- Luôn nên kiểm tra lại điều khoản từng thời điểm, vì chính sách free tier có thể thay đổi.
