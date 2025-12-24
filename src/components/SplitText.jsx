export default function SplitText({ text, active, delay = 0.02 }) {
  return (
    <span className={`inline ${active ? "split-animate" : ""}`}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap mr-1">
          {word.split("").map((char, j) => (
            <span
              key={j}
              className="inline-block split-char"
              style={{
                animationDelay: `${(i * 5 + j) * delay}s`,
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
