
<div align="center">
  <img src="https://i.ibb.co/ZKvJqzL/favicon-2.png" alt="URL Shortener Logo" width="120" height="120">
  
  # 🔗 URL Shortener
  
  <p align="center">
    Dịch vụ rút gọn URL hiện đại được xây dựng với Node.js và Express
    <br />
    <a href="https://github.com/NoXiHaa/shortlink-main"><strong>Khám phá tài liệu »</strong></a>
    <br />
    <br />
    <a href="https://demo-url.com">Xem Demo</a>
    ·
    <a href="https://github.com/NoXiHaa/shortlink-main/issues">Báo cáo Bug</a>
    ·
    <a href="https://github.com/NoXiHaa/shortlink-main/issues">Yêu cầu Tính năng</a>
  </p>

  <div align="center">
    <img src="https://img.shields.io/github/license/NoXiHaa/shortlink-main?style=for-the-badge" alt="License">
    <img src="https://img.shields.io/github/stars/NoXiHaa/shortlink-main?style=for-the-badge" alt="Stars">
    <img src="https://img.shields.io/github/issues/NoXiHaa/shortlink-main?style=for-the-badge" alt="Issues">
  </div>
</div>

<br />

## ✨ Tính Năng Nổi Bật

🚀 **Hiệu Suất Cao**
- Rút gọn URL nhanh chóng
- Tạo QR code tức thì
- Giao diện người dùng mượt mà

🔒 **Bảo Mật Tối Ưu**
- Bảo vệ link bằng mật khẩu
- Mã hóa dữ liệu
- Chống spam và lạm dụng

⚙️ **Tùy Chỉnh Linh Hoạt**
- Tùy chỉnh URL ngắn
- Đặt thời gian hết hạn
- Theo dõi thống kê truy cập

## 🛠️ Công Nghệ Sử Dụng

<div align="center">

| Công nghệ | Phiên bản |
|-----------|-----------|
| Node.js | v14+ |
| Express | v4.17+ |
| SQLite3 | v5.0+ |
| Bootstrap | v5.1+ |
| Font Awesome | v6.0+ |
| SweetAlert2 | v11+ |

</div>

## 🚀 Bắt Đầu Nhanh

### Yêu Cầu Hệ Thống
```bash
Node.js (v14 trở lên)
npm hoặc yarn
```

### Cài Đặt

1️⃣ Clone repository
```bash
git clone https://github.com/NoXiHaa/shortlink-main.git
```

2️⃣ Cài đặt dependencies
```bash
npm install
```

3️⃣ Cấu hình môi trường
```bash
cp .env.example .env
# Chỉnh sửa file .env theo nhu cầu
```

4️⃣ Khởi chạy ứng dụng
```bash
npm start
```

## 📚 API Documentation

### Tạo URL Rút Gọn

```http
POST /shorten
```

#### Request Body
```json
{
  "url": "https://example.com/long-url",
  "customSlug": "custom-name",      // Tùy chọn
  "password": "secretpass",         // Tùy chọn
  "expiresIn": "7:days"            // Tùy chọn
}
```

#### Response
```json
{
  "shortUrl": "http://localhost:3000/abc123",
  "qrCode": "data:image/png;base64,..."
}
```

### Truy Cập URL Rút Gọn

```http
GET /{shortId}
```

| Tham số | Kiểu | Mô tả |
|---------|------|--------|
| `preview` | `boolean` | Xem trang preview |
| `password` | `string` | Mật khẩu truy cập |

## 🌐 Biến Môi Trường

```env
PORT=3000
BASE_URL=http://localhost:3000/
```

## 🤝 Đóng Góp

Mọi đóng góp đều được chào đón! Hãy làm theo các bước:

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
  <img src="https://i.ibb.co/ZKvJqzL/favicon-2.png" alt="Footer Logo" width="40" height="40">
  <br>
  <sub>Made with ❤️ by <a href="https://github.com/NoXiHaa">Ngo Xuan Hoang</a></sub>
</div>
