# BRPlateConverter API

API for converting Brazilian license plates between the old standard and the Mercosul standard, built with Node.js and Express.

---

# Technologies Used

- Node.js
- Express
- dotenv
- cors
- express-rate-limit

---

# Project Structure

```bash
brplateconverter/
├── node_modules/
├── src/
│   ├── routes/
│   │   └── routes.js
│   └── translate.js
├── .env.example
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Gutooo303/brplateconverter.git
```

Enter the project folder:

```bash
cd brplateconverter
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

In `.env.example` file in the project root:

```env
PORT=3000 // Port example
```

**Important**: remember to rename the `.env.example` file to `.env`.

---

# Running the Project

Default mode:

```bash
npm start
```

Development mode:

```bash
npm run dev
```

---

# Scripts

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  }
}
```

---

# Endpoints

## Initial Route

```http
GET /
```

### Response

```json
{
  "message": "BRPlateConverter API is running."
}
```

---

## Automatic Plate Conversion

```http
GET /convert/:plate
```

The API automatically detects:
- Old Brazilian plate
- Mercosul plate

and converts to the opposite format.

---

# Example Requests

## Old Plate → Mercosul

```http
GET /convert/ABC1234
```

### Response

```json
{
  "type": "old",
  "placaOriginal": "ABC1234",
  "placaMercosul": "ABC1C34"
}
```

---

## Mercosul → Old Plate

```http
GET /convert/ABC1C34
```

### Response

```json
{
  "type": "mercosul",
  "placaMercosul": "ABC1C34",
  "placaAntiga": "ABC1234"
}
```

---

# Supported Formats

## Old Brazilian Plate

```txt
ABC1234
```

Regex:

```js
/^[A-Z]{3}[0-9]{4}$/
```

---

## Mercosul Plate

```txt
ABC1C34
```

Regex:

```js
/^[A-Z]{3}[0-9][A-J][0-9]{2}$/
```

---

# Plate Conversion Rules

| Number | Letter |
| ------ | ------ |
| 0      | A      |
| 1      | B      |
| 2      | C      |
| 3      | D      |
| 4      | E      |
| 5      | F      |
| 6      | G      |
| 7      | H      |
| 8      | I      |
| 9      | J      |

---

# Security

The API uses:

- Rate Limit (`100` requests per IP)
- Plate format validation
- Environment variables with dotenv
- CORS enabled

---

# Dependencies

```json
{
  "cors": "^2.x",
  "dotenv": "^16.x",
  "express": "^4.x",
  "express-rate-limit": "^7.x"
}
```

# Author

Developed by **Gutooo303**