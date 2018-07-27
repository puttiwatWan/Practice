const BulmaH4 = props => {
  const { classes, children, style } = props
  let className = "subtitle is-4 ".concat(classes)

  return (
    <h4 className={ className } style={{ margin: `5px 0`, ...style }}>
      { children }
    </h4>
  )
}

export default BulmaH4