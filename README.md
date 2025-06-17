# Product CRUD Application

Aplikasi CRUD (Create, Read, Update, Delete) sederhana untuk manajemen produk menggunakan React.js sebagai frontend dan Node.js/Express sebagai backend yang terhubung ke AWS RDS MySQL.

## 🚀 Fitur

- ✅ **CRUD Product**: Create, Read, Update, Delete produk
- ✅ **Search & Filter**: Pencarian produk berdasarkan nama/deskripsi dan filter kategori
- ✅ **Pagination**: Navigasi halaman untuk performa optimal
- ✅ **Responsive Design**: Tampilan yang responsif di semua device
- ✅ **Real-time Updates**: Data yang selalu ter-update
- ✅ **Form Validation**: Validasi input yang komprehensif
- ✅ **Error Handling**: Penanganan error yang baik
- ✅ **AWS RDS Integration**: Terhubung langsung ke AWS RDS MySQL

## 💾 Teknologi yang Digunakan

### Frontend
- **React.js 19** - UI Library
- **Axios** - HTTP Client
- **CSS3** - Styling dengan modern design

### Backend
- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **MySQL2** - MySQL Driver dengan Promise support
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment Variables

### Database
- **AWS RDS MySQL** - Cloud Database Service

## 📁 Struktur Project

```
react-product-crud/
├── backend/
│   ├── config/
│   │   └── database.js         # Konfigurasi database
│   ├── controllers/
│   │   └── productController.js # Logic bisnis products
│   ├── models/
│   │   └── Product.js          # Model Product
│   ├── routes/
│   │   └── productRoutes.js    # API Routes
│   ├── .env                    # Environment Variables
│   ├── package.json
│   └── server.js               # Server utama
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.js      # Komponen card produk
│   │   │   ├── ProductCard.css
│   │   │   ├── ProductForm.js      # Form add/edit produk
│   │   │   └── ProductForm.css
│   │   ├── hooks/
│   │   │   └── useProducts.js      # Custom hooks
│   │   ├── pages/
│   │   │   ├── Products.js         # Halaman utama
│   │   │   └── Products.css
│   │   ├── services/
│   │   │   └── api.js              # API service layer
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── .env                    # Environment Variables
│   └── package.json
├── database/
│   ├── schema.sql              # Database schema
│   └── sample_data.sql         # Sample data
└── README.md
```

## 🚑 Setup AWS RDS MySQL

### 1. Buat RDS Instance

1. **Login ke AWS Console**
   - Buka [AWS Console](https://console.aws.amazon.com/)
   - Masuk ke service **RDS**

2. **Create Database**
   - Klik **"Create database"**
   - Pilih **"Standard create"**
   - Engine type: **MySQL**
   - Version: **MySQL 8.0** (recommended)

3. **Database Settings**
   ```
   DB instance identifier: product-db
   Master username: admin
   Master password: [buat password yang kuat]
   ```

4. **Instance Configuration**
   - DB instance class: **db.t3.micro** (Free tier eligible)
   - Storage type: **General Purpose SSD (gp2)**
   - Allocated storage: **20 GB**

5. **Connectivity**
   - Virtual Private Cloud (VPC): Default VPC
   - Public access: **Yes** (untuk development)
   - VPC security group: Buat baru atau gunakan yang ada

6. **Database Options**
   ```
   Initial database name: product_db
   Port: 3306
   ```

### 2. Konfigurasi Security Group

1. **Edit Security Group**
   - Masuk ke **EC2 Console**
   - Pilih **Security Groups**
   - Edit security group yang digunakan RDS

2. **Add Inbound Rules**
   ```
   Type: MySQL/Aurora
   Protocol: TCP
   Port: 3306
   Source: 0.0.0.0/0 (untuk development)
   ```
   
   ⚠️ **Warning**: Untuk production, batasi source IP hanya untuk server aplikasi Anda!

### 3. Test Koneksi

```bash
# Install MySQL client (jika belum ada)
# macOS
brew install mysql-client

# Ubuntu/Debian
sudo apt install mysql-client

# CentOS/RHEL
sudo yum install mysql

# Test koneksi
mysql -h your-rds-endpoint.region.rds.amazonaws.com -P 3306 -u admin -p
```

### 4. Import Database Schema

```bash
# Import schema
mysql -h your-rds-endpoint.region.rds.amazonaws.com -P 3306 -u admin -p < database/schema.sql

# Import sample data
mysql -h your-rds-endpoint.region.rds.amazonaws.com -P 3306 -u admin -p < database/sample_data.sql
```

## 🔧 Instalasi dan Setup Local

### Prerequisites

- **Node.js** (v16 atau lebih baru)
- **npm** atau **yarn**
- **AWS RDS MySQL** instance yang sudah running
- **Git**

### 1. Clone Repository

```bash
git clone https://github.com/AbyanDimas/react-product-crud
cd react-product-crud
```

### 2. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Copy dan edit environment variables
cp .env.example .env
# Edit .env dengan konfigurasi RDS Anda
```

**Edit file `backend/.env`:**
```env
# Database Configuration untuk AWS RDS MySQL
DB_HOST=your-rds-endpoint.region.rds.amazonaws.com
DB_PORT=3306
DB_USER=admin
DB_PASSWORD=your-password
DB_NAME=product_db

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
FRONTEND_URL=http://localhost:3000
```

### 3. Setup Frontend

```bash
cd ../frontend

# Install dependencies
npm install

# Environment variables sudah ter-konfigurasi di .env
```

### 4. Import Database

```bash
# Dari root directory
# Import schema
mysql -h your-rds-endpoint.region.rds.amazonaws.com -P 3306 -u admin -p < database/schema.sql

# Import sample data
mysql -h your-rds-endpoint.region.rds.amazonaws.com -P 3306 -u admin -p < database/sample_data.sql
```

## 🏃‍♂️ Menjalankan Aplikasi

### Development Mode

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Server akan berjalan di http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# Aplikasi akan terbuka di http://localhost:3000
```

### Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd frontend
npm run build
# Deploy build folder ke web server
```

## 📄 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Products

| Method | Endpoint | Description | Parameters |
|--------|----------|-------------|------------|
| GET | `/products` | Get all products | `page`, `limit`, `category`, `search` |
| GET | `/products/:id` | Get product by ID | - |
| POST | `/products` | Create new product | Body: product data |
| PUT | `/products/:id` | Update product | Body: product data |
| DELETE | `/products/:id` | Delete product | - |
| GET | `/categories` | Get all categories | - |

#### Example Requests

**Get Products with Pagination:**
```bash
GET /api/products?page=1&limit=10&category=Electronics&search=iPhone
```

**Create Product:**
```bash
POST /api/products
Content-Type: application/json

{
  "name": "iPhone 15 Pro",
  "description": "Latest iPhone with A17 Pro chip",
  "price": 15999000,
  "category": "Electronics",
  "stock_quantity": 50,
  "image_url": "https://example.com/iphone15.jpg"
}
```

**Update Product:**
```bash
PUT /api/products/1
Content-Type: application/json

{
  "name": "iPhone 15 Pro Max",
  "price": 18999000,
  "stock_quantity": 30
}
```

### Response Format

**Success Response:**
```json
{
  "success": true,
  "message": "Products retrieved successfully",
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message",
  "data": null
}
```

## 📊 Database Schema

### Table: products

| Column | Type | Description |
|--------|------|-------------|
| id | INT AUTO_INCREMENT | Primary key |
| name | VARCHAR(255) | Product name (required) |
| description | TEXT | Product description |
| price | DECIMAL(10,2) | Product price (required) |
| category | VARCHAR(100) | Product category |
| stock_quantity | INT | Stock quantity (default: 0) |
| image_url | VARCHAR(500) | Product image URL |
| created_at | TIMESTAMP | Creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

### Indexes
- `idx_products_name` on `name`
- `idx_products_category` on `category`
- `idx_products_created_at` on `created_at`

## 🚀 Deployment

### Backend Deployment (Heroku)

1. **Persiapan**
```bash
cd backend

# Create Procfile
echo "web: node server.js" > Procfile

# Create Heroku app
heroku create your-app-name-backend

# Set environment variables
heroku config:set DB_HOST=your-rds-endpoint.region.rds.amazonaws.com
heroku config:set DB_PORT=3306
heroku config:set DB_USER=admin
heroku config:set DB_PASSWORD=your-password
heroku config:set DB_NAME=product_db
heroku config:set NODE_ENV=production

# Deploy
git add .
git commit -m "Initial backend deploy"
heroku git:remote -a your-app-name-backend
git push heroku main
```

### Frontend Deployment (Netlify)

1. **Build untuk production**
```bash
cd frontend

# Update .env untuk production
REACT_APP_API_URL=https://your-app-name-backend.herokuapp.com/api

# Build
npm run build
```

2. **Deploy ke Netlify**
   - Drag & drop folder `build` ke [Netlify](https://netlify.com)
   - Atau connect dengan Git repository

### Frontend Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel

# Set environment variables di Vercel dashboard
```

## 🛠️ Troubleshooting

### Common Issues

#### 1. Database Connection Error

**Error:** `ECONNREFUSED` atau `ETIMEDOUT`

**Solutions:**
- ✅ Pastikan RDS instance sudah running
- ✅ Check security group rules (port 3306 terbuka)
- ✅ Verify endpoint URL dan credentials
- ✅ Test koneksi dengan MySQL client

#### 2. CORS Error

**Error:** `Access-Control-Allow-Origin`

**Solutions:**
- ✅ Pastikan `FRONTEND_URL` di backend `.env` sudah benar
- ✅ Check CORS configuration di `server.js`

#### 3. Module Not Found

**Error:** `Cannot find module`

**Solutions:**
- ✅ Run `npm install` di folder yang bermasalah
- ✅ Delete `node_modules` dan `package-lock.json`, lalu `npm install`

#### 4. Build Errors

**Solutions:**
- ✅ Check Node.js version (gunakan v16+)
- ✅ Clear npm cache: `npm cache clean --force`
- ✅ Update dependencies: `npm update`

### Debug Commands

```bash
# Check backend health
curl http://localhost:5000/health

# Check database connection
node -e "require('./backend/config/database').testConnection()"

# View backend logs
cd backend && npm run dev

# View frontend logs
cd frontend && npm start
```

## 📈 Performance Tips

### Database Optimization
- ✅ Gunakan indexes yang sudah ada
- ✅ Implement database connection pooling
- ✅ Add query caching untuk production

### Frontend Optimization
- ✅ Implement lazy loading untuk images
- ✅ Add loading states
- ✅ Use React.memo untuk prevent unnecessary re-renders
- ✅ Implement virtual scrolling untuk large datasets

### Backend Optimization
- ✅ Add response compression
- ✅ Implement rate limiting
- ✅ Use environment-based logging
- ✅ Add API caching

## 🔒 Security Best Practices

### Production Checklist

- ✅ **Environment Variables**: Semua sensitive data di environment variables
- ✅ **Database Security**: Batasi IP access untuk RDS
- ✅ **HTTPS**: Gunakan HTTPS untuk production
- ✅ **Input Validation**: Validate semua input di frontend dan backend
- ✅ **SQL Injection**: Gunakan prepared statements (sudah implemented)
- ✅ **CORS**: Konfigurasi CORS dengan domain yang spesifik
- ✅ **Rate Limiting**: Implement rate limiting untuk API
- ✅ **Authentication**: Add user authentication untuk production use

## 🤝 Contributing

1. Fork repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📦 Support

Jika ada pertanyaan atau issues:
1. Check troubleshooting section di atas
2. Create issue di GitHub repository
3. Contact maintainer

---

**🎉 Selamat! Aplikasi Product CRUD Anda sudah siap digunakan!**

Dengan mengikuti panduan ini, Anda telah berhasil membuat aplikasi CRUD yang lengkap dengan:
- ✅ Modern React.js frontend
- ✅ Robust Node.js/Express backend
- ✅ AWS RDS MySQL database
- ✅ Responsive design
- ✅ Production-ready deployment

Aplikasi ini siap untuk dikembangkan lebih lanjut dengan fitur-fitur tambahan seperti authentication, file upload, atau integrasi dengan service AWS lainnya.

