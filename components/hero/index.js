import Navbar from "components/Navbar";
import Image from "next/image";
import styles from './styles.module.css'


export default function HeroSection(){

    return(
        <div className={`px-2 sm:px-4 relative  mb-5 ${styles.HeroSection}`}>
        <Navbar />
        <div className={`absolute z-1 w-96 ${styles.HeroSection_image_section} flex justify-end`}>
        <Image
        className={styles.HeroSection_image}
        src={'/images/hero-image.png'}
        alt="hero-image"
        width={300}
        height={300}
        
        />
        </div>

        <div className={`z-1  md:px-8 `}>
            <h1 className={`${styles.HeroSection_text} text-fontSize1 font-extrabold`}>
                Establishing Your Online
                    Presence With Perfection
            </h1>
            <p  className="text-fontSize3">
            When it comes to establishing an online presence for the purpose of gaining new clients, you need a skilfully crafted website that is both responsive and well designed.
            </p>
            <p className="text-fontSize3 mt-3">

           
At Cathadev, we don't just build websites, we create digital experiences by working with you to enhance your online presence through quality, responsive websites that will influence and affect user experience, branding, SEO, conversion rate, user interactions and much more
</p>  

        </div>

        <div className={styles.HeroSection_float_section}>

        </div>
        
        </div>
    )
}