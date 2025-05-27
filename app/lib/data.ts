import eClassic from '../assets/e_classic.jpg'
import tradBride from '../assets/trad_bride.jpg'
import headShot from '../assets/headshot.jpg'
import flora_wedding from '../assets/flora_wedding.jpg'
import flora_wedding_big from '../assets/flora_wedding_big.jpg'
import red_bride_full from '../assets/red_bride_full.jpg'
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
        src: flora_wedding,
        id: "3",
        description: "Flora Royale CloseUp - The Closeup of a breathtaking masterpiece for the modern bride. This voluminous ball gown features a lavish blend of hand-embellished lace and shimmering sequins, cascading into a grand silhouette that commands attention. With its cinched waistline and sculpted neckline, it’s designed to flatter and enchant—perfect for the bride who dreams of a fairytale entrance.",
        category: "gowns"
     },
     {
        src: headShot,
        id: "4",
        description: "“Gilded Shadow” – Black & Gold Statement Dress: A bold fusion of structure and sensuality. This off-shoulder dress, crafted in black and gold stone lace, hugs the body and highlights the neckline with a daring plunge. Designed to command attention, it embodies power, elegance, and unapologetic femininity.",
        category: "gowns"
     },
     {
        src: red_bride_full,
        id: "5",
        description: "A Regal Affair - Step into timeless elegance with this handcrafted traditional lace ensemble, richly adorned with intricate embroidery and layered coral beads. Featuring a figure-flattering silhouette, bold shoulder accents, and a radiant red gele, this look is a statement of heritage, grace, and queenly poise. Perfect for brides and ceremonial moments that call for unforgettable presence.",
        category: "gowns"
     },
     {
        src: flora_wedding_big,
        id: "6",
        description: "Flora Royale - A breathtaking masterpiece for the modern bride. This voluminous ball gown features a lavish blend of hand-embellished lace and shimmering sequins, cascading into a grand silhouette that commands attention. With its cinched waistline and sculpted neckline, it’s designed to flatter and enchant—perfect for the bride who dreams of a fairytale entrance.",
        category: "gowns"
     },

]
