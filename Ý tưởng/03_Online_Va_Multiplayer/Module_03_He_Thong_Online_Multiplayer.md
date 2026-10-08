# MODULE 03: HỆ THỐNG TƯƠNG TÁC ONLINE & MULTIPLAYER

## 1. Mô Hình Kết Nối Tổng Thể
Game áp dụng mô hình **Hybrid (Tương tác Xã hội Bất đồng bộ + Đấu trường Thời gian thực + Kinh tế Live Server)**, giúp chạy mượt mà trên trình duyệt web mà không gây tải nặng cho máy chủ:

* **Realtime WebSocket Room:** Dành cho Đấu trí 1v1, Party quán net, Thi thử THPT.
* **RESTful API + MySQL Cache:** Dành cho Chợ đồ cũ, Bảng xếp hạng, Ở ghép phòng trọ, Thị trường BĐS.

---

## 2. Chi Tiết Tính Năng Online Theo Từng Giai Đoạn

```
[ Cấp 1 ] ──> Đấu Trí 1v1 Cổng Trường & Chợ Đổi Thẻ Bài
[ Cấp 2 ] ──> Party 4 Người Quán Net & Bảng Vinh Danh Trường
[ Cấp 3 ] ──> Đấu Trường Thi Thử THPT & Sổ Lưu Bút Online
[ Đại Học ] ─> Ở Ghép Phòng Trọ (Roommate) & Chợ Đồ Cũ Sinh Viên & Sàn Job Freelance
[ Trưởng Thành ] ──> Thị Trường Chứng Khoán/BĐS Server, Start-up Tuyển Dụng & Đám Cưới
[ Trung Niên ] ───> Gia Tộc Kế Thừa (Clan Dynasty) Bảo Trợ F2
```

### 🎒 Giai đoạn Cấp 1: Đấu Trí & Chợ Đổi Thẻ Bài
* **Đấu trí 1v1 Cổng trường (Quick Math Arena):** Ghép đôi ngẫu nhiên 60 giây giải toán đố/bảng cửu chương. Thắng nhận danh hiệu "Thần đồng xóm" + tiền tiêu vặt.
* **Chợ thẻ bài cổng trường (Trading Board):** Đăng tin trao đổi thẻ bài ma thuật hiếm, yoyo limited, bộ sưu tập tem dán.

### 🚲 Giai đoạn Cấp 2: Party Quán Net Cỏ & Trùm Trường
* **Party Quán Net (2-4 Người):** Lập tổ đội cùng bạn bè ngồi chung quán net, cày minigame (bắn súng pixel, nhảy audition) $\rightarrow$ Nhận Buff "Hưng phấn" (giảm 100% stress, tăng 15% tốc độ thao tác trong 24h game).
* **BXH Học Đường:** So kè điểm thi học kỳ và hạnh kiểm toàn trường.

### 🎓 Giai đoạn Cấp 3: Đấu Trường Thi Thử THPT Quốc Gia
* **Sự kiện Thi Thử Online (Weekly Exam Arena):** Mở tối Chủ Nhật hàng tuần, người chơi toàn server cùng làm bài trắc nghiệm đếm ngược 15 phút. Điểm cao nhận học bổng trường Đại học Top.
* **Sổ Lưu Bút Online:** Gửi thiệp chúc, lời nhắn ẩn danh hoặc tặng trà sữa in-game trước ngày bế giảng.

### 🍜 Giai đoạn Đại Học: Ở Ghép Phòng Trọ & Chợ Sinh Viên
* **Cơ chế Ở Ghép Phòng Trọ (Roommate Co-op):**
  * 2 người chơi online share chung 1 phòng trọ 15m² gác lửng.
  * Giảm 50% tiền thuê phòng và điện nước mỗi tháng.
  * Tương tác nấu cơm chung, chia ca dọn dẹp vệ sinh phòng.
* **Chợ Trời Đồ Cũ Sinh Viên (Second-hand Market):** Mua bán xe máy cũ, laptop cũ, giáo trình giữa các người chơi.
* **Sàn Đấu Thầu Job Freelance:** Nhận các đơn đặt hàng làm banner, gõ văn bản, code tool từ người chơi khác hoặc NPC.

### 💼 Giai đoạn Trưởng Thành: Kinh Tế Server, Start-up & Đám Cưới
* **Thị trường BĐS & Chứng khoán Live:** Giá nhà đất các quận và mã cổ phiếu biến động theo cung cầu thực tế của toàn server.
* **Start-up / Doanh nghiệp riêng:** Người chơi mở công ty và thuê Avatar của người chơi khác làm nhân viên, trả lương theo tháng để nhận các dự án doanh nghiệp.
* **Đám cưới Online (Wedding Event):** Hai người chơi kết hôn, phát thiệp mời toàn server, nhận phong bì mừng cưới để tích lũy mua nhà chung.

### 🏡 Giai đoạn Trung Niên: Gia Tộc Kế Thừa (Clan Dynasty)
* Đóng góp tài sản vào Quỹ Gia Tộc để xây dựng Nhà thờ họ và cấp học bổng cho các nhân vật F2 đời sau.
