const BulmaImage = props => {
  const { classes, children, style } = props;
  const className = `image  ${ classes }`;

  return (
    <figure className={ className } style={{ ...style }}>
      { children }
    </figure>
  )
}

export default BulmaImage