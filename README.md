# BRPlateConverter API

Simple API for converting old Brazilian license plates to the Mercosul standard, built with Node.js and Express.

---

# Technologies Used

* Node.js
* Express
* dotenv
* cors
* express-rate-limit

---

# Project Structure

```bash
brplateconverter/
├── node_modules/
├── src/
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
npm run build
```

---

# Environment Variables

In `.env.example` file in the project root:

```env
PORT=3000 // Port example
```
**Inportant**: remember to rename the .env.example to .env.

---

# Running the Project

Default mode:

```bash
node index.js
```

Or using nodemon:

```bash
npx nodemon index.js
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

## Convert Old Plate to Mercosul Standard

```http
GET /translate/:plate
```

---

## Example Request

```http
GET /translate/ABC1234
```

### Example Response

```json
{
  "placaOriginal": "ABC1234",
  "placaMercosul": "ABC1C34"
}
```

---

## Convert Old Plate to Mercosul Standard

```http
GET /translate-reverse/:plate
```

---

## Example Request

```http
GET /translate-reverse/ABC1C34
```

### Example Response

```json
{
  "placaOriginal": "ABC1C34",
  "placaMercosul": "ABC1234"
}
```

---

# Security

The API uses:

* Rate Limit (`100` requests per IP)
* Plate format validation
* Environment variables with dotenv
* CORS enabled

---

# Plate Conversion Rules

Example:

```txt
ABC1234 → ABC1C34
```

Conversion rule:

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

# Reverse Plate Conversion Rules

Example:

```txt
ABC1C34 → ABC1234
```

Conversion rule:

| Letter | Number |
| ------ | ------ |
| A      | 0      |
| B      | 1      |
| C      | 2      |
| D      | 3      |
| E      | 4      |
| F      | 5      |
| G      | 6      |
| H      | 7      |
| I      | 8      |
| J      | 9      |

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

---

# Author

Developed by **Gutooo303**
