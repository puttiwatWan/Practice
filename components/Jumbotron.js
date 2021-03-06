import { compose, withState, withHandlers, lifecycle } from "recompose"

import { BulmaColumn, BulmaColumns } from './bulma'
import { JUMBOTRON_IMG_BG_BORDER_PADDING, JUMBOTRON_IMG_BG_COLOR_CODE, JUMBOTRON_HEIGHT } from '../config'

const Jumbotron = compose(
  withState('windowWidth', 'setWindowWidth', undefined),
  withHandlers(() => {
    return {
      updateWindowWidth: props => () => {
        const { setWindowWidth } = props
        setWindowWidth(window.innerWidth)
      }
    }
  }),
  lifecycle({
    componentDidMount() {
      const { setWindowWidth, updateWindowWidth } = this.props
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", updateWindowWidth)
    },
    componentWillUnmount() {
      const { updateWindowWidth } = this.props
      window.removeEventListener("resize", updateWindowWidth)
    }
  }),
)(props => {
  const { windowWidth } = props
  const logoSrc = 'static/img/drchemist_logo.jpg'

  return (
      <BulmaColumns>
        <BulmaColumn classes="is-full">
          <div className="img-jumbotron">
            {
              windowWidth && (
                <div className="logo-bg">
                  <img className="logo" src={ logoSrc } />
                </div>
              )
            }
          </div>
        </BulmaColumn>
        <style jsx>{`
          .img-jumbotron {
            position: relative;
            height: ${ JUMBOTRON_HEIGHT }px;
            width: 100%;
            background: url("static/img/jumbotron_bg.jpg") no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }
          .img-jumbotron .logo-bg {
            position: absolute;
            top: ${ JUMBOTRON_HEIGHT / 4 - JUMBOTRON_IMG_BG_BORDER_PADDING }px ;
            left: ${ windowWidth / 2 - (JUMBOTRON_HEIGHT / 2 + JUMBOTRON_IMG_BG_BORDER_PADDING) / 2 }px;
            text-align: center;
            background-color: ${ JUMBOTRON_IMG_BG_COLOR_CODE };
            height: ${ JUMBOTRON_HEIGHT / 2 + JUMBOTRON_IMG_BG_BORDER_PADDING }px;
            width: ${ JUMBOTRON_HEIGHT / 2 + JUMBOTRON_IMG_BG_BORDER_PADDING }px;
            border-radius: 7px;
          }
          .img-jumbotron .logo {
            padding-top: ${ JUMBOTRON_IMG_BG_BORDER_PADDING }px;
            height: ${ JUMBOTRON_HEIGHT / 2 }px;
          }
        `}</style>
      </BulmaColumns>
  )
})

export default Jumbotron