/**
 * GÓC NHỎ CUỘC SỐNG (gocnhocuocsong.io)
 * Template View: Giới Thiệu Dự Án (Pixel 32x32 Vuông Vức - Đầy Đủ Tiếng Việt Có Dấu)
 * Tính năng: Tương tác Click từng Item để xem chi tiết Game Design & Cơ chế
 * Tuyệt đối KHÔNG dùng Icon/Emoji
 */

const DULIEU_CHITIET_YTUONG = {
    // 1. ASSET ITEMS
    'caphe': {
        tag: 'ẨM THỰC VIỆT NAM [GRID 16x16]',
        tieuDe: 'CÀ PHÊ SỮA ĐÁ VỈA HÈ',
        moTa: 'Ly cà phê sữa đá pha phin truyền thống với lớp sữa đặc sánh mịn, đá viên mát lạnh và ống hút đỏ. Đây là biểu tượng của nhịp sống đường phố Việt Nam từ sinh viên đến dân công sở.',
        thongSo: [
            { nhan: 'Chi phí mua', tri: '15.000 VND / Ly' },
            { nhan: 'Hiệu ứng Buff', tri: '+20% Tốc độ làm việc & Tự học trong 2 giờ game' },
            { nhan: 'Giảm Stress', tri: '-15% Áp lực tinh thần' },
            { nhan: 'Nơi mua', tri: 'Quán cóc vỉa hè, Căn tin trường, Xe đẩy cổng công ty' },
            { nhan: 'Cảnh báo', tri: 'Uống quá 3 ly/ngày gây mất ngủ và rung tim nhẹ' }
        ]
    },
    'mitom': {
        tag: 'SINH TỒN & PHÒNG TRỌ [GRID 16x16]',
        tieuDe: 'MÌ TÔM TRỨNG GÁC LỬNG HẢO HẢO',
        moTa: 'Món ăn quốc dân cứu đói thời sinh viên trong căn phòng trọ 15m² gác lửng những ngày cuối tháng cạn ví. Gồm gói mì tôm tôm chua cay, một quả trứng gà lòng đào và vài cọng hành lá.',
        thongSo: [
            { nhan: 'Chi phí mua', tri: '10.000 VND / Bát (Tự nấu)' },
            { nhan: 'Hồi phục thể lực', tri: '+40 Điểm Thể Lực (HP)' },
            { nhan: 'Hiệu ứng Debuff', tri: 'Ăn 3 ngày liên tiếp dính trạng thái "Nóng trong người"' },
            { nhan: 'Mục đích chính', tri: 'Sinh tồn khi cạn ngân sách, tích lũy tiền đóng trọ' }
        ]
    },
    'ghenhua': {
        tag: 'ĐẠO CỤ & ĐƯỜNG PHỐ [GRID 16x16]',
        tieuDe: 'GHẾ NHỰA XANH VỈA HÈ SONG LONG',
        moTa: 'Chiếc ghế nhựa xanh 4 chân huyền thoại có mặt ở khắp các quán trà đá vỉa hè, quán net cỏ và quán ốc đêm. Trong game, đây vừa là đạo cụ ngồi thư giãn, vừa là vũ khí tự vệ cận chiến hữu hiệu.',
        thongSo: [
            { nhan: 'Công năng 1', tri: 'Ngồi đàm đạo với bạn bè, giảm 10% Stress' },
            { nhan: 'Công năng 2 (Võ thuật)', tri: 'Cầm vung gây sát thương diện rộng cho 2-3 kẻ địch' },
            { nhan: 'Độ bền đạo cụ', tri: 'Chịu được 3 cú va đập trước khi gãy' },
            { nhan: 'Địa điểm xuất hiện', tri: 'Quán nước, Cổng trường, Quán nhậu' }
        ]
    },
    'nonbaohiem': {
        tag: 'TRANG BỊ PHÒNG THỦ [GRID 16x16]',
        tieuDe: 'NÓN BẢO HIỂM NỬA ĐẦU CÓ LƯỠI TRAI',
        moTa: 'Trang bị bắt buộc khi tham gia giao thông bằng xe máy tại Việt Nam. Không chỉ tránh bị Cảnh sát giao thông phạt tiền, nón bảo hiểm còn là vật phẩm phòng thủ đầu tối quan trọng khi xảy ra va chạm xô xát.',
        thongSo: [
            { nhan: 'Giá trang bị', tri: '50.000 VND / Chiếc' },
            { nhan: 'Chỉ số Phòng thủ', tri: '+30% Giáp đỡ đòn vùng đầu' },
            { nhan: 'Kỹ năng đặc biệt', tri: 'Phản đòn gây choáng mục tiêu trong 2 lượt khi bị tấn công' },
            { nhan: 'Quy định luật pháp', tri: 'Không đội nón khi đi xe máy bị phạt 250.000 VND' }
        ]
    },
    'xewave': {
        tag: 'PHƯƠNG TIỆN & VIỆC LÀM [GRID 32x32]',
        tieuDe: 'XE MÁY HONDA WAVE ALPHA',
        moTa: 'Chiếc xe máy số đầu đời của hầu hết sinh viên và người lao động Việt Nam. Bền bỉ, tiết kiệm xăng và là phương tiện mở khóa công việc Chạy xe ôm công nghệ / Shipper giao hàng trên ứng dụng GocJob.',
        thongSo: [
            { nhan: 'Giá xe cũ (Sinh viên)', tri: '6.500.000 VND (Mua tại Chợ đồ cũ)' },
            { nhan: 'Tốc độ di chuyển map', tri: 'Nhanh gấp 3.5 lần so với đi bộ' },
            { nhan: 'Mở khóa nghề nghiệp', tri: 'Shipper GocFood, Tài xế GocBike' },
            { nhan: 'Chi phí bảo dưỡng', tri: 'Thay nhớt 100.000 VND / tháng in-game' }
        ]
    },
    'nhanvat': {
        tag: 'HỆ THỐNG MODULAR SPRITE [GRID 32x32]',
        tieuDe: 'NHÂN VẬT PIXEL MODULAR (PAPERDOLL)',
        moTa: 'Khung xương nhân vật chuẩn 32x32 pixel được dựng theo cơ chế phân tầng (Layers). Cho phép tùy biến hàng trăm kiểu ngoại hình bằng cách xếp chồng các lớp trong suốt: Base da, Áo trắng học sinh, Khăn quàng đỏ, Kiểu tóc và Phụ kiện.',
        thongSo: [
            { nhan: 'Kích thước chuẩn', tri: '32 x 32 Pixels (Tỷ lệ 1:1)' },
            { nhan: 'Số hướng di chuyển', tri: '4 hướng (Lên, Xuống, Trái, Phải)' },
            { nhan: 'Hiệu ứng ngoại hình', tri: 'Thâm mắt khi OT quá giờ, Dán băng gạc khi thua đánh lộn' },
            { nhan: 'Hiệu suất Canvas', tri: 'Render 60 FPS cực mượt, không tốn RAM thiết bị' }
        ]
    },

    // 2. LIFE STAGES
    'giaiDoan1': {
        tag: 'GIAI ĐOẠN 01 & 02 [4 - 11 TUỔI]',
        tieuDe: 'TUỔI THƠ XÓM NHỎ & TIỂU HỌC VỠ LÒNG',
        moTa: 'Khởi đầu cuộc đời trong căn nhà ấm cúng và khoảng sân xóm nhỏ. Nhân vật tham gia các trò chơi tuổi thơ như bắn bi, xếp hình lego, tập viết chữ đẹp và nhận những đồng tiền tiêu vặt đầu tiên (5.000đ - 10.000đ/ngày).',
        thongSo: [
            { nhan: 'Chỉ số định hình', tri: 'Trí tuệ (IQ), Cảm xúc (EQ), Thể lực (STR), Sáng tạo (ART)' },
            { nhan: 'Minigame', tri: 'Giải toán nhanh bảng cửu chương, Luyện chữ đẹp, Bắn bi' },
            { nhan: 'Sự kiện rẽ nhánh', tri: 'Vòi đồ chơi ngoài chợ, Giấu bài thi điểm kém' },
            { nhan: 'Ký ức cánh bướm', tri: 'Định hình tính cách độc lập, cần cù hoặc bướng bỉnh' }
        ]
    },
    'giaiDoan2': {
        tag: 'GIAI ĐOẠN 03 & 04 [11 - 18 TUỔI]',
        tieuDe: 'CẤP 2 QUÁN NET CỎ & CẤP 3 LUYỆN THI ĐẠI HỌC',
        moTa: 'Thời thanh xuân sôi nổi với chiếc xe đạp mini, những buổi cúp học ngồi quán Net cỏ đầu ngõ bắn Half-Life/Audition, rung động đầu đời với crush bàn bên và áp lực luyện thi THPT Quốc Gia chọn khối A/B/C/D.',
        thongSo: [
            { nhan: 'Cơ chế nổi bật', tri: 'Cân bằng giữa Điểm hạnh kiểm vs Chỉ số Nổi loạn' },
            { nhan: 'Đấu trường Online', tri: 'Đại chiến quán Net xóm, Thi thử THPT Quốc Gia hàng tuần' },
            { nhan: 'Va chạm & Học võ', tri: 'Đại chiến sau cổng trường, Học Vovinam/Taekwondo bảo vệ crush' },
            { nhan: 'Ngã rẽ cuộc đời', tri: 'Đậu trường Đại học danh giá, Trường thường hoặc Đi học nghề' }
        ]
    },
    'giaiDoan3': {
        tag: 'GIAI ĐOẠN 05 & 06 [18 - 35 TUỔI]',
        tieuDe: 'ĐỜI SINH VIÊN PHÒNG TRỌ & TRƯỞNG THÀNH CÀY CUỐC',
        moTa: 'Bươn chải tại thành phố lớn trong căn phòng trọ 15m² gác lửng nóng nực. Tìm bạn ở ghép chia tiền nhà, làm thêm gia sư/shipper, tốt nghiệp đi làm công sở, bật cơ chế Siêu nhân OT để mua nhà chung cư trả góp và kết hôn.',
        thongSo: [
            { nhan: 'Mô hình việc làm', tri: 'Hợp đồng cố định (Contract Jobs) & Tự do (Freelance / Gig)' },
            { nhan: 'Cơ chế Siêu nhân OT', tri: 'Tăng ca tối đa 16 tiếng/ngày, lương x2 nhưng tăng Stress' },
            { nhan: 'Tương tác Online', tri: 'Ở ghép phòng trọ Co-op, Chợ đồ cũ sinh viên, Thị trường BĐS server' },
            { nhan: 'Tài chính & Đầu tư', tri: 'Gửi tiết kiệm V-Bank, Mua trả góp chung cư, Sắm ô tô' }
        ]
    },
    'giaiDoan4': {
        tag: 'GIAI ĐOẠN 07 [35+ TUỔI & VỀ GIÀ]',
        tieuDe: 'TRUNG NIÊN, HỒI KÝ CUỘC ĐỜI & DI SẢN THẾ HỆ F2',
        moTa: 'Giai đoạn viên mãn nuôi dạy con cái, hoàn thành trách nhiệm gia đình và nghỉ hưu an nhàn. Hệ thống tự động tổng kết toàn bộ thăng trầm thành Thẻ Hồi Ký Cuộc Đời và kích hoạt chế độ Roguelite New Game+ cho đời con F2.',
        thongSo: [
            { nhan: 'Thẻ Hồi Ký', tri: 'Xếp hạng danh hiệu: Đại Phú Hào, Học Bá, hay Người của Gia đình' },
            { nhan: 'Kế thừa thế hệ F2', tri: 'Con cái bắt đầu lại từ 4 tuổi với tài sản thừa kế & Gen vượt trội' },
            { nhan: 'Gia tộc (Clan Dynasty)', tri: 'Xây dựng nhà thờ họ, cấp học bổng phát triển thế hệ sau' }
        ]
    }
};

const gioiThieuView = {
    render: () => {
        return `
        <div class="khung-gioi-thieu">
            <!-- HERO BANNER CHÍNH -->
            <section class="hero-banner">
                <div class="the-tag-tren">[ DỰ ÁN GAME NHẬP VAI VIỆT NAM ]</div>
                
                <div class="hero-thong-tin">
                    <h1 class="hero-tieu-de">
                        TÁI HIỆN <span>TRỌN VẸN MỘT ĐỜI NGƯỜI</span> TRONG TỪNG PIXEL
                    </h1>
                    <p class="hero-mo-ta">
                        Hành trình từ tuổi thơ 4 tuổi xóm nhỏ, cấp 1 bắn bi, cấp 2 quán net cỏ, cấp 3 lò luyện thi, phòng trọ sinh viên 15m² gác lửng đến khi trưởng thành cày OT, học võ tự vệ và để lại di sản cho thế hệ F2.
                    </p>
                    <div class="hero-badges">
                        <span class="badge-item">HTML5 CANVAS 2D</span>
                        <span class="badge-item">PHP REST API</span>
                        <span class="badge-item">PIXEL 16x16 & 32x32</span>
                        <span class="badge-item">KHÔNG DÙNG ICON / KHÔNG DÙNG AI</span>
                    </div>
                    <div class="hero-actions">
                        <a href="#game" class="nut-pixel cam">KHỞI CHẠY BẢN GAMEPLAY DEMO</a>
                        <a href="../Ý tưởng/README.md" class="nut-pixel">XEM TOÀN BỘ 10 MODULE GDD</a>
                    </div>
                </div>

                <!-- TIỂU CẢNH ANIMATED CANVAS SHOWCASE -->
                <div class="khung-canvas-showcase">
                    <div class="canvas-header-bar">
                        <div><span class="canvas-status-dot"></span>TIỂU CẢNH: PHỐ NHỎ & QUÁN NET CỎ (32x32)</div>
                        <div>FPS: 60 [CANVAS 2D]</div>
                    </div>
                    <canvas id="manHinhShowcase" width="360" height="280"></canvas>
                    <div class="canvas-controls">
                        <button class="nut-canvas-mini" onclick="gioiThieuView.moChiTiet('giaiDoan2')">XEM CỐT TRUYỆN QUÁN NET</button>
                        <button class="nut-canvas-mini" onclick="gioiThieuView.moChiTiet('giaiDoan3')">CƠ CHẾ PHÒNG TRỌ SINH VIÊN</button>
                    </div>
                </div>
            </section>

            <!-- BỘ SƯU TẬP MẪU ASSET PIXEL VIỆT NAM (100% ITEM VUÔNG & TƯƠNG TÁC CLICK) -->
            <section class="khung-asset-showcase" id="assetShowcase">
                <div class="tieu-de-phan">
                    <div>
                        <h2 class="tieu-de-chinh-phan">BỘ SƯU TẬP ASSET PIXEL HOÀI NIỆM VIỆT NAM</h2>
                        <p class="tieu-de-phu-phan">BẤM VÀO TỪNG MẪU VẬT PHẨM ĐỂ XEM CHI TIẾT Ý TƯỞNG & THÔNG SỐ IN-GAME</p>
                    </div>
                    <span class="badge-item">QUY CHUẨN PIXEL VUÔNG 100%</span>
                </div>

                <div class="luoi-asset-cards">
                    <!-- ASSET 1: CÀ PHÊ SỮA ĐÁ -->
                    <div class="the-asset-tuong-tac" onclick="gioiThieuView.moChiTiet('caphe')">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">16x16 PIXEL</span>
                            <canvas id="canvasCaPhe" class="asset-canvas-item" width="64" height="64"></canvas>
                            <span class="badge-xem-chi-tiet">[ XEM CHI TIẾT ]</span>
                        </div>
                        <div class="asset-ten">CÀ PHÊ SỮA ĐÁ VỈA HÈ</div>
                        <p class="asset-mo-ta">Thức uống tăng tỉnh táo kinh điển. Buff tăng 20% tốc độ làm việc và tự học trong 2 giờ in-game.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">ẨM THỰC</span>
                            <span class="asset-tag">BUFF TỐC ĐỘ</span>
                        </div>
                    </div>

                    <!-- ASSET 2: MÌ TÔM TRỨNG HẢO HẢO -->
                    <div class="the-asset-tuong-tac" onclick="gioiThieuView.moChiTiet('mitom')">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">16x16 PIXEL</span>
                            <canvas id="canvasMiTom" class="asset-canvas-item" width="64" height="64"></canvas>
                            <span class="badge-xem-chi-tiet">[ XEM CHI TIẾT ]</span>
                        </div>
                        <div class="asset-ten">MÌ TÔM TRỨNG GÁC LỬNG</div>
                        <p class="asset-mo-ta">Món ăn cứu đói thời sinh viên. Giá rẻ 10.000đ, hồi 40 thể lực nhưng ăn nhiều bị nóng trong người.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">SINH TỒN</span>
                            <span class="asset-tag">PHÒNG TRỌ</span>
                        </div>
                    </div>

                    <!-- ASSET 3: GHẾ NHỰA XANH SONG LONG -->
                    <div class="the-asset-tuong-tac" onclick="gioiThieuView.moChiTiet('ghenhua')">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">16x16 PIXEL</span>
                            <canvas id="canvasGheNhua" class="asset-canvas-item" width="64" height="64"></canvas>
                            <span class="badge-xem-chi-tiet">[ XEM CHI TIẾT ]</span>
                        </div>
                        <div class="asset-ten">GHẾ NHỰA XANH VỈA HÈ</div>
                        <p class="asset-mo-ta">Đạo cụ vỉa hè đa năng. Vừa ngồi đàm đạo uống trà đá, vừa là vũ khí tự vệ khi xảy ra đánh lộn.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">ĐẠO CỤ</span>
                            <span class="asset-tag">VÕ ĐƯỜNG PHỐ</span>
                        </div>
                    </div>

                    <!-- ASSET 4: NÓN BẢO HIỂM NỬA ĐẦU -->
                    <div class="the-asset-tuong-tac" onclick="gioiThieuView.moChiTiet('nonbaohiem')">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">16x16 PIXEL</span>
                            <canvas id="canvasNonBH" class="asset-canvas-item" width="64" height="64"></canvas>
                            <span class="badge-xem-chi-tiet">[ XEM CHI TIẾT ]</span>
                        </div>
                        <div class="asset-ten">NÓN BẢO HIỂM NỬA ĐẦU</div>
                        <p class="asset-mo-ta">Trang bị an toàn khi đi xe máy. Tăng 30% giáp vùng đầu và kích hoạt phản đòn khi bị tấn công.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">TRANG BỊ</span>
                            <span class="asset-tag">PHÒNG THỦ</span>
                        </div>
                    </div>

                    <!-- ASSET 5: XE MÁY WAVE ALPHA -->
                    <div class="the-asset-tuong-tac" onclick="gioiThieuView.moChiTiet('xewave')">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">32x32 PIXEL</span>
                            <canvas id="canvasXeWave" class="asset-canvas-item" width="96" height="96"></canvas>
                            <span class="badge-xem-chi-tiet">[ XEM CHI TIẾT ]</span>
                        </div>
                        <div class="asset-ten">XE MÁY WAVE ALPHA</div>
                        <p class="asset-mo-ta">Phương tiện mưu sinh đầu đời. Di chuyển nhanh gấp 3.5 lần, mở khóa nghề Shipper trên GocJob.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">PHƯƠNG TIỆN</span>
                            <span class="asset-tag">MƯU SINH</span>
                        </div>
                    </div>

                    <!-- ASSET 6: SPRITE NHÂN VẬT HỌC SINH -->
                    <div class="the-asset-tuong-tac" onclick="gioiThieuView.moChiTiet('nhanvat')">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">32x32 PIXEL</span>
                            <canvas id="canvasNhanVat" class="asset-canvas-item" width="96" height="96"></canvas>
                            <span class="badge-xem-chi-tiet">[ XEM CHI TIẾT ]</span>
                        </div>
                        <div class="asset-ten">SPRITE NHÂN VẬT MODULAR</div>
                        <p class="asset-mo-ta">Hệ thống ghép mảnh Paperdoll: Khung body, khăn quàng đỏ, áo trắng, kiểu tóc và biểu cảm.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">PAPERDOLL</span>
                            <span class="asset-tag">LAYER 32x32</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 7 GIAI ĐOẠN CUỘC ĐỜI (TƯƠNG TÁC CLICK) -->
            <section class="khung-asset-showcase">
                <div class="tieu-de-phan">
                    <div>
                        <h2 class="tieu-de-chinh-phan">HÀNH TRÌNH 7 GIAI ĐOẠN CUỘC ĐỜI</h2>
                        <p class="tieu-de-phu-phan">BẤM VÀO TỪNG GIAI ĐOẠN ĐỂ XEM CHI TIẾT CƠ CHẾ SINH TỒN & RẼ NHÁNH</p>
                    </div>
                </div>

                <div class="luoi-giai-doan">
                    <div class="the-giai-doan-tuong-tac" onclick="gioiThieuView.moChiTiet('giaiDoan1')">
                        <span class="giai-doan-so">[ GIAI ĐOẠN 01 - 02 ]</span>
                        <h3 class="giai-doan-ten">TUỔI THƠ & TIỂU HỌC (4 - 11 TUỔI)</h3>
                        <p class="giai-doan-mo-ta">Sân xóm nhỏ, bắn bi, tập viết chữ đẹp, tiền tiêu vặt 5.000đ/ngày, hình thành chỉ số gốc IQ/EQ/STR.</p>
                        <div class="giai-doan-highlight">MINIGAME: GIẢI TOÁN ĐỐ, BẮN BI & CHỢ ĐỔI THẺ BÀI [BẤM ĐỂ XEM]</div>
                    </div>

                    <div class="the-giai-doan-tuong-tac" onclick="gioiThieuView.moChiTiet('giaiDoan2')">
                        <span class="giai-doan-so">[ GIAI ĐOẠN 03 - 04 ]</span>
                        <h3 class="giai-doan-ten">CẤP 2 & CẤP 3 (11 - 18 TUỔI)</h3>
                        <p class="giai-doan-mo-ta">Xe đạp mini, quán net cỏ xóm, cảm nắng crush bàn bên, áp lực luyện thi THPT Quốc Gia chọn khối A/B/C/D.</p>
                        <div class="giai-doan-highlight">ĐẤU TRƯỜNG: THI THỬ THPT ONLINE & ĐẠI CHIẾN CỔNG TRƯỜNG [BẤM ĐỂ XEM]</div>
                    </div>

                    <div class="the-giai-doan-tuong-tac" onclick="gioiThieuView.moChiTiet('giaiDoan3')">
                        <span class="giai-doan-so">[ GIAI ĐOẠN 05 - 06 ]</span>
                        <h3 class="giai-doan-ten">ĐẠI HỌC & TRƯỞNG THÀNH (18 - 35 TUỔI)</h3>
                        <p class="giai-doan-mo-ta">Phòng trọ 15m² gác lửng, ở ghép roommate, làm thêm part-time, cơ chế Siêu nhân OT, mua nhà trả góp.</p>
                        <div class="giai-doan-highlight">CƠ CHẾ: Ở GHÉP TRỌ, CÀY OT 16H & ĐÁM CƯỚI ONLINE [BẤM ĐỂ XEM]</div>
                    </div>

                    <div class="the-giai-doan-tuong-tac" onclick="gioiThieuView.moChiTiet('giaiDoan4')">
                        <span class="giai-doan-so">[ GIAI ĐOẠN 07 ]</span>
                        <h3 class="giai-doan-ten">TRUNG NIÊN & DI SẢN THẾ HỆ F2 (35+ TUỔI)</h3>
                        <p class="giai-doan-mo-ta">Tổng kết Thẻ Hồi Ký Cuộc Đời và kích hoạt New Game+ chuyển giao quỹ tài sản thừa kế cho con cái F2.</p>
                        <div class="giai-doan-highlight">ROGUELITE: THẾ HỆ F2 THỪA KẾ TÀI SẢN & GEN DI TRUYỀN [BẤM ĐỂ XEM]</div>
                    </div>
                </div>
            </section>
        </div>

        <!-- MODAL HIỂN THỊ CHI TIẾT Ý TƯỞNG KHI BẤM (MẶC ĐỊNH ẨN) -->
        <div id="modalChiTiet" class="khung-modal-overlay" style="display: none;" onclick="if(event.target === this) gioiThieuView.dongChiTiet();">
            <div class="hop-modal-chi-tiet">
                <div class="modal-header">
                    <span class="modal-tag" id="modalTag">[ CHI TIẾT GAME DESIGN ]</span>
                    <button class="modal-nut-dong" onclick="gioiThieuView.dongChiTiet()">[ ĐÓNG CỬA SỔ ]</button>
                </div>
                <div class="modal-body">
                    <h2 class="modal-tieu-de" id="modalTieuDe">TIÊU ĐỀ Ý TƯỞNG</h2>
                    <p class="modal-noi-dung-chinh" id="modalMoTa">Nội dung mô tả chi tiết...</p>
                    
                    <div class="modal-thong-so-hop">
                        <div style="font-weight: bold; color: var(--mau-chu-chinh); margin-bottom: 6px; border-bottom: 2px solid var(--mau-vien-pixel); padding-bottom: 4px;">
                            BẢNG THÔNG SỐ VÀ CƠ CHẾ GAMEPLAY LIÊN QUAN:
                        </div>
                        <div id="modalThongSoDanhSach">
                            <!-- Dữ liệu được nhúng động -->
                        </div>
                    </div>

                    <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px;">
                        <button class="nut-pixel vang" onclick="gioiThieuView.dongChiTiet()">ĐÃ HIỂU Ý TƯỞNG</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    sauKhiRender: () => {
        if (window.khoiTaoAssetItems) window.khoiTaoAssetItems();
        if (window.khoiTaoMainShowcase) window.khoiTaoMainShowcase();
    },

    moChiTiet: (khoaDuLieu) => {
        const duLieu = DULIEU_CHITIET_YTUONG[khoaDuLieu];
        if (!duLieu) return;

        document.getElementById('modalTag').innerText = duLieu.tag;
        document.getElementById('modalTieuDe').innerText = duLieu.tieuDe;
        document.getElementById('modalMoTa').innerText = duLieu.moTa;

        const containerThongSo = document.getElementById('modalThongSoDanhSach');
        containerThongSo.innerHTML = '';

        if (duLieu.thongSo && duLieu.thongSo.length > 0) {
            duLieu.thongSo.forEach(ts => {
                const hang = document.createElement('div');
                hang.className = 'modal-thong-so-hang';
                hang.innerHTML = `
                    <span class="modal-thong-so-nhan">${ts.nhan}:</span>
                    <span class="modal-thong-so-tri">${ts.tri}</span>
                `;
                containerThongSo.appendChild(hang);
            });
        }

        const modal = document.getElementById('modalChiTiet');
        if (modal) {
            modal.style.display = 'flex';
        }
    },

    dongChiTiet: () => {
        const modal = document.getElementById('modalChiTiet');
        if (modal) {
            modal.style.display = 'none';
        }
    }
};
