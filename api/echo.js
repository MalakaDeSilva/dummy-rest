/**
 * POST /api/echo — returns the JSON body plus `receivedAt`.
 */
module.exports = function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const isPlainObject =
    req.body !== undefined &&
    req.body !== null &&
    typeof req.body === "object" &&
    !Array.isArray(req.body);

  const payload = isPlainObject
    ? req.body
    : req.body === undefined
      ? {}
      : { data: req.body };

  return res.status(200).json({
    ...payload,
    "returningFrom":"VERCEL",
    receivedAt: new Date().toISOString(),
  });
};
