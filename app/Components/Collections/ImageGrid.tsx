import Link from "next/link"
import Card from "./Card"
import type{dataType} from "@/app/lib/data"

interface ImageGridProps {
  images: dataType[]
}

const ImageGrid = ({images}: ImageGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {images.map((image) => (
           <Link key={image.id} href={`images/${image.id}`}>
            <Card image={image} />
           </Link>
        ))}
    </div>
  )
}

export default ImageGrid