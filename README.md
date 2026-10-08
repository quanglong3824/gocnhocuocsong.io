# 🎮 GÓC NHỎ CUỘC SỐNG (gocnhocuocsong.io)

> **Dự án Game Mô Phỏng Cuộc Đời & Nhập Vai Pixel Art Đậm Chất Đời Thực Việt Nam**  
> **Kiến trúc:** Client-Server MVC (HTML5 Canvas 2D + PHP/MySQL REST API + Realtime Room)

---

## 📂 CÂY THƯ MỤC CHUẨN MVC (TIẾNG VIỆT CAMELCASE)

```
gocnhocuocsong.io/
├── assets/                                     # Kho tài nguyên đồ họa & âm thanh
│   ├── amThanh/
│   │   ├── hieuUng/                            # SFX (đấm đá, xe máy, ting ting, bước chân)
│   │   └── nhacNen/                            # BGM (tiếng mưa mái tôn, ve kêu trưa hè, piano)
│   ├── hinhAnh/
│   │   ├── banDo/                              # Tileset 16x16 & 32x32 (trường học, quán net, trọ)
│   │   ├── daoCu/                              # Mì tôm, nón BH, ghế nhựa, đồ ăn vặt (16x16)
│   │   ├── giaoDien/                           # Nút bấm, icon LifePhone, thanh máu HP (16x16)
│   │   ├── nhanVat/                            # Base Body, Layer Tóc, Quần áo, Phụ kiện (32x32)
│   │   └── phuongTien/                         # Xe Wave, xe đạp mini, xe bus (32x32)
│   └── phongChu/                               # Font chữ Pixel tiếng Việt
│
├── client/                                     # FRONTEND (HTML5, Vanilla CSS, JS Canvas)
│   ├── css/
│   │   ├── giaoDienChinh.css                   # Layout chính, khung game canvas
│   │   ├── dienThoaiAo.css                     # Giao diện LifePhone OS (Zola, V-Bank)
│   │   └── khungChienDau.css                   # Giao diện đánh lộn & thanh HP/Stamina
│   ├── js/
│   │   ├── controllers/                        # BỘ ĐIỀU KHIỂN (CONTROLLERS)
│   │   │   ├── gameController.js               # Quản lý vòng lặp chính của game (Game Loop)
│   │   │   ├── thoiGianController.js           # Xử lý nhịp 24h in-game = 45 phút thực tế
│   │   │   ├── sinhTonController.js            # Xử lý đói, mệt mỏi, cơ chế "Siêu nhân OT"
│   │   │   ├── nhanVatController.js            # Điều khiển di chuyển, tương tác NPC
│   │   │   ├── chienDauController.js           # Xử lý đấm đá, võ thuật, né đòn, đạo cụ
│   │   │   ├── dienThoaiController.js          # Mở app Zola, nhận cuốc shipper, chuyển tiền
│   │   │   └── onlineController.js             # Quản lý phòng đấu trí 1v1, party quán net
│   │   ├── models/                             # DỮ LIỆU & TRẠNG THÁI (MODELS)
│   │   │   ├── nhanVatModel.js                 # Thuộc tính IQ, EQ, STR, ART, Charm, Net Worth
│   │   │   ├── thoiGianModel.js                # Trạng thái ngày, tháng, năm, mùa thi cử
│   │   │   ├── sinhTonModel.js                 # Chỉ số HP, Stamina, Stress, Hunger
│   │   │   ├── vatPhamModel.js                 # Túi đồ, trang bị nón BH, ghế nhựa, đồ ăn
│   │   │   ├── ngheNghiepModel.js              # Lương, KPI, ca làm việc Contract & Freelance
│   │   │   ├── voThuatModel.js                 # Môn phái (Taekwondo, Vovinam, Boxing, MMA)
│   │   │   └── phongTroModel.js                # Trạng thái phòng trọ, bạn ở ghép (Roommate)
│   │   ├── views/                              # HIỂN THỊ ĐỒ HỌA (VIEWS)
│   │   │   ├── canvasView.js                   # Render khung hình Pixel Perfect trên Canvas
│   │   │   ├── banDoView.js                    # Render lớp Tilemap xóm nhỏ, trường, công ty
│   │   │   ├── nhanVatView.js                  # Render layer ghép mảnh (Body + Tóc + Áo)
│   │   │   ├── chienDauView.js                 # Render hoạt ảnh đấm đá, nộ khí, sát thương
│   │   │   ├── dienThoaiView.js                # Render màn hình ứng dụng LifePhone
│   │   │   └── thongBaoView.js                 # Render popup hộp thoại, tin nhắn Zola
│   │   └── utils/                              # CÔNG CỤ HỖ TRỢ (UTILS)
│   │       ├── amThanhUtil.js                  # Phát âm thanh & nhạc nền loop
│   │       ├── ketNoiApiUtil.js                # Gửi request HTTP JSON lên server PHP
│   │       ├── tinhToanUtil.js                 # Hàm toán học, tính sát thương, tỷ lệ ngất
│   │       └── vePixelUtil.js                  # Hàm vẽ hình pixel, cắt tileset
│   └── index.html                              # Trang web chính khởi chạy game
│
├── server/                                     # BACKEND (PHP RESTful API + MySQL)
│   ├── config/
│   │   ├── coSoDuLieu.php                      # Kết nối PDO MySQL
│   │   └── cauHinhChung.php                    # Thiết lập bảo mật, JWT, CORS
│   ├── controllers/                            # BỘ ĐIỀU KHIỂN API PHP
│   │   ├── taiKhoanController.php              # Đăng ký, đăng nhập, bảo mật tài khoản
│   │   ├── nhanVatController.php               # Khởi tạo nhân vật, chọn giới tính, load gen
│   │   ├── luuTruController.php                # Cloud Save / Tải tiến trình cuộc đời
│   │   ├── choGiaoDichController.php           # Chợ sinh viên đồ cũ, đổi thẻ bài
│   │   ├── oGhepController.php                 # Mời bạn bè ở chung phòng trọ gác lửng
│   │   └── bangXepHangController.php           # BXH Net Worth, Học Bá, Hạnh Phúc
│   ├── models/                                 # THAO TÁC CƠ SỞ DỮ LIỆU PHP
│   │   ├── nguoiDungModel.php                  # Quản lý bảng `users`
│   │   ├── nhanVatModel.php                    # Quản lý bảng `characters`, chỉ số, tuổi
│   │   ├── vatPhamModel.php                    # Quản lý bảng `inventory`, `market_items`
│   │   ├── batDongSanModel.php                 # Quản lý nhà đất, phòng trọ, giá thị trường
│   │   └── giaTocModel.php                     # Quản lý dòng họ, quỹ thừa kế thế hệ F2
│   ├── database/
│   │   ├── khoiTaoCoSoDuLieu.sql               # Script tạo toàn bộ bảng MySQL
│   │   └── duLieuMau.sql                       # Dữ liệu ban đầu (vật phẩm, môn võ, nghề)
│   └── api.php                                 # Cổng điều hướng Router API chính
│
├── Ý tưởng/                                    # 10 MODULE TÀI LIỆU GAME DESIGN (GDD)
│   ├── README.md                               # Mục lục điều hướng tài liệu ý tưởng
│   ├── 01_Cot_Truyen_Va_Tu_Tuong/
│   ├── 02_7_Giai_Doan_Cuoc_Doi/
│   ├── 03_Online_Va_Multiplayer/
│   ├── 04_Chi_So_Va_Sinh_Ton/
│   ├── 05_Kinh_Te_Va_Nghe_Nghiep/
│   ├── 06_Ky_Uc_Va_Ke_Thua_F2/
│   ├── 07_He_Sinh_Thai_Ao/
│   ├── 08_Kien_Truc_Ky_Thuat/
│   ├── 09_He_Thong_Hoc_Vo_Va_Chien_Dau/
│   └── 10_Chien_Luoc_Tai_Nguyen_Va_Assets/
│
└── Luật lệ triển khai/
    └── README.md                               # Quy tắc kỹ thuật & chuẩn triển khai code
```

---

## 🚀 TRUY CẬP NHANH TÀI LIỆU
* Xem mục lục chi tiết toàn bộ các module tại [Ý tưởng/README.md](./Ý%20tưởng/README.md).
