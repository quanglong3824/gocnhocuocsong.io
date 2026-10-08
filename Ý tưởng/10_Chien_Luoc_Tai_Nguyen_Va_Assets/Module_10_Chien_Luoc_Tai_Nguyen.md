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

* **Tool Vẽ Đồ Họa:** [Aseprite](https://www.aseprite.org/) (chuyên nghiệp) hoặc [Piskel](https://www.piskelapp.com/) (Web miễn phí).
* **Bảng màu đề xuất (Color Palette - Lospec):**
  * [Endesga 32](https://lospec.com/palette-list/endesga-32) $\rightarrow$ 32 màu kinh điển hoài niệm, ấm cúng.
  * [Resurrect 64](https://lospec.com/palette-list/resurrect-64) $\rightarrow$ 64 màu đa dụng cho chu kỳ Ngày / Hoàng Hôn / Đêm / Đèn đường.
* **Font chữ Retro Việt Hóa:** [VT323 (Google Fonts)](https://fonts.google.com/specimen/VT323) $\rightarrow$ Font pixel hoàn hảo hỗ trợ 100% dấu tiếng Việt.

---

## 6. Kho Tài Nguyên Có Sẵn Đề Xuất (Tải Dùng Ngay & Miễn Phí / Trả Phí Nhẹ)

### A. Bộ Tileset Đô Thị, Trường Học, Công Sở & Phòng Trọ (16x16 & 32x32)
1. **[LimeZu - Modern Interiors & Modern City](https://limezu.itch.io/) (32x32 & 16x16):**
   * *Nội dung:* Kho đồ nội thất hiện đại số 1 thế giới: Phòng ngủ, gác lửng, bàn học sinh, phòng máy tính net cỏ, bệnh viện, văn phòng công ty, cửa hàng tiện lợi, xe cộ, cây cối vỉa hè.
   * *Bản quyền:* Có bản Free cực phong phú và bản Full giá rẻ, được dùng làm game thương mại.
2. **[Kenney.nl (Asset CC0 - Miễn Phí Hoàn Toàn 100%)](https://kenney.nl/assets/tag:pixel-art):**
   * *Nội dung:* Gạch vỉa hè, mặt đường nhựa, công viên, cây cối, hệ thống nút bấm UI pixel retro.
   * *Bản quyền:* Miễn phí 100% cho mọi mục đích cá nhân lẫn thương mại không cần ghi nguồn (CC0 Public Domain).
3. **[Pipoya RPG & Modern Life Tilesets](https://pipoya.itch.io/):**
   * *Nội dung:* Nhà cửa phong cách Á Đông, đồ đạc sinh hoạt gia đình, trường học, bệnh viện.
4. **[Caz Wolf - Modern Pixel Packs](https://cazwolf.itch.io/):**
   * *Nội dung:* Quán cafe, nhà hàng vỉa hè, cửa hàng tạp hóa, đường phố đô thị.

---

### B. Khung Xương Nhân Vật & Animation 4 Hướng (Paperdoll 32x32)
1. **[Universal LPC Character Generator](https://sanderfrenken.github.io/Universal-LPC-Spritesheet-Character-Generator/):**
   * *Công năng:* Công cụ web tạo sẵn Spritesheet nhân vật đa tầng: Da, tóc, mắt, áo sơ mi, quần tây, đầm váy với đầy đủ 4 hướng đi bộ (Walk), chạy (Run), ngã (Faint), đánh nhau.
2. **[Pixel Frog - Tiny Characters & Assets](https://pixelfrog-assets.itch.io/):**
   * *Công năng:* Animation nhân vật mượt mà, khung đánh đấm, nhảy nhót, chuyển động nhịp nhàng.

---

### C. Đồ Ăn, Đạo Cụ & Icon Vật Phẩm (Grid 16x16)
1. **[Ninja Adventure Asset Pack (CC0)](https://pixel-boy.itch.io/ninja-adventure-asset-pack):**
   * *Nội dung:* Hơn 1.000 icon 16x16 gồm thức ăn, gia vị, dụng cụ sinh tồn, chìa khóa, balo, tiền xu.
2. **[Kho Food & Prop Packs trên Itch.io (16x16)](https://itch.io/game-assets/free/tag-16x16/tag-food):**
   * *Nội dung:* Bánh mì, tô mì, tách trà/cà phê, hoa quả, chai nước giải khát.

---

### D. Âm Thanh 8-Bit & Tiếng Động Môi Trường (SFX & BGM)
1. **[Bfxr / Chiptone (Tạo âm thanh 8-bit trên Web)](https://sfbgames.itch.io/chiptone) & [Bfxr.net](https://www.bfxr.net/):**
   * *Công năng:* Tự bấm tạo tiếng `Coin` (nhặt tiền), `Punch` (đấm nhau), `Level Up`, `Hurt` (bị thương) chỉ với 1 cú click.
2. **[Sonniss GDC Game Audio Archives (Miễn Phí CC0)](https://sonniss.com/gameaudioarchive):**
   * *Nội dung:* Tiếng bước chân trên vỉa hè, tiếng xe máy nổ máy, tiếng còi xe, tiếng quạt máy, tiếng gõ bàn phím văn phòng.
3. **[Incompetech (Kevin MacLeod)](https://incompetech.com/):**
   * *Nội dung:* Nhạc nền Chiptune / Lofi êm dịu cho quán cafe, góc phòng trọ ban đêm và văn phòng OT.
