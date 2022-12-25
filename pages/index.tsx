import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillTwitterCircle,
   AiFillLinkedin,
   AiFillGithub
  } from 'react-icons/ai'
  import Image from 'next/image'
  import Si from "../public/Sii.png"
  import Des from "../public/Des.png"
  import Code from "../public/code.png"
  import Cons from "../public/Cons.png"


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title> Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-10'>
        <section className='  min-h-screen '>
          <nav className='py-10 mb-12 flex justify-between '>
            <h1 className='text-xl font-burtons '>Haamid apdi</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer'/></li>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-suii font-bold' href="">Resume</a></li>
            </ul>
          </nav>
          <div className=' text-center p-10 '>
            <h2 className='text-5xl py-2 text-teal-500 font-medium'>
              Haamid apdi
            </h2>
            <h3 className='text-2xl py-2'>FullStack developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, architecto. Possimus unde natus non consequuntur consectetur quos totam obcaecati dicta libero aperiam laudantium numquam sed, est perspiciatis dignissimos reiciendis! Libero.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-800'>
            <AiFillGithub/>
            <AiFillLinkedin/>
            <AiFillTwitterCircle/>
          </div>
          <div className='relative mx-auto  bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
               <Image src={Si}  alt="dd" layout='fill' objectFit='cover'/>
          </div>
        </section>
        {/* main */}

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-700 '>
              Lorem ipsum dolor sit <span className='text-teal-500 '>Agency</span> amet consectetur adipisicing elit. Asperiores, voluptatem sint repellendus magni dolorem minus corporis debitis hic a consectetur sapiente voluptas ducimus obcaecati error nam quia vel unde aliquam!
            </p> 
            <p className='text-md py-2 leading-8 text-gray-800   dark:text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In neque deserunt commod,dolorem eius impedit. Enim, ipsum? Sequi, exercitationem quo.</p>
          </div>
          <div>
            <div>
              <Image src={Des} alt=''/>
              <Image src={Code} alt=''/>
              <Image src={Cons} alt=''/>
            </div>
          </div>
        </section>
         </main>
    </>
  )
}
 