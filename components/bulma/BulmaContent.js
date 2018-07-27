const BulmaContent = props => {
  const { classes, children, style } = props;
  const className = `content  ${ classes }`;

  return (
    <div className={ className } style={{ marginBottom: `1rem`, ...style }}>
      { children }
    </div>
  )
}

export default BulmaContent