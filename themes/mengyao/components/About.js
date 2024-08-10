import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/formatDate'

export const About = props => {
  const { post } = props

  const { locale } = useGlobal()

  return (
    <section className="flex mt-2 leading-8 mt-20">
      <div className="flex-4 w-4/10">
        <p className="font-semibold">Mengyao Cao</p>
        <p className="font-semibold mb-10">
          Photographer / Journalist / Designer
        </p>
        <p className=" mb-10">
          Active in a wide variety of fields from photography, photojournalism,
          design and editorial work to ceramics, painting, and videography.
          Major photo collections include UNICEF Project (2019), Yunnan Series
          (2023), Street Photography.
        </p>
        <p>
          Mengyao entered the world of photography in 2016 at the age of 20. She
          is dedicated to combining visual art with social awareness,
          documenting the beauty, kindness, and challenges of the modern
          society.
        </p>
      </div>
      <div className="flex-4 w-4/10 flex-none	text-right">
        <img className={`w-8/12 inline`} src={`/images/mengyao/profile.png`} />
        <p className="italic font-semibold">
          Lens is my VOICE
          <br />
          EYES
          <br />
          HEART
        </p>
      </div>
    </section>
  )
}

export default About
