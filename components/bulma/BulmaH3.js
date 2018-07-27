const BulmaH3 = props => {
  const { classes, children, style } = props
  let className = "subtitle is-3 ".concat(classes)

  return (
    <h3 className={ className } style={{ margin: `5px 0`, ...style }}>
      { children }
    </h3>
  )
}

export default BulmaH3