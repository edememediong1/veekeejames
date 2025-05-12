import eClassic from '../assets/e_classic.jpg'
import tradBride from '../assets/trad_bride.jpg'
import headShot from '../assets/headshot.jpg'
import heroShot from '../assets/heroshot.jpg'
import carousel3 from '../assets/carousel3.jpg'
import carousel2 from '../assets/carousel2.jpg'
import { StaticImageData } from 'next/image'


export interface dataType {
    src : StaticImageData,
    id: string,
    description : string,
    category: string
}

export const images : dataType[] = [
    {
       src: eClassic,
       id: "1",
       description: '“Emerald Majesty” – Beaded Lace Dress with Statement Sleeves Unconventional beauty meets opulence in the Emerald Majesty dress. Crafted from exquisite beaded lace, this gown features massive structured sleeves that add a bold, sculptural element. The detachable headpiece structure elevates the design, transforming the look into a regal statement. This dress is not for the faint of heart—it’s a daring blend of artistry and elegance, meant for the woman who dares to be different and stands out from the crowd.',
       category: "gowns"
    },
    {
        src: tradBride,
        id: "2",
        description: "Brown Contour Gown with Beaded Detailing. This elegant brown contour gown is designed to celebrate the feminine form with grace and sophistication. Featuring intricate beadwork in pink, green, and silver, the gown is beautifully detailed to catch the light with every movement. The upper bodice is fully embellished with reflective stones on soft lace, adding a luxurious sparkle and texture.Styled here on a glowing mom-to-be, this gown is perfect for maternity shoots, special events, or formal occasions — where style, strength, and beauty come together seamlessly.",
        category: "gowns"
     },
     {
        src: headShot,
        id: "3",
        description: "“Gilded Shadow” – Black & Gold Statement Dress: A bold fusion of structure and sensuality. This off-shoulder dress, crafted in black and gold stone lace, hugs the body and highlights the neckline with a daring plunge. Designed to command attention, it embodies power, elegance, and unapologetic femininity.",
        category: "gowns"
     },
     {
        src: heroShot,
        id: "4",
        description: "Bold meets refined in this straight pant set, designed in dual-tone olive with a dramatic collar detail.",
        category: "gowns"
     },
     {
        src: carousel2,
        id: "5",
        description: "Crisp and commanding—this black and white set features a sleek straight pant and bold-collared bodice for timeless edge.",
        category: "gowns"
     },
     {
        src: carousel3,
        id: "6",
        description: "Bold meets refined in this straight pant set, designed in dual-tone olive with a dramatic collar detail.",
        category: "gowns"
     },

]
