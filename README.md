# Loyihaning Nomi

Mini Blog API  <!-- O'zgarish: haqiqiy sticker rasm manzilini qo'shing -->

## Tavsif
Loyihangiz haqida qisqacha tavsif, uning maqsadi va nima qilishi.

## Xususiyatlar
- Foydalanuvchi autentifikatsiyasi (ro'yxatdan o'tish va kirish)
- Postlarni boshqarish (yaratish, o'qish, yangilash, o'chirish)
- Rasm yuklash funksiyasi
- Turli holatlar uchun xato boshqaruvi

## O'rnatish
1. Repozitoriyani klonlash:
   ```bash
   git clone https://github.com/yourusername/yourproject.git
   ```
2. Loyihaning papkasiga o'ting:
   ```bash
   cd yourproject
   ```
3. Bog'lanishlarni o'rnating:
   ```bash
   npm install
   ```
4. `.env` faylida muhit o'zgaruvchilarini sozlang:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

## Foydalanish
1. Serverni ishga tushiring:
   ```bash
   npm start
   ```
2. API nuqtalari bilan o'zaro aloqada bo'lish uchun Postman yoki har qanday API mijozidan foydalaning.

## API Nuqtalari
- `POST /auth/register`: Yangi foydalanuvchini ro'yxatdan o'tkazish
- `POST /auth/login`: Mavjud foydalanuvchini kirish
- `POST /posts`: Yangi post yaratish
- `GET /posts`: Barcha postlarni olish
- `GET /posts/:id`: ID bo'yicha ma'lum bir postni olish
- `PUT /posts/:id`: Ma'lum bir postni yangilash
- `DELETE /posts/:id`: Ma'lum bir postni o'chirish

## Litsenziya
Ushbu loyiha MIT Litsenziyasi ostida litsenziyalangan.
