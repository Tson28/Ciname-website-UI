# Ciname-website-UI
# 🎬 CineMax - Website Đặt Vé Rạp Chiếu Phim

Website đặt vé rạp chiếu phim hiện đại được xây dựng với Next.js, cung cấp trải nghiệm đặt vé mượt mà và giao diện đẹp mắt.

## ✨ Tính năng

- 🎥 **Trang chủ với Hero Banner**: Hiển thị phim đang chiếu nổi bật
- 🎭 **Lọc phim theo thể loại**: Action, Drama, Sci-Fi, Horror, Comedy
- 📅 **Lịch chiếu nhanh**: Xem các suất chiếu sắp tới
- 🎬 **Danh sách phim đang chiếu**: Grid layout với rating và thông tin chi tiết
- 🔜 **Phim sắp chiếu**: Preview các bộ phim sắp ra mắt
- 🎫 **Chi tiết phim**: Trang thông tin chi tiết về từng bộ phim
- ⏰ **Chọn suất chiếu**: Lựa chọn thời gian xem phim
- 💺 **Chọn ghế ngồi**: Giao diện chọn ghế trực quan với bản đồ rạp
- 🎁 **Khuyến mãi đặc biệt**: Hiển thị các ưu đãi và chương trình khuyến mãi
- 📍 **Vị trí rạp**: Danh sách các rạp chiếu phim
- 🌙 **Dark Mode**: Giao diện tối với theme provider
- 📱 **Responsive Design**: Tối ưu cho mọi thiết bị

## 🛠️ Công nghệ sử dụng

### Framework & Core
- **Next.js 16** - React framework với App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Component library dựa trên Radix UI
- **Lucide React** - Icon library
- **next-themes** - Theme management

### UI Components
- **Radix UI** - Headless UI components
- **Embla Carousel** - Carousel component
- **Sonner** - Toast notifications
- **Recharts** - Chart library

### Form & Validation
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Utilities
- **date-fns** - Date manipulation
- **clsx** & **tailwind-merge** - Class name utilities
- **class-variance-authority** - Component variants

### Analytics
- **Vercel Analytics** - Web analytics

## 📦 Cài đặt

### Yêu cầu
- Node.js 18+ 
- pnpm (hoặc npm/yarn)

### Các bước cài đặt

1. **Clone repository**
```bash
git clone <repository-url>
cd "Cinema website UI"
```

2. **Cài đặt dependencies**
```bash
pnpm install
```

3. **Chạy development server**
```bash
pnpm dev
```

4. **Mở trình duyệt**
Truy cập [http://localhost:3000](http://localhost:3000)

## 🚀 Scripts có sẵn

- `pnpm dev` - Chạy development server
- `pnpm build` - Build production
- `pnpm start` - Chạy production server
- `pnpm lint` - Chạy ESLint

## 📁 Cấu trúc dự án

```
Cinema website UI/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Trang chủ
│   └── movie/
│       └── [id]/          # Dynamic route cho chi tiết phim
│           ├── page.tsx   # Trang chi tiết phim
│           └── seats/
│               └── page.tsx # Trang chọn ghế
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── movie-carousel.tsx
│   ├── movie-grid.tsx
│   ├── navigation.tsx
│   ├── theater-locations.tsx
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets (images, icons)
├── styles/               # Additional styles
├── components.json       # shadcn/ui config
├── next.config.mjs       # Next.js config
├── package.json          # Dependencies
├── postcss.config.mjs    # PostCSS config
└── tsconfig.json         # TypeScript config
```

## 🎨 Tính năng UI/UX

- **Glassmorphism**: Hiệu ứng kính mờ với backdrop-blur
- **Gradient Effects**: Sử dụng gradient cho buttons và accents
- **Smooth Animations**: Transitions và hover effects mượt mà
- **Responsive Grid**: Layout tự động điều chỉnh theo màn hình
- **Interactive Elements**: Hover states và visual feedback
- **Accessibility**: Components tuân thủ accessibility standards

## 📄 Trang và Routes

- `/` - Trang chủ với danh sách phim
- `/movie/[id]` - Chi tiết phim và chọn suất chiếu
- `/movie/[id]/seats` - Chọn ghế ngồi

## 🔧 Cấu hình

### Tailwind CSS
Cấu hình Tailwind được đặt trong `app/globals.css` với custom color scheme và CSS variables.

### shadcn/ui
Cấu hình components trong `components.json` với style "new-york" và base color "neutral".

## 🎯 Tính năng sắp tới

- [ ] Tích hợp thanh toán
- [ ] Xác thực người dùng
- [ ] Lịch sử đặt vé
- [ ] Đánh giá phim
- [ ] Trailer phim
- [ ] Tìm kiếm phim
- [ ] Bộ lọc nâng cao

## 📝 License

Private project - All rights reserved

## 👨‍💻 Development

Dự án này được xây dựng với:
- Next.js App Router cho routing
- Server Components và Client Components
- TypeScript cho type safety
- Tailwind CSS cho styling
- shadcn/ui cho component library

---

Made with ❤️ using Next.js and Tailwind CSS

