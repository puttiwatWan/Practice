const BulmaColumn = props => {
  const { classes, children, clearPadding, style } = props;
  let className = `column  ${ classes }`;
  let addedClasses = ''

  switch(clearPadding) {
    case 'bottom': addedClasses = ' clear-padding-bottom'; break;
    case 'top': addedClasses = ' clear-padding-top'; break;
    case 'both': addedClasses = ' clear-padding-top clear-padding-bottom'; break;
    default: break;
  }

  className = className.concat(addedClasses)

  return (
    <div className={ className } style={{ ...style }}>
      { children }
      <style jsx>{`
        .clear-padding-top {
          padding-top: 0 !important;
        }
        .clear-padding-bottom {
          padding-bottom: 0 !important;
        }
      `}</style>
    </div>
  )
}

export default BulmaColumn