const BulmaCardContent = props => {
  const { classes, children, style } = props;
  const className = `card-content  ${ classes }`;

  return (
    <div className={ className } style={{ padding: `0.5rem 1rem`, ...style }}>
      { children }
    </div>
  )
}

export default BulmaCardContent