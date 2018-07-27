const BulmaCard = props => {
  const { classes, children, style } = props;
  const className = `card  ${ classes }`;
  const defaultStyle = {
    borderRadius: `3px`,
    overflow: `hidden`
  }

  return (
    <div className={ className } style={{ ...defaultStyle, ...style }}>
      { children }
    </div>
  )
}

export default BulmaCard