const express = require('express');
const path = require('path');

const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, 'html')));

app.post('/api/calculus', (req, res) => {
  const { n1, n2, operation } = req.body;

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: 'Wrong data' });
  }

  let answer;
  switch (operation) {
    case '+': answer = n1 + n2; break;
    case '-': answer = n1 - n2; break;
    case '*': answer = n1 * n2; break;
    case '/': answer = n2 == 0 ? 'Nope' : n1 / n2; break;
    case '%': answer = n2 == 0 ? 'Nope' : n1 % n2; break;
    default: return res.status(400).json({ error: 'Wrong operation' });
  }

  res.json({ answer });
});




app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})