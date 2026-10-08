# MODULE 08: KIẾN TRÚC KỸ THUẬT & LỘ TRÌNH TRIỂN KHAI

## 1. Sơ Đồ Kiến Trúc Công Nghệ

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TRÌNH DUYỆT (CLIENT)                            │
│  ├── HTML5 / Vanilla CSS (Responsive UI, Không phụ thuộc thư viện nặng)│
│  ├── Canvas 2D Engine (Render Tilemap Pixel Art, Nhân vật, Animation)  │
│  ├── State Manager & Time Loop (Quản lý 24h in-game = 45 phút thực)    │
│  └── LifePhone Web Component (Giao diện ứng dụng ảo dạng Modal)        │
└──────────────────────────────────┬─────────────────────────────────────┘
                                   │
                   ┌───────────────┴───────────────┐
                   │                               │
         (HTTP REST API / JSON)            (WebSocket TCP)
                   │                               │
                   ▼                               ▼
┌──────────────────────────────────────┐  ┌──────────────────────────────┐
│       PHP BACKEND SERVER             │  │     WEBSOCKET REALTIME       │
│  ├── Auth & Session Management       │  │  ├── Đấu trí Toán 1v1        │
│  ├── Cloud Save / Sync Game State    │  │  ├── Party Quán Net Cỏ       │
│  ├── Leaderboard & Statistics        │  │  └── Đấu trường Thi THPT     │
│  └── Chợ Giao Dịch Đồ Cũ & BĐS       │  └──────────────────────────────┘
└──────────────────┬───────────────────┘
                   │
                   ▼
┌──────────────────────────────────────┐
│           MYSQL DATABASE             │
│  ├── `users` & `player_profiles`     │
│  ├── `game_saves` (JSON Blob & Stats)│
│  ├── `market_items` & `transactions` │
│  └── `leaderboards` & `clan_dynasty` │
└──────────────────────────────────────┘
```

---

## 2. Thiết Kế Cơ Sở Dữ Liệu MySQL Cốt Lõi (Đơn Giản & Tối Ưu)

* `users`: `id`, `username`, `password_hash`, `email`, `created_at`
* `characters`: `id`, `user_id`, `name`, `gender`, `generation_f`, `current_stage`, `age`, `net_worth`, `stats_json`, `traits_json`, `updated_at`
* `roommates`: `id`, `room_id`, `player1_id`, `player2_id`, `room_type`, `rent_due_date`
* `market_trade`: `id`, `seller_id`, `item_type`, `item_name`, `price`, `status`, `created_at`
* `leaderboards`: `id`, `character_id`, `user_id`, `category` (wealth/scholar/happiness), `score`, `updated_at`

---

## 3. Lộ Trình Phát Triển Từng Bước (Development Roadmap)

### Giai đoạn Alpha: Core Engine & Tuổi Thơ (4 - 11 tuổi)
* Xây dựng Vòng lặp Thời gian (Time Loop 24h), Canvas Render nhân vật pixel.
* Hệ thống chỉ số nền tảng (IQ, EQ, STR, ART, Stamina, Stress).
* Hoàn thiện Giai đoạn Mầm non (4-6t) và Cấp 1 (6-11t) với minigame toán đố & tiền tiêu vặt.

### Giai đoạn Beta 1: Tuổi Học Trò & LifePhone (Cấp 2 - Cấp 3)
* Bản đồ trường học, Quán Net xóm, lò luyện thi THPT.
* Tích hợp giao diện LifePhone: Nhắn tin Zola, nhận thông báo sự kiện.
* Tích hợp WebSocket phòng đấu trí 1v1 và thi thử online.

### Giai đoạn Beta 2: Đời Sinh Viên (Đại Học & Trọ Gác Lửng)
* Cơ chế Ở Ghép Phòng Trọ (Roommate Co-op) giữa 2 người chơi.
* Chợ trao đổi đồ cũ sinh viên & nhận job freelance kiếm sống.
* Cân bằng chỉ số GPA - Làm thêm - Sức khỏe.

### Giai đoạn Hoàn Thiện: Trưởng Thành & Di Sản F2
* Hệ thống nghề nghiệp cố định (Contract Jobs), cơ chế "Siêu nhân OT".
* Thị trường BĐS, chứng khoán toàn server, đám cưới online.
* Tổng kết Thẻ Hồi Ký & Kích hoạt New Game+ Thế hệ F2.
* Triển khai hệ thống Cloud Save & Bảng xếp hạng online `gocnhocuocsong.io`.
