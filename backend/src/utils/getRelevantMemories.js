export const getRelevantMemories = (
  rawMemories,
  query
) => {

  const stopWords = [
    "tell",
    "about",
    "what",
    "when",
    "where",
    "have",
    "does",
    "with",
    "from",
    "that",
    "this",
    "your",
    "my"
  ];

  const keywords =
    query
      .toLowerCase()
      .split(/\s+/)
      .filter(
        word =>
          word.length > 2 &&
          !stopWords.includes(word)
      );

  const scoredMemories =
    rawMemories
      .map(memory => {

    const searchable = [

    memory.title,

    memory.summary,

    memory.story?.content || "",

    ...(memory.people || []),

    ...(memory.places || []),

    ...(memory.events || []),

    ...(memory.emotions || []),

    ...(memory.tags || [])

    ]
  .join(" ")
  .toLowerCase();


        const score =
          keywords.reduce(
            (total, keyword) =>
              searchable.includes(keyword)
                ? total + 1
                : total,
            0
          );

        return {
          memory,
          score
        };

      })

      .filter(item =>
        item.score > 0
      )

      .sort(
        (a, b) =>
          b.score - a.score
      )

      .slice(0, 5)

      .map(item =>
        item.memory
      );

  return scoredMemories.length
    ? scoredMemories
    : rawMemories.slice(0, 3);

};