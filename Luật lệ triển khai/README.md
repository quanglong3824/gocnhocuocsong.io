# LUẬT LỆ TRIỂN KHAI & NGUYÊN TẮC PHÁT TRIỂN

## 1. NGUYÊN TẮC THIẾT KẾ & GIAO DIỆN (UI/UX)
* **TUYỆT ĐỐI KHÔNG DÙNG ICON / EMOJI:** Toàn bộ giao diện game, các nút bấm, danh mục, thanh trạng thái HUD và ứng dụng LifePhone chỉ sử dụng chữ viết thuần túy (Text Labels), đường viền pixel (Pixel Borders) và hình khối giao diện sạch sẽ.
* **Quy chuẩn Pixel Perfect:** Đồ họa sử dụng kích thước chuẩn 16x16 và 32x32 pixel. Không dùng AI 64x64 gây vỡ nét pixel.
* **Typography:** Sử dụng font chữ Pixel hoặc font Sans-serif tối giản có hỗ trợ Tiếng Việt đầy đủ, rõ ràng và sắc nét.

## 2. NGUYÊN TẮC PHÂN CHIA CLIENT - SERVER (TỐI ƯU NHẸ NHẤT)
* **Client (HTML5 Canvas + Vanilla JS + CSS):** Xử lý 90% logic gameplay (vòng lặp 24h, di chuyển nhân vật, va chạm tilemap, minigame toán đố, hệ thống chiến đấu võ thuật, chỉ số sinh tồn và render 60 FPS).
* **Server (PHP + MySQL REST API):** Chỉ xử lý 10% các tác vụ bảo mật và dữ liệu tập trung (xác thực tài khoản, lưu cloud save định kỳ, chợ giao dịch đồ cũ, bảng xếp hạng online, hệ thống ở ghép phòng trọ).

## 3. NGUYÊN TẮC MÃ NGUỒN & ĐẶT TÊN
* Tuân thủ mô hình kiến trúc MVC (Model - View - Controller).
* Đặt tên file và biến theo chuẩn tiếng Việt `camelCase` (ví dụ: `thoiGianController.js`, `nhanVatModel.js`, `taiKhoanController.php`).
