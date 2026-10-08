/**
 * GÓC NHỎ CUỘC SỐNG (gocnhocuocsong.io)
 * Template View: Giới thiệu dự án (Pixel 32x32 Bright Retro Showcase)
 * Tuyệt đối không dùng Icon/Emoji
 */

const gioiThieuView = {
    render: () => {
        return `
        <div class="khung-gioi-thieu">
            <!-- HERO BANNER -->
            <section class="hero-banner">
                <div class="the-tag-tren">[ DU AN GAME PIXEL VIET NAM ]</div>
                
                <div class="hero-thong-tin">
                    <h1 class="hero-tieu-de">
                        TAI HIEN <span>TRON VEN MOT DOI NGUOI</span> TRONG TUNG PIXEL
                    </h1>
                    <p class="hero-mo-ta">
                        Tuoi tho 4 tuoi xom nho, cap 1 choi bi, cap 2 net co, cap 3 luyen thi, phong tro sinh vien 15m2 gac lung den khi truong thanh, cay cuoc OT, luyen vo tu ve va de lai di san cho the he F2.
                    </p>
                    <div class="hero-badges">
                        <span class="badge-item">HTML5 CANVAS 2D</span>
                        <span class="badge-item">PHP REST API</span>
                        <span class="badge-item">PIXEL 16x16 & 32x32</span>
                        <span class="badge-item">NO ICONS / NO AI 64x64</span>
                    </div>
                    <div class="hero-actions">
                        <a href="#game" class="nut-pixel cam">KHOI CHAY GAME DEMO</a>
                        <a href="../Ý tưởng/README.md" class="nut-pixel">XEM TAI LIEU GDD</a>
                    </div>
                </div>

                <!-- TIỂU CẢNH ANIMATED CANVAS SHOWCASE -->
                <div class="khung-canvas-showcase">
                    <div class="canvas-header-bar">
                        <div><span class="canvas-status-dot"></span>TIEU CANH: PHO NHO & QUAN NET CO (32x32)</div>
                        <div>FPS: 60 [CANVAS 2D]</div>
                    </div>
                    <canvas id="manHinhShowcase" width="360" height="280"></canvas>
                    <div class="canvas-controls">
                        <button class="nut-canvas-mini" onclick="alert('Toc do thoi gian: 24h game = 45 phut thuc')">NHIP THOI GIAN</button>
                        <button class="nut-canvas-mini" onclick="alert('Map gom: Xom nho, Quan Net, Truong hoc, Nha tro, Cong ty')">BAN DO KHU PHO</button>
                    </div>
                </div>
            </section>

            <!-- SHOWCASE MẪU ASSET PIXEL VIỆT NAM (16x16 & 32x32) -->
            <section class="khung-asset-showcase" id="assetShowcase">
                <div class="tieu-de-phan">
                    <div>
                        <h2 class="tieu-de-chinh-phan">BO SUU TAP ASSET PIXEL HOAI NIEM VIET NAM</h2>
                        <p class="tieu-de-phu-phan">QUY CHUAN PIXEL PERFECT 16x16 VA 32x32 - TU VE 100% THUAN NET</p>
                    </div>
                    <span class="badge-item">KHONG DUNG ICON / EMOJI</span>
                </div>

                <div class="luoi-asset-cards">
                    <!-- ASSET 1: CÀ PHÊ SỮA ĐÁ -->
                    <div class="the-asset">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">16x16 PIXEL</span>
                            <canvas id="canvasCaPhe" class="asset-canvas-item" width="64" height="64"></canvas>
                        </div>
                        <div class="asset-ten">LY CA PHE SUA DA</div>
                        <p class="asset-mo-ta">Do uong kinh dien via he. Buff tang 20% toc do lam viec va hoc tap trong 2 gio in-game.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">AM THUC</span>
                            <span class="asset-tag">BUFF TOC DO</span>
                        </div>
                    </div>

                    <!-- ASSET 2: MÌ TÔM TRỨNG HẢO HẢO -->
                    <div class="the-asset">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">16x16 PIXEL</span>
                            <canvas id="canvasMiTom" class="asset-canvas-item" width="64" height="64"></canvas>
                        </div>
                        <div class="asset-ten">MI TOM TRUNG GAC LUNG</div>
                        <p class="asset-mo-ta">Mon an sinh ton thoi sinh vien. Gia re 10k, hoi 40 the luc nhung an nhieu bi nong.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">SINH TON</span>
                            <span class="asset-tag">PHONG TRO</span>
                        </div>
                    </div>

                    <!-- ASSET 3: GHẾ NHỰA XANH SONG LONG -->
                    <div class="the-asset">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">16x16 PIXEL</span>
                            <canvas id="canvasGheNhua" class="asset-canvas-item" width="64" height="64"></canvas>
                        </div>
                        <div class="asset-ten">GHE NHUA VIA HE</div>
                        <p class="asset-mo-ta">Dao cu via he dac trung. Vua dung de ngoi uong tra da, vua la vu khi tu ve danh lon.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">DAO CU</span>
                            <span class="asset-tag">VO DUONG PHO</span>
                        </div>
                    </div>

                    <!-- ASSET 4: NÓN BẢO HIỂM NỬA ĐẦU -->
                    <div class="the-asset">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">16x16 PIXEL</span>
                            <canvas id="canvasNonBH" class="asset-canvas-item" width="64" height="64"></canvas>
                        </div>
                        <div class="asset-ten">NON BAO HIEM NUA DAU</div>
                        <p class="asset-mo-ta">Trang bi bat buoc khi di xe may. Tang 30% giap phong thu dau khi xay ra va cham.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">TRANG BI</span>
                            <span class="asset-tag">PHONG THU</span>
                        </div>
                    </div>

                    <!-- ASSET 5: XE MÁY WAVE ALPHA -->
                    <div class="the-asset">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">32x32 PIXEL</span>
                            <canvas id="canvasXeWave" class="asset-canvas-item" width="96" height="96"></canvas>
                        </div>
                        <div class="asset-ten">XE MAY WAVE ALPHA</div>
                        <p class="asset-mo-ta">Chiec xe may dau doi thoi sinh vien. Di chuyen nhanh gap 3 lan, mo khoa nghe Shipper.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">PHUONG TIEN</span>
                            <span class="asset-tag">GOCJOB</span>
                        </div>
                    </div>

                    <!-- ASSET 6: SPRITE NHÂN VẬT HỌC SINH -->
                    <div class="the-asset">
                        <div class="asset-preview-box">
                            <span class="badge-grid-size">32x32 PIXEL</span>
                            <canvas id="canvasNhanVat" class="asset-canvas-item" width="96" height="96"></canvas>
                        </div>
                        <div class="asset-ten">SPRITE NHAN VAT MODULAR</div>
                        <p class="asset-mo-ta">Khung xuong 32x32 ghep layer: Base body + Khan quang do + Ao trang + Toc.</p>
                        <div class="asset-tags">
                            <span class="asset-tag">PAPERDOLL</span>
                            <span class="asset-tag">LAYER 32x32</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- 7 GIAI ĐOẠN CUỘC ĐỜI -->
            <section class="khung-asset-showcase">
                <div class="tieu-de-phan">
                    <div>
                        <h2 class="tieu-de-chinh-phan">HANH TRINH 7 GIAI DOAN CUOC DOI</h2>
                        <p class="tieu-de-phu-phan">TU TUOI THO DEN DI SAN THE HE F2</p>
                    </div>
                </div>

                <div class="luoi-giai-doan">
                    <div class="the-giai-doan">
                        <span class="giai-doan-so">[ ACT 01 - 02 ]</span>
                        <h3 class="giai-doan-ten">TUOI THO & CAP 1 (4 - 11T)</h3>
                        <p class="giai-doan-mo-ta">Xom nho, ban bi, tap viet chu dep, tien tieu vat 5k/ngay, hinh thanh chi so goc IQ/EQ/STR.</p>
                        <div class="giai-doan-highlight">MINIGAME: GIAI TOAN DO, BAN BI & CHO DOI THE BAI</div>
                    </div>

                    <div class="the-giai-doan">
                        <span class="giai-doan-so">[ ACT 03 - 04 ]</span>
                        <h3 class="giai-doan-ten">CAP 2 & CAP 3 (11 - 18T)</h3>
                        <p class="giai-doan-mo-ta">Xe dap mini, quan net co, cam nang crush, ap luc luyen thi THPT Quoc Gia chon khoi A/B/C/D.</p>
                        <div class="giai-doan-highlight">DAU TRUONG: THI THU ONLINE & DAI CHIEN CONG TRUONG</div>
                    </div>

                    <div class="the-giai-doan">
                        <span class="giai-doan-so">[ ACT 05 - 06 ]</span>
                        <h3 class="giai-doan-ten">DAI HOC & TRUONG THANH (18 - 35T)</h3>
                        <p class="giai-doan-mo-ta">Phong tro 15m2 gac lung, o ghep roommate, lam them part-time, che do Sieu nhan OT, ket hon.</p>
                        <div class="giai-doan-highlight">CO CHE: O GHEP TRO, CAY OT 16H & MUA NHA TRA GOP</div>
                    </div>

                    <div class="the-giai-doan">
                        <span class="giai-doan-so">[ ACT 07 ]</span>
                        <h3 class="giai-doan-ten">TRUNG NIEN & DI SAN F2 (35+ T)</h3>
                        <p class="giai-doan-mo-ta">Tong ket The Hoi Ky Cuoc Doi va kich hoat New Game+ chuyen giao quy thua ke cho con cai F2.</p>
                        <div class="giai-doan-highlight">ROGUELITE: F2 THUA KE TAI SAN & GEN DI TRUYEN</div>
                    </div>
                </div>
            </section>
        </div>
        `;
    },

    sauKhiRender: () => {
        if (window.khoiTaoAssetItems) window.khoiTaoAssetItems();
        if (window.khoiTaoMainShowcase) window.khoiTaoMainShowcase();
    }
};
