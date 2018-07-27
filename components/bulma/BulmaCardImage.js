const BulmaCardImage = props => {
  const { classes, children, style } = props;
  const className = `card-image  ${ classes }`;

  return (
    <div className={ className } style={{ ...style }}>
      { children }
    </div>
  )
}

export default BulmaCardImage