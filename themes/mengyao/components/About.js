import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/formatDate'

export const About = (props) => {
    const { post } = props

    const { locale } = useGlobal()

    return (
        <section className="flex-wrap flex mt-2 text-gray-400 dark:text-gray-400 font-light leading-8">
            Mengyao Cao
            Photographer / Journalist / Designer

            Active in a wide variety of fields from photography, photojournalism, design and editorial work to ceramics, painting, and videography. Major photo collections include UNICEF Project (2019), Yunnan Series (2023), Street Photography.

            Mengyao entered the world of photography in 2016 at the age of 20. She is dedicated to combining visual art with social awareness, documenting the beauty, kindness, and challenges of the modern society.

        </section>
    )
}

export default About;