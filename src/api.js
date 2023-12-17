const express = require('express');
const app = express();
const port = 3000;

// رد على الاستعلامات على المسار '/api'
app.get('/api', (req, res) => {
  res.json({ message: 'مرحبًا بك في واجهة برمجة التطبيقات' });
});

// استماع على منفذ معين
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
