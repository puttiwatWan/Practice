const BulmaColumns = props => {
  const { classes, children, style } = props;
  const className = `columns  ${ classes }`;

  return (
    <div className={ className } style={{ ...style }}>
      { children }
    </div>
  )
}

export default BulmaColumns