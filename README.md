<h1 align="centre">🧾 QR Code Generator (Node.js CLI)</h1>

This is a simple QR Code Generator built using Node.js. It prompts the user to enter a URL, then generates:
- A QR image (`qr_img.png`) of the URL
- A text file (`URL.txt`) containing the entered URL

---

## 📁 Files Included

- `index.js` – Main script file (contains all logic)

---

## ⚙️ How to Run the Project

Follow the steps below to set up and run the project:

### ✅ Step 1: Install Required Packages

In your terminal, run:
npm i inquirer qr-image

### ✅ Step 2: Initialize package.json

In your terminal, run:
npm init -y

Then, in your package.json, add this line at the top level:
"type": "module"

This enables ES module support.

Your updated package.json will look like this:
{  "type": "module",
  "dependencies": {
    "inquirer": "^12.9.0",
    "qr-image": "^3.2.0"
  },
  ....

### ✅ Step 3: Run the Program

In your terminal, run:
node index.js

Enter any URL when prompted. The following files will be created:

qr_img.png – contains the generated QR code

URL.txt – contains the original URL you entered


