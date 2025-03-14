app.get("/api/verify", (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Invalid Token" });
      }
      res.status(200).json({ username: decoded.username });
    });
  });
  