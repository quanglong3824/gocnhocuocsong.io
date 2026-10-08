# LUẬT LỆ TRIỂN KHAI & NGUYÊN TẮC PHÁT TRIỂN

## 1. NGUYÊN TẮC THIẾT KẾ ĐỒ HỌA (STRICT PIXEL PERFECT)
* **TUYỆT ĐỐI KHÔNG DÙNG ICON / EMOJI:** Toàn bộ giao diện game, các nút bấm, danh mục, thanh trạng thái HUD và ứng dụng LifePhone chỉ sử dụng chữ viết thuần túy (Text Labels), đường viền pixel (Pixel Borders) và hình khối giao diện sạch sẽ.
* **KHÔNG DÙNG ĐƯỜNG CONG VECTOR HOẶC HÌNH TRÒN TRỊA MỀM:**
  * Toàn bộ CSS sử dụng `border-radius: 0` tuyệt đối.
  * Mọi hình tròn trong game (bánh xe Wave Alpha, nón bảo hiểm, miệng ly trà đá, mắt nhân vật) **bắt buộc phải được cấu tạo từ các khối Pixel Vuông rời rạc** (ghép ma trận pixel / thuật toán Bresenham Pixel Circle).
  * Không dùng hàm vẽ vector tròn `ctx.arc()` hay dải màu tròn `radial-gradient()`.
* **Quy chuẩn Grid:** Đồ họa sử dụng kích thước chuẩn 16x16 và 32x32 pixel. Không dùng AI 64x64 gây vỡ nét pixel.
* **Ngôn ngữ:** Sử dụng 100% Tiếng Việt có dấu đầy đủ, chuẩn mực.

## 2. NGUYÊN TẮC PHÂN CHIA CLIENT - SERVER (TỐI ƯU NHẸ NHẤT)
* **Client (HTML5 Canvas + Vanilla JS + CSS):** Xử lý 90% logic gameplay (vòng lặp 24h, di chuyển nhân vật, va chạm tilemap, minigame toán đố, hệ thống chiến đấu võ thuật, chỉ số sinh tồn và render 60 FPS).
* **Server (PHP + MySQL REST API):** Chỉ xử lý 10% các tác vụ bảo mật và dữ liệu tập trung (xác thực tài khoản, lưu cloud save định kỳ, chợ giao dịch đồ cũ, bảng xếp hạng online, hệ thống ở ghép phòng trọ).

## 3. NGUYÊN TẮC MÃ NGUỒN & ĐẶT TÊN
* Tuân thủ mô hình kiến trúc MVC (Model - View - Controller).
* Thiết lập Router phía Client với cơ chế Auto-Pick route mặc định (`#gioiThieu` / `#game`).
* Đặt tên file và biến theo chuẩn tiếng Việt `camelCase` (ví dụ: `thoiGianController.js`, `nhanVatModel.js`, `taiKhoanController.php`).
