function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function updateSlug(req, res, next) {
  if (req.method === "POST" || req.method === "PUT") {
    req.body.slug = generateSlug(req.body.title);
  }
  next();
}

module.exports = { generateSlug, updateSlug };
