function TextArea(props) {
  const { isDark, text, setText } = props;
  return (
    <textarea
      rows={15}
      className={`${isDark ? "bg-gray-700" : "bg-white"}  w-full rounded-2xl p-2 border border-gray-800 resize-none`}
      placeholder="Enter/paste your text here"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
}

export default TextArea;
