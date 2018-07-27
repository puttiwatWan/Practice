const BulmaCardFooterItem = props => {
  const { classes, children, style } = props;
  const className = `card-footer-item  ${ classes }`;

  return (
    <div className={ className } style={{ padding: `0.25rem 0`, border: `none`, ...style }}>
      { children }
    </div>
  )
}

export default BulmaCardFooterItem