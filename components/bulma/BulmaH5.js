const BulmaH5 = props => {
  const { classes, children, style } = props
  let className = "subtitle is-5 ".concat(classes)

  return (
    <h4 className={ className } style={{ margin: `5px 0`, ...style }}>
      { children }
    </h4>
  )
}

export default BulmaH5