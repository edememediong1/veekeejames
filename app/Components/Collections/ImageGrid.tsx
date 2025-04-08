
import Card from "./Card"
import type{dataType} from "@/app/lib/data"

interface ImageGridProps {
  images: dataType[]
}

const ImageGrid = ({images}: ImageGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:w-[80%] my-14 m-auto">
        {images.map((image) => (
            <Card image={image} key={image.id} />
        ))}
    </div>
  )
}

export default ImageGrid