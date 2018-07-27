const BulmaCardFooter = props => {
  const { classes, children, style } = props;
  const className = `card-footer  ${ classes }`;

  return (
    <div className={ className } style={{ border: `none`, ...style }}>
      { children }
    </div>
  )
}

export default BulmaCardFooter