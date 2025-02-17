export default async function handler(req, res) {
    if (req.method === "POST") {
      const { name, email, message } = req.body;
  
      // Log the data (Replace this with database storage)
      console.log("Saving message:", { name, email, message });
  
      return res.status(200).json({ success: true, message: "Message saved!" });
    }
  
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  