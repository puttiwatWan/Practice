import Head from 'next/head'

const Layout = (props) => {
  const { title, children } = props
  return (
    <div className="layout">
      <Head>
        <title>{ title }</title>
        <link rel="shortcut icon" href="//doctorchemist.in.th//gallery/logo1_edit-07-ts1511721174.jpg" type="image/jpeg" />
      </Head>
      {children}
      <style jsx>{`
        .layout{
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Layout