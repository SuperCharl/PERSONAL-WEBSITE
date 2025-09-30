# Charlie Scott - Personal Website

一個展示 Charlie Scott 個人品牌的現代化個人網站，展現其作為科技創業家和風險投資合夥人的專業形象。

## 🌟 專案特色

- **現代化設計**：採用簡潔的黑白配色和專業的視覺呈現
- **響應式佈局**：完美適配桌面和移動設備
- **個人品牌展示**：全面展示創業經歷、投資組合和專業成就
- **專業作品集**：詳細的工作經歷和投資案例展示
- **社交媒體整合**：連結 Twitter、LinkedIn 和 Medium 等平台

## 🚀 技術棧

- **前端框架**：[Next.js 15.5.4](https://nextjs.org/) with App Router
- **開發語言**：TypeScript
- **樣式框架**：[Tailwind CSS 4.0](https://tailwindcss.com/)
- **UI 組件**：React 19.1.0
- **開發工具**：ESLint、Turbopack

## 📁 專案結構

```
personal-website/
├── app/                    # Next.js App Router 目錄
│   ├── layout.tsx         # 全局佈局組件
│   ├── page.tsx           # 首頁（關於 Charlie）
│   └── work/              # 工作經歷頁面
│       └── page.tsx       # 專業經驗展示
├── public/                # 靜態資源
├── package.json          # 依賴配置
├── tsconfig.json         # TypeScript 配置
├── tailwind.config.js    # Tailwind CSS 配置
└── README.md             # 專案文檔
```

## 🏃‍♂️ 快速開始

### 環境要求

- Node.js 18.0 或更高版本
- npm、yarn、pnpm 或 bun

### 安裝與運行

1. **克隆專案**
   ```bash
   git clone https://github.com/SuperCharl/PERSONAL-WEBSITE.git
   cd PERSONAL-WEBSITE
   ```

2. **安裝依賴**
   ```bash
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   ```

3. **啟動開發服務器**
   ```bash
   npm run dev
   # 或
   yarn dev
   # 或
   pnpm dev
   ```

4. **打開瀏覽器**

   訪問 [http://localhost:3000](http://localhost:3000) 查看網站

## 📋 可用指令

```bash
# 開發模式（使用 Turbopack）
npm run dev

# 構建生產版本
npm run build

# 啟動生產服務器
npm run start

# 程式碼檢查
npm run lint
```

## 🎨 頁面功能

### 首頁 (`/`)
- **個人簡介**：詳細的背景介紹和職業歷程
- **專業照片**：個人形象展示
- **核心理念**：創業和投資哲學分享
- **社交連結**：Twitter、LinkedIn、Medium 等平台
- **最新思考**：文章和觀點分享
- **聯繫資訊**：專業聯繫方式

### 工作經歷頁面 (`/work`)
- **當前職位**：TechVenture Capital 管理合夥人
- **職業時間軸**：從軟體工程師到創業家再到投資人的完整歷程
- **投資組合**：展示重要的投資案例和成果
- **專業技能**：投資領域和技術專長
- **成就統計**：投資組合數量、獨角獸企業、退出案例等
- **獲獎記錄**：Forbes 40 Under 40、TechCrunch Top VC 等榮譽

## 🎯 關鍵特色

### 設計亮點
- **專業配色**：黑色標題欄搭配白色主體，展現專業形象
- **響應式設計**：移動端和桌面端完美適配
- **視覺層次**：清晰的信息架構和視覺引導
- **交互效果**：按鈕懸停、連結過渡等用戶體驗優化

### 內容展示
- **創業經歷**：CloudSync 創辦和被微軟收購的完整故事
- **投資成果**：150+ 投資組合、5 家獨角獸企業、3.2x 基金回報
- **行業專精**：AI、區塊鏈、氣候科技、健康科技等前沿領域
- **思想分享**：定期發表對科技趨勢和創業的深度思考

## 🚀 部署

### Vercel 部署（推薦）

1. 將專案推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中導入專案
3. Vercel 會自動檢測 Next.js 並進行配置
4. 部署完成後即可通過 Vercel 提供的 URL 訪問

### 其他部署選項

- **Netlify**：支援 Next.js 靜態導出
- **AWS**：使用 AWS Amplify 或 EC2
- **Digital Ocean**：使用 App Platform
- **自建服務器**：使用 `npm run build` 和 `npm run start`

## 🛠️ 開發指南

### 自定義內容

1. **修改個人信息**：編輯 `app/page.tsx` 中的個人介紹
2. **更新工作經歷**：修改 `app/work/page.tsx` 中的職業信息
3. **替換照片**：更新圖片 URL 或上傳到 `public` 目錄
4. **調整樣式**：通過 Tailwind CSS 類名進行視覺調整

### 添加新頁面

在 `app` 目錄下創建新文件夾和 `page.tsx` 文件：

```typescript
// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div>
      <h1>我的博客</h1>
      {/* 頁面內容 */}
    </div>
  );
}
```

### 性能優化

- 使用 Next.js Image 組件優化圖片加載
- 實施代碼分割和懶加載
- 配置 CDN 加速靜態資源
- 啟用 Gzip 壓縮

## 📄 許可證

© 2025 Charlie Scott. 保留所有權利。

---

## 🔗 相關連結

- **網站地址**：https://github.com/SuperCharl/PERSONAL-WEBSITE
- **作者**：Charlie Scott
- **聯繫方式**：charlie.scott@techventure.com
- **社交媒體**：
  - Twitter: [@CharlieScott](https://twitter.com/charliescott)
  - LinkedIn: [Charlie Scott](https://linkedin.com/in/charliescott)
  - Medium: [@charliescott](https://medium.com/@charliescott)

---

*Built with ❤️ using Next.js and Tailwind CSS*