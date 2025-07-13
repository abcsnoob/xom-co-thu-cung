import type { NextPage } from 'next'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'

interface LangData {
  title: string
  welcome: string
  description: string
  button_track: string
  button_shop: string
  button_forum: string
}

interface HomeProps {
  lang: LangData
}

const Home: NextPage<HomeProps> = ({ lang }) => {
  return (
    <>
      <Head>
        <title>{lang.title}</title>
        <meta name="description" content={lang.description} />
      </Head>

      <div className="container mt-5">
        <div className="text-center">
          <h1 className="display-4">{lang.welcome}</h1>
          <p className="lead">{lang.description}</p>

          <div className="d-grid gap-3 col-6 mx-auto mt-4">
            <a href="/track/lu123" className="btn btn-primary btn-lg">
              {lang.button_track}
            </a>
            <a href="https://shop.xomcothucung.org" className="btn btn-outline-success btn-lg">
              {lang.button_shop}
            </a>
            <a href="https://forum.xomcothucung.abcsnoob.com" className="btn btn-outline-secondary btn-lg">
              {lang.button_forum}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'lang', 'vi-vn.json')
  const langRaw = fs.readFileSync(filePath, 'utf8')
  const lang: LangData = JSON.parse(langRaw)

  return {
    props: {
      lang
    }
  }
}

export default Home
