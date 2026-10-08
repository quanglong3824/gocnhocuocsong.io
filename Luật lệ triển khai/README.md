# 📜 LUẬT LỆ TRIỂN KHAI & NGUYÊN TẮC PHÁT TRIỂN

## 1. Nguyên Tắc Công Nghệ (Tech Stack Constraints)
* **Frontend:** HTML5, Vanilla CSS, JavaScript thuần kết hợp Canvas 2D Engine. Không dùng các thư viện UI cồng kềnh nhằm giữ game siêu nhẹ, load nhanh dưới 2 giây.
* **Backend:** PHP kết hợp MySQL theo chuẩn RESTful API, phản hồi dạng JSON.
* **Realtime Socket:** Tối giản kết nối, chỉ mở socket cho các minigame thời gian thực (đấu trí 1v1, party quán net, thi thử THPT).

## 2. Nguyên Tắc Đồ Họa & Cảm Xúc (Aesthetics & UX)
* Phong cách **Pixel Art 2D hoài niệm**, phối màu ấm cúng, đậm chất đường phố và đời sống Việt Nam.
* Âm thanh (Soundtrack): Tiếng đàn piano mộc mạc, tiếng ve kêu trưa hè, tiếng mưa rơi trên mái tôn gác lửng, tiếng quạt máy vù vù.

## 3. Nguyên Tắc Cân Bằng Gameplay (Game Balance)
* Luôn đảm bảo nguyên lý **"Đánh đổi"**: Không có con đường nào là dễ dàng toàn diện.
* Kiểm soát lạm phát tiền in-game qua các chi phí sinh hoạt (tiền trọ, viện phí, sửa xe, tiền mừng đám cưới bạn bè).
