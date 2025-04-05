# Nuxt.js

## **1. Cơ bản**

- **Nuxt.js là gì? Sự khác biệt giữa Nuxt.js và Vue.js?**

  - Đề bài: Giải thích Nuxt.js và sự khác biệt giữa Nuxt.js với Vue.js. Nuxt.js là gì, và vì sao nó lại là lựa chọn phù hợp cho SSR hoặc SSG?

- **Nuxt.js hỗ trợ các phương pháp rendering nào?**

  - Đề bài: Trình bày các phương pháp rendering của Nuxt.js, bao gồm SSR (Server-Side Rendering), SSG (Static Site Generation), và SPA (Single Page Application).

- **Nuxt.js có gì khác biệt so với Vue.js về routing?**
  - Đề bài: Giải thích cách Nuxt.js tự động tạo ra routing từ cấu trúc thư mục, so với cách cấu hình routing thủ công trong Vue.js.

## **2. Rendering & SEO**

- **Nuxt.js giúp cải thiện SEO như thế nào?**

  - Đề bài: Mô tả cách Nuxt.js cải thiện SEO với SSR và SSG, và lý do tại sao điều này lại quan trọng cho SEO.

- **Để tối ưu SEO cho một ứng dụng Nuxt.js, bạn sẽ làm gì?**
  - Đề bài: Trình bày các kỹ thuật tối ưu SEO khi phát triển ứng dụng với Nuxt.js, như dùng `head` trong component để thêm metadata, cấu hình robots.txt, sử dụng static generation cho các trang SEO quan trọng, v.v.

## **3. Configuration & Architecture**

- **Nuxt.js cấu hình như thế nào? Các phần cấu hình quan trọng?**

  - Đề bài: Liệt kê các phần cấu hình chính trong Nuxt.js (nuxt.config.js) và giải thích công dụng của chúng (ví dụ: các module, các plugin, cấu hình SSR, proxy API, v.v).

- **Cấu trúc thư mục trong một dự án Nuxt.js?**
  - Đề bài: Mô tả cấu trúc thư mục của một ứng dụng Nuxt.js và giải thích vai trò của các thư mục như `pages`, `components`, `layouts`, `store`, `plugins`.

## **4. Data Fetching**

- **Data Fetching trong Nuxt.js hoạt động như thế nào?**

  - Đề bài: Giải thích các phương pháp data fetching trong Nuxt.js, bao gồm `asyncData()`, `fetch()`, và sự khác biệt giữa chúng.

- **Giải thích cách Nuxt.js sử dụng Pinia để quản lý state?**
  - Đề bài: Mô tả cách Nuxt 3 sử dụng **Pinia** thay vì Vuex để quản lý state toàn cục trong ứng dụng và cách thức kết hợp Pinia với SSR hoặc SSG.

## **5. Deployment & Performance**

- **Làm sao để triển khai một ứng dụng Nuxt.js với các phương pháp SSR và SSG?**

  - Đề bài: Trình bày các bước triển khai ứng dụng Nuxt.js với SSR (như sử dụng server Node.js) và với SSG (như deploy trên Netlify hoặc Vercel).

- **Tối ưu hiệu suất trong Nuxt.js như thế nào?**
  - Đề bài: Các cách tối ưu hiệu suất cho ứng dụng Nuxt.js, bao gồm tối ưu hóa SSR, lazy loading, sử dụng Pinia và caching.

## **6. Nuxt.js Modules**

- **Giới thiệu về các module Nuxt.js phổ biến và cách sử dụng chúng?**

  - Đề bài: Liệt kê các module phổ biến trong Nuxt.js (như `@nuxt/auth`, `@nuxt/http`, `@nuxt/pwa`, `@nuxt/image`) và cách cấu hình và sử dụng chúng trong ứng dụng.

- **Sự khác biệt giữa module và plugin trong Nuxt.js?**
  - Đề bài: Giải thích sự khác biệt giữa module và plugin trong Nuxt.js và khi nào nên sử dụng cái này thay vì cái kia.

## **7. Authentication & Authorization**

- **Cách triển khai xác thực người dùng (authentication) trong Nuxt.js?**

  - Đề bài: Trình bày cách triển khai xác thực người dùng trong Nuxt.js, sử dụng các module như `@nuxt/auth` hoặc cấu hình thủ công.

- **Làm sao để quản lý quyền truy cập và phân quyền trong Nuxt.js?**
  - Đề bài: Giải thích cách bạn có thể quản lý phân quyền trong Nuxt.js, ví dụ qua việc sử dụng middleware để bảo vệ các route hoặc API.

## **8. SSR (Server-Side Rendering) & Hydration**

- **Hydration trong Nuxt.js là gì và tại sao lại quan trọng?**

  - Đề bài: Giải thích khái niệm hydration trong SSR và tại sao việc tối ưu hóa hydration lại quan trọng cho hiệu suất của ứng dụng Nuxt.js.

- **Cách Nuxt.js xử lý SSR và SSG để tối ưu hóa trải nghiệm người dùng?**
  - Đề bài: Mô tả cách Nuxt.js tối ưu hóa SSR và SSG để cải thiện tốc độ tải trang, hiệu suất SEO và trải nghiệm người dùng.
