# GOC NHO CUOC SONG (gocnhocuocsong.io)

> **Du an Game Mo Phong Cuoc Doi & Nhap Vai 2D Pixel Art Dam Chat Doi Thuc Viet Nam**  
> **Kien truc:** Client-Server MVC (HTML5 Canvas 2D + PHP/MySQL REST API + Realtime Room)  
> **Quy tac thiet ke:** Tuyet doi khong su dung Icon/Emoji tren toan bo du an.

---

## CAY THU MUC CHUAN MVC (TIENG VIET CAMELCASE)

```
gocnhocuocsong.io/
├── assets/                                     # Kho tai nguyen do hoa & am thanh
│   ├── amThanh/
│   │   ├── hieuUng/                            # SFX (dam da, xe may, buoc chan)
│   │   └── nhacNen/                            # BGM (tieng mua mai ton, ve keu trua he, piano)
│   ├── hinhAnh/
│   │   ├── banDo/                              # Tileset 16x16 & 32x32 (truong hoc, quan net, tro)
│   │   ├── daoCu/                              # Mi tom, non BH, ghe nhua, do an vat (16x16)
│   │   ├── giaoDien/                           # Nut bam, khung LifePhone, thanh mau HP (16x16)
│   │   ├── nhanVat/                            # Base Body, Layer Toc, Quan ao, Phu kien (32x32)
│   │   └── phuongTien/                         # Xe Wave, xe dap mini, xe bus (32x32)
│   └── phongChu/                               # Font chu Pixel tieng Viet
│
├── client/                                     # FRONTEND (HTML5, Vanilla CSS, JS Canvas)
│   ├── css/
│   │   ├── giaoDienChinh.css                   # Layout chinh, khung game canvas
│   │   ├── dienThoaiAo.css                     # Giao dien LifePhone OS (Zola, V-Bank)
│   │   └── khungChienDau.css                   # Giao dien danh lon & thanh HP/Stamina
│   ├── js/
│   │   ├── controllers/                        # BO DIEU KHIEN (CONTROLLERS)
│   │   │   ├── gameController.js               # Quan ly vong lap chinh cua game (Game Loop)
│   │   │   ├── thoiGianController.js           # Xu ly nhip 24h in-game = 45 phut thuc te
│   │   │   ├── sinhTonController.js            # Xu ly doi, met moi, co che "Sieu nhan OT"
│   │   │   ├── nhanVatController.js            # Dieu khien di chuyen, tuong tac NPC
│   │   │   ├── chienDauController.js           # Xu ly dam da, vo thuat, ne don, dao cu
│   │   │   ├── dienThoaiController.js          # Mo app Zola, nhan cuoc shipper, chuyen tien
│   │   │   └── onlineController.js             # Quan ly phong dau tri 1v1, party quan net
│   │   ├── models/                             # DU LIEU & TRANG THAI (MODELS)
│   │   │   ├── nhanVatModel.js                 # Thuoc tinh IQ, EQ, STR, ART, Charm, Net Worth
│   │   │   ├── thoiGianModel.js                # Trang thai ngay, thang, nam, mua thi cu
│   │   │   ├── sinhTonModel.js                 # Chi so HP, Stamina, Stress, Hunger
│   │   │   ├── vatPhamModel.js                 # Tui do, trang bi non BH, ghe nhua, do an
│   │   │   ├── ngheNghiepModel.js              # Luong, KPI, ca lam viec Contract & Freelance
│   │   │   ├── voThuatModel.js                 # Mon phai (Taekwondo, Vovinam, Boxing, MMA)
│   │   │   └── phongTroModel.js                # Trang thai phong tro, ban o ghep (Roommate)
│   │   ├── views/                              # HIEN THI DO HOA (VIEWS)
│   │   │   ├── canvasView.js                   # Render khung hinh Pixel Perfect tren Canvas
│   │   │   ├── banDoView.js                    # Render lop Tilemap xom nho, truong, cong ty
│   │   │   ├── nhanVatView.js                  # Render layer ghep manh (Body + Toc + Ao)
│   │   │   ├── chienDauView.js                 # Render hoat anh dam da, no khi, sat thuong
│   │   │   ├── dienThoaiView.js                # Render man hinh ung dung LifePhone
│   │   │   └── thongBaoView.js                 # Render popup hop thoai, tin nhan Zola
│   │   └── utils/                              # CONG CU HO TRO (UTILS)
│   │       ├── amThanhUtil.js                  # Phat am thanh & nhac nen loop
│   │       ├── ketNoiApiUtil.js                # Gui request HTTP JSON len server PHP
│   │       ├── tinhToanUtil.js                 # Ham toan hoc, tinh sat thuong, ty le ngat
│   │       └── vePixelUtil.js                  # Ham ve hinh pixel, cat tileset
│   └── index.html                              # Trang web chinh khoi chay game
│
├── server/                                     # BACKEND (PHP RESTful API + MySQL)
│   ├── config/
│   │   ├── coSoDuLieu.php                      # Ket noi PDO MySQL
│   │   └── cauHinhChung.php                    # Thiet lap bao mat, JWT, CORS
│   ├── controllers/                            # BO DIEU KHIEN API PHP
│   │   ├── taiKhoanController.php              # Dang ky, dang nhap, bao mat tai khoan
│   │   ├── nhanVatController.php               # Khoi tao nhan vat, chon gioi tinh, load gen
│   │   ├── luuTruController.php                # Cloud Save / Tai tien trinh cuoc doi
│   │   ├── choGiaoDichController.php           # Cho sinh vien do cu, doi the bai
│   │   ├── oGhepController.php                 # Moi ban be o chung phong tro gac lung
│   │   └── bangXepHangController.php           # BXH Net Worth, Hoc Ba, Hanh Phuc
│   ├── models/                                 # THAO TAC CO SO DU LIEU PHP
│   │   ├── nguoiDungModel.php                  # Quan ly bang `users`
│   │   ├── nhanVatModel.php                    # Quan ly bang `characters`, chi so, tuoi
│   │   ├── vatPhamModel.php                    # Quan ly bang `inventory`, `market_items`
│   │   ├── batDongSanModel.php                 # Quan ly nha dat, phong tro, gia thi truong
│   │   └── giaTocModel.php                     # Quan ly dong ho, quy thua ke the he F2
│   ├── database/
│   │   ├── khoiTaoCoSoDuLieu.sql               # Script tao toan bo bang MySQL
│   │   └── duLieuMau.sql                       # Du lieu ban dau (vat pham, mon vo, nghe)
│   └── api.php                                 # Cong dieu huong Router API chinh
│
├── Ý tưởng/                                    # 10 MODULE TAI LIEU GAME DESIGN (GDD)
│   ├── README.md                               # Muc luc dieu huong tai lieu y tuong
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
    └── README.md                               # Quy tac ky thuat & chuan trien khai code
```

---

## TRUY CAP NHANH TAI LIEU
* Xem muc luc chi tiet toan bo cac module tai [Ý tưởng/README.md](./Ý%20tưởng/README.md).
