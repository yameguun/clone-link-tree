import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import my_profile from '../public/avatar.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{process.env.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&family=RocknRoll+One&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.image_wrapper}>
        <Image className={styles.image} src={my_profile} alt="my profile image" />
      </div>
      <p className={styles.user_name}>{process.env.name}</p>
      <p className={styles.user_profile}>地方で働くエンジニアです。DX人材になるべく日々精進。このサイトはNext.jsで作ってみました。</p>
      <a href="https://www.facebook.com/tanaka.ripper/" className={styles.links}>facebook</a>
      <a href="https://twitter.com/s_tanaka_suncac" className={styles.links}>twitter</a>
      <a href="https://www.wantedly.com/id/seiji_tanaka_ak" className={styles.links}>wantedly</a>
      <a href="https://github.com/yameguun" className={styles.links}>github</a>
    </div>
  )
}
