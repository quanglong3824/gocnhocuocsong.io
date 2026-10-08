# MODULE 10: CHIẾN LƯỢC TÀI NGUYÊN & QUY CHUẨN ĐỒ HỌA PIXEL ART (16x16 & 32x32)

---

## 1. Nguyên Tắc Thiết Kế: "Nói Không Với AI & Giữ Chuẩn Pixel Hoài Niệm"
* **Loại bỏ AI 64x64:** Ảnh AI pixel lớn thường bị lỗi "pixel rác" (pixel soup), lẫn lộn độ phân giải và làm mất tính hoài niệm chân thực.
* **Quy chuẩn Pixel Perfect (100% Đồng nhất):** Toàn bộ đồ họa trong game chỉ sử dụng 2 chuẩn kích thước cố định: **16x16** và **32x32**.

---

## 2. Phân Định Kích Thước Grid (16x16 vs 32x32)

```
┌───────────────────────────────────────────────┬───────────────────────────────────────────────┐
│              GRID 16x16 PIXEL                 │              GRID 32x32 PIXEL                 │
├───────────────────────────────────────────────┼───────────────────────────────────────────────┤
│ • Ẩm thực (Mì tôm, Bánh mì, Cafe sữa đá)      │ • Nhân vật (Sprite Base + Layer Tóc/Quần áo)  │
│ • Đạo cụ nhỏ (Nón bảo hiểm, Ghế nhựa xanh)    │ • Animation Chiến đấu (Đấm, Đá, Đỡ đòn)       │
│ • Icon LifePhone (Zola, V-Bank, GocJob)       │ • Phương tiện (Xe Wave Alpha, Xe đạp mini)    │
│ • Tilemap nền (Gạch lát sàn, Mặt đường, Cỏ)   │ • Nội thất lớn (Bàn học, Dàn PC, Giường ngủ)  │
└───────────────────────────────────────────────┴───────────────────────────────────────────────┘
```

---

## 3. Phân Chia Tự Vẽ vs Tái Sử Dụng Nguồn Mở (Chuẩn 16x16 & 32x32)

### A. Tự Vẽ Điểm Nhấn Đậm Chất Việt Nam (Aseprite / Piskel)

1. **Items & Đạo cụ Sinh tồn (Chuẩn 16x16):**
   * *Ẩm thực:* Tô mì tôm Hảo Hảo trứng, ly cà phê sữa đá vỉa hè, đĩa cơm tấm sườn bì chả, ổ bánh mì pate, chai tương ớt Chinsu, cốc trà đá.
   * *Đồ dùng:* Ghế nhựa xanh/đỏ Song Long, nón bảo hiểm nửa đầu, gói xôi gấc, thẻ bài ma thuật tuổi thơ.
2. **Phương tiện & Nội thất Việt Nam (Chuẩn 32x32):**
   * Xe máy Honda Wave Alpha / Dream, xe đạp mini Nhật có giỏ inox.
   * Quạt máy con cóc / quạt Senko, tivi màn hình lồi CRT, gác lửng gỗ phòng trọ sinh viên, cột điện chằng chịt dây.
3. **Trang phục & Nhận diện (Layer 32x32):**
   * Khăn quàng đỏ học sinh tiểu học, tà áo dài trắng nữ sinh cấp 3, áo khoác shipper xanh lá/vàng, áo ba lỗ quần đùi ở trọ.

---

### B. Sử Dụng Nguồn Mở Có Sẵn (Tileset Chuẩn 16x16 & 32x32)

* **Nội thất & Môi trường hiện đại:**
  * Bộ **Modern Interiors & Modern City (LimeZu - bản 32x32 / 16x16):** Cung cấp sẵn bàn ghế văn phòng, máy tính, bảng đen lớp học, sàn gạch, cửa sổ, bệnh viện.
  * **Kenney.nl (CC0 - 16x16 / 32x32):** Gạch đường, cây xanh đô thị, icon nút bấm UI.
* **Sprite Animation Khung Xương (32x32):**
  * Dùng khung xương nhân vật chuẩn 32x32 có sẵn 4 hướng đi bộ (Walk Cycle), chạy, ngã, gõ bàn phím và đấm đá.

---

## 4. Kỹ Thuật "Ghép Mảnh Modular" (32x32 Paperdoll System)

Để tiết kiệm thời gian vẽ hàng trăm NPC:
1. **Base Body 32x32:** 1 khung cơ thể người duy nhất (Nam/Nữ).
2. **Layer Xếp Chồng (PNG trong suốt 32x32):**
   * Layer 1: Base Body (Da trắng / Da ngăm).
   * Layer 2: Quần (Quần tây học sinh / Quần đùi / Váy).
   * Layer 3: Áo (Áo sơ mi trắng / Áo ba lỗ / Áo đồng phục / Áo công sở).
   * Layer 4: Kiểu tóc (Tóc đầu đinh, mái ngố, undercut, tóc dài buộc đuôi gà).
   * Layer 5: Phụ kiện (Đeo kính cận, quầng thâm mắt khi OT, băng gạc khi thua đánh lộn).
3. **Canvas 2D Rendering:** Trình duyệt tự vẽ đè các layer lên nhau trong vòng lặp render, cực nhẹ và không tốn bộ nhớ.

---

## 5. Danh Mục Tool & Thiết Lập Dự Án

* **Tool Vẽ:** [Aseprite](https://www.aseprite.org/) hoặc [Piskel](https://www.piskelapp.com/) (Web miễn phí).
* **Bảng màu đề xuất (Color Palette):** Bộ màu hoài niệm retro (Endesga 32 hoặc Resurrect 64) $\rightarrow$ Đảm bảo màu sắc ấm cúng, không bị chói gắt.
