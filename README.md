# Care Project

Modern ve kullanıcı dostu bir bakım ve hizmet uygulaması için Next.js frontend sistemi.

## 🚀 Özellikler

- **Next.js 14** - React framework
- **Responsive Design** - Mobil ve desktop uyumlu
- **Shopping Cart** - Sepet yönetimi
- **Product Catalog** - Ürün kataloğu
- **Category Management** - Kategori yönetimi
- **Search Functionality** - Arama özelliği
- **User Authentication** - Kullanıcı girişi
- **Modern UI/UX** - Tailwind CSS ile tasarım

## 🛠️ Teknoloji Stack

### Frontend Framework
- **Next.js 14** - React framework
- **React 18** - UI library
- **JavaScript (ES6+)** - Programming language

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Custom Components** - Reusable UI components

### State Management
- **React Context** - Global state management
- **Cart Context** - Shopping cart state

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Vercel** - Deployment platform

## 📁 Proje Yapısı

```
care-project/
├── public/
│   ├── fonts/                 # Custom fonts
│   └── images/                # Static images
├── src/
│   ├── components/            # Reusable components
│   │   ├── Layout/           # Layout components
│   │   ├── ProductContainer.js
│   │   ├── ProductDetail.js
│   │   ├── SearchBar.js
│   │   ├── TabSelection.js
│   │   └── TopBar.js
│   ├── context/               # React Context
│   │   └── CartContext.js    # Shopping cart state
│   ├── pages/                 # Next.js pages
│   │   ├── api/              # API routes
│   │   ├── cart.js           # Shopping cart page
│   │   ├── category/         # Category pages
│   │   ├── product/          # Product detail pages
│   │   ├── createaccount.js  # Registration page
│   │   ├── loginpage.js      # Login page
│   │   └── search.js         # Search results page
│   └── styles/                # Global styles
│       └── globals.css       # Tailwind CSS
├── package.json               # Dependencies
├── tailwind.config.cjs        # Tailwind configuration
└── next.config.mjs            # Next.js configuration
```

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Adım 1: Repository'yi klonlayın
```bash
git clone https://github.com/FeyzaNurKaya/care-project.git
cd care-project
```

### Adım 2: Bağımlılıkları yükleyin
```bash
npm install
# veya
yarn install
```

### Adım 3: Development server'ı başlatın
```bash
npm run dev
# veya
yarn dev
```

### Adım 4: Tarayıcıda açın
Uygulama [http://localhost:3000](http://localhost:3000) adresinde çalışacaktır.

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Environment Variables

`.env.local` dosyası oluşturun:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 📱 Sayfa Yapısı

### Ana Sayfalar
- **Home** (`/`) - Ana sayfa, ürün listesi
- **Products** (`/product/[id]`) - Ürün detay sayfası
- **Categories** (`/category/[id]`) - Kategori sayfası
- **Search** (`/search`) - Arama sonuçları
- **Cart** (`/cart`) - Alışveriş sepeti

### Authentication
- **Login** (`/loginpage`) - Giriş sayfası
- **Register** (`/createaccount`) - Kayıt sayfası

## 🛒 Özellikler Detayı

### Shopping Cart
- Ürün ekleme/çıkarma
- Miktar güncelleme
- Sepet toplamı hesaplama
- Local storage ile kalıcılık

### Product Management
- Ürün listesi görüntüleme
- Kategori bazlı filtreleme
- Ürün detay sayfaları
- Responsive ürün kartları

### Search & Filter
- Gerçek zamanlı arama
- Kategori bazlı filtreleme
- Arama sonuçları sayfası

### Responsive Design
- Mobile-first approach
- Tablet ve desktop uyumlu
- Touch-friendly interface

## 🎨 UI Components

### Layout Components
- **Header** - Navigation ve logo
- **Footer** - Alt bilgi ve linkler
- **Layout** - Ana sayfa yapısı

### Product Components
- **ProductContainer** - Ürün listesi
- **ProductDetail** - Ürün detayları
- **SearchBar** - Arama çubuğu
- **TabSelection** - Sekme seçimi

### Utility Components
- **TopBar** - Üst bilgi çubuğu
- **BottomPart** - Alt kısım

## 🔌 API Integration

Proje backend API ile entegre çalışır:
- Product endpoints
- Category endpoints
- User authentication
- Search functionality

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
```

## 🚀 Deployment

### Vercel (Önerilen)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# dist/ klasörünü Netlify'a yükleyin
```

### Manual Deployment
```bash
npm run build
npm start
```

## 🧪 Testing

```bash
# Test çalıştırma (eğer test kurulumu varsa)
npm test

# Test coverage
npm run test:coverage
```

## 📝 Contributing

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 🐛 Known Issues

- [Issue listesi buraya eklenebilir]

## 🔮 Roadmap

- [ ] PWA desteği
- [ ] Offline functionality
- [ ] Advanced filtering
- [ ] User reviews
- [ ] Payment integration

## 📄 License

Bu proje MIT lisansı altında lisanslanmıştır.

## 👥 Team

- **Feyza Nur Kaya** - [GitHub](https://github.com/FeyzaNurKaya)

