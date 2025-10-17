// Placeholder for embeddings helper - in production wire up OpenAI or similar
async function createEmbedding(text) {
  // This is a stub. Replace with real embeddings API call.
  return { vector: Array(768).fill(0).map((_,i)=>Math.random()*0.01) };
}

module.exports = { createEmbedding };