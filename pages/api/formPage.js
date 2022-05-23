
export default function addForm(req, res) {
  if (req.method === 'POST') {
    const value = req.body;
    if (Object.keys(value).length === 0)
      res.json({ status: 0 })
    return res.json({ status: 1 })
  }
}
