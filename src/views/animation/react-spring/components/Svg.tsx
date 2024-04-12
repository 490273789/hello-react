const Svg = () => {
  return (
    <div>
      <div className="comment_part">svg的使用</div>
      <svg
        width="500px"
        height="200px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20" y1="20" x2="40" y2="40" stroke="black" />
      </svg>
    </div>
  )
}

export default Svg
