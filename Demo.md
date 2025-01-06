<div align="center">
  <img src="https://i.ibb.co/ZKvJqzL/favicon-2.png" alt="URL Shortener Logo" width="120" height="120">
  
# 🔗 URL Shortener

> Dịch vụ rút gọn link hiện đại, nhanh chóng và an toàn

[![Docs](https://img.shields.io/badge/Tài_Liệu-%E2%86%92-gray.svg?colorA=655BE1&colorB=4F46E5&style=for-the-badge)](https://github.com/NoXiHaa/shortlink-main)
[![Demo](https://img.shields.io/badge/Xem_Demo-%E2%86%92-gray.svg?colorA=61C265&colorB=4CAF50&style=for-the-badge)](https://demo-url.com)

</div>

## ✨ Tính Năng Nổi Bật

### 🚀 Hiệu Suất Cao
- ⚡️ Rút gọn URL nhanh chóng
- 📱 Tạo QR code tức thì
- 🎯 Giao diện người dùng mượt mà

### 🔒 Bảo Mật Tối Ưu
- 🔐 Bảo vệ link bằng mật khẩu
- 🛡️ Mã hóa dữ liệu
- 🚫 Chống spam và lạm dụng

### ⚙️ Tùy Chỉnh Linh Hoạt
- 📝 Tùy chỉnh URL ngắn
- ⏰ Đặt thời gian hết hạn
- 📊 Theo dõi thống kê truy cập

## 🛠️ Công Nghệ Sử Dụng

- **Backend**: `Node.js`, `Express`
- **Database**: `SQLite3`
- **Frontend**: `EJS`, `Bootstrap 5`
- **Bảo Mật**: `bcrypt`, `dotenv`
- **Tiện Ích**: `QRCode`, `Moment.js`

## 🚀 Bắt Đầu Nhanh

```bash
# Clone Repository
git clone https://github.com/NoXiHaa/shortlink-main.git

# Cài Đặt Dependencies
npm install

# Cấu Hình Môi Trường
cp .env.example .env

# Khởi Chạy
npm start
```

## 📚 API Documentation

### 🔗 Tạo URL Rút Gọn

```http
POST /shorten
```

```json
{
  "url": "https://example.com/long-url",
  "customSlug": "custom-name",      // Tùy chọn
  "password": "secretpass",         // Tùy chọn
  "expiresIn": "7:days"            // Tùy chọn
}
```

### 🔍 Truy Cập URL

```http
GET /{shortId}
```

| Tham số | Kiểu | Mô tả |
|---------|------|--------|
| `preview` | `boolean` | Xem trang preview |
| `password` | `string` | Mật khẩu truy cập |

## 🌐 Biến Môi Trường

```env
PORT=1986
BASE_URL=http://localhost:3000/
```

## 🤝 Đóng Góp

1. Fork dự án
2. Tạo branch tính năng (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Phân phối theo giấy phép MIT. Xem `LICENSE` để biết thêm thông tin.

## 📧 Liên Hệ

Ngo Xuan Hoang - [@NoXiHaa](https://www.facebook.com/NoXiHaa/)

Project Link: [https://github.com/NoXiHaa/shortlink-main](https://github.com/NoXiHaa/shortlink-main)

---

<div align="center">
  <sub>Made with ❤️ by <a href="https://github.com/NoXiHaa">Ngo Xuan Hoang</a></sub>
</div> 
