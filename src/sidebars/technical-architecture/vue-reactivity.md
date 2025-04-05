# Reactivity trong Vue 3

## Reactivity là gì?

Reactivity (tính phản ứng) là cơ chế tự động cập nhật giao diện khi dữ liệu thay đổi. Đây là một trong những tính năng quan trọng nhất của Vue, giúp tạo ra các ứng dụng có thể thay đổi dữ liệu và UI một cách mượt mà mà không cần phải thao tác trực tiếp với DOM.

## Nguyên lý hoạt động của Reactivity trong Vue

Vue sử dụng một hệ thống reactivity dựa trên các getter và setter để theo dõi sự thay đổi của dữ liệu. Khi dữ liệu thay đổi, Vue sẽ tự động cập nhật DOM tương ứng mà không cần người phát triển phải làm điều đó thủ công.

### 1. Đối tượng `reactive` trong Vue 3

Trong Vue 3, hệ thống reactivity sử dụng Proxy (mới trong Vue 3) để thay thế cho Object.defineProperty (trong Vue 2) nhằm cải thiện hiệu suất và dễ dàng hơn trong việc theo dõi các thay đổi.

Khi bạn sử dụng reactive() trong Vue 3, một đối tượng sẽ được "proxy" qua một hàm, giúp Vue theo dõi sự thay đổi của các thuộc tính trong đối tượng đó.

```javascript
const state = reactive({
  count: 0,
})

// Khi bạn thay đổi giá trị của count, Vue sẽ tự động cập nhật UI
state.count++
```

### 2. Cách Vue theo dõi sự thay đổi

Vue 3 sử dụng Proxy để "proxy" các thuộc tính trong một đối tượng và tạo ra một trap cho mỗi thao tác truy cập hoặc thay đổi giá trị của đối tượng (ví dụ: getter và setter).

**_Getter_**: Khi bạn truy cập vào một thuộc tính của đối tượng "reactive", Vue sẽ đăng ký thuộc tính đó vào một "watcher" (người theo dõi) để theo dõi sự thay đổi.

**_Setter_**: Khi giá trị của thuộc tính thay đổi, Vue sẽ nhận được tín hiệu và sẽ tự động "trigger" các thay đổi cho các phần tử trong DOM liên quan đến thuộc tính đó.

### 3. Các bước hoạt động của hệ thống reactivity

Bước 1: Khi bạn tạo một đối tượng bằng reactive() hoặc ref(), Vue sẽ tạo một đối tượng "proxy" cho đối tượng này.

Bước 2: Mỗi thuộc tính của đối tượng "proxy" sẽ có một getter và setter. Các getter và setter này sẽ "lắng nghe" các thay đổi hoặc truy cập vào thuộc tính đó.

Bước 3: Khi một thuộc tính trong đối tượng thay đổi (ví dụ: state.count++), Vue sẽ thông báo cho hệ thống reactivity rằng có sự thay đổi, và tất cả các thành phần (component) đang theo dõi thuộc tính này sẽ được "update" để hiển thị giá trị mới.

Bước 4: Vue sẽ re-render lại các phần tử trong UI mà cần phải thay đổi, thay vì cập nhật toàn bộ DOM, giúp tiết kiệm tài nguyên và tăng hiệu suất.

### 4. Cơ chế Dependency Tracking (Theo dõi phụ thuộc):

Vue sử dụng `dep` (dependency) để theo dõi sự phụ thuộc giữa dữ liệu và UI.

Vue sử dụng dep (dependency) để theo dõi sự phụ thuộc giữa các phần tử UI và các giá trị dữ liệu. Mỗi khi một thuộc tính được truy cập (getter), nó sẽ đăng ký phần tử UI liên quan vào danh sách phụ thuộc.

Sau khi dữ liệu thay đổi (setter), Vue sẽ biết được chính xác phần tử nào cần phải được cập nhật và chỉ thay đổi những phần tử đó mà không làm lại toàn bộ giao diện người dùng.

- Getter: Đăng ký phần tử UI liên quan vào dependency
- Setter: Kích hoạt cập nhật UI đúng chỗ thay đổi

## 5. Reactivity trong các tình huống cụ thể

### `ref()`

Đối với các kiểu dữ liệu nguyên thủy như string, number, boolean,..., Vue sử dụng ref() để tạo ra đối tượng reactive. Khi giá trị của ref thay đổi, Vue sẽ tự động cập nhật giao diện liên quan.

```javascript
const count = ref(0)
count.value++ // UI tự động cập nhật
```

### `computed()`

Các giá trị tính toán (computed) trong Vue cũng dựa vào hệ thống reactivity. Một computed property sẽ tự động theo dõi các phụ thuộc của nó và chỉ tính toán lại khi các giá trị phụ thuộc thay đổi.

```javascript
const state = reactive({
  count: 0,
})

const doubledCount = computed(() => state.count * 2)
```

### `watch()`

Vue cũng cung cấp các watchers để theo dõi sự thay đổi của dữ liệu và thực hiện các tác vụ khi có thay đổi. watch có thể được sử dụng để theo dõi dữ liệu sâu hoặc các hành động không phải là render UI.

```javascript
const state = reactive({
  count: 0,
})

watch(
  () => state.count,
  (newCount, oldCount) => {
    console.log(`Count changed from ${oldCount} to ${newCount}`)
  },
)
```

#### Tóm tắt

Reactivity trong Vue hoạt động bằng cách sử dụng Proxy để "proxy" các đối tượng và các thuộc tính của chúng, sau đó tự động theo dõi sự thay đổi và cập nhật DOM khi cần thiết. Vue sử dụng hệ thống getter và setter để theo dõi sự thay đổi của các thuộc tính và sử dụng dependency tracking để chỉ cập nhật những phần của giao diện cần thiết, giúp tối ưu hóa hiệu suất và trải nghiệm người dùng.

---

## Reactivity và Virtual DOM có liên quan gì?

Reactivity trong Vue và DOM ảo (Virtual DOM) có mối liên hệ mật thiết với nhau, nhưng chúng không hoàn toàn giống nhau. Để hiểu rõ mối quan hệ giữa hai khái niệm này, chúng ta cần phân biệt vai trò của từng thứ trong quá trình cập nhật giao diện người dùng.

### 1. Reactivity

Reactivity là cơ chế mà Vue sử dụng để theo dõi và cập nhật dữ liệu một cách tự động khi có sự thay đổi. Cơ chế này giúp Vue tự động "phản ứng" với các thay đổi trong dữ liệu và tự động cập nhật các phần tử trong giao diện mà không cần phải làm lại toàn bộ DOM.

- Reactivity giúp theo dõi sự thay đổi trong dữ liệu và thông báo cho Vue rằng có sự thay đổi nào đó xảy ra. Khi dữ liệu thay đổi, Vue sẽ xác định các phần tử nào cần phải được cập nhật.

- Vue không thay đổi trực tiếp toàn bộ DOM mà chỉ thay đổi những phần tử có liên quan.

### 2. Virtual DOM

- Tạo bản sao DOM thật trong bộ nhớ.
- Khi dữ liệu thay đổi, tạo Virtual DOM mới.
- So sánh Virtual DOM mới và cũ (quá trình gọi là diffing **diffing**).
- Chỉ cập nhật phần thực sự thay đổi lên DOM thật.

### Mối quan hệ

1. Reactivity quyết định khi nào cần cập nhật:

- Khi có sự thay đổi trong dữ liệu (thông qua cơ chế reactivity), Vue biết rằng dữ liệu đã thay đổi và cần phải cập nhật giao diện.

- Tuy nhiên, Vue không cập nhật ngay lập tức DOM thật. Thay vào đó, nó tạo ra một Virtual DOM đại diện cho giao diện mới.

2. Virtual DOM giúp so sánh và tối ưu hóa việc cập nhật DOM thật:

- Sau khi reactivity kích hoạt và dữ liệu thay đổi, Vue sẽ cập nhật Virtual DOM. Sau đó, Vue sẽ so sánh (diffing) Virtual DOM mới với Virtual DOM cũ để xác định sự khác biệt.

- Chỉ những phần tử có sự thay đổi thực sự sẽ được cập nhật trong DOM thật. Điều này giúp tối ưu hóa việc vẽ lại và giảm thiểu các thao tác tốn kém (reflow, repaint) của trình duyệt.

### Ví dụ:

1. Dữ liệu thay đổi → Reactivity phát hiện.
2. Vue tạo Virtual DOM mới.
3. So sánh với Virtual DOM cũ (diffing).
4. Cập nhật DOM thật đúng chỗ thay đổi.

## Tóm tắt

- **Reactivity**: Phát hiện thay đổi trong dữ liệu.
- **Virtual DOM**: Cập nhật UI một cách tối ưu.
- Kết hợp giúp ứng dụng Vue mượt mà, hiệu suất cao.
