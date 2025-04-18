import type {dataType} from "../lib/data"

export function getRelatedImages(currentImage: dataType, allImages: dataType[], limit = 4) : dataType[]{
    //First try to find images with the same category
    const sameCategory = allImages.filter((img) => img.id !== currentImage.id && img.category === currentImage.category)

    // If we have enough images with the same category, return them
    if(sameCategory.length >= limit) {
        return sameCategory.slice(0, limit)
    }

    //Otherwise, add other random images to reach the limit
    const otherImages = allImages.filter((img) => img.id !== currentImage.id && img.category !== currentImage.category)

    //Combine same category images with other random images 
    return [...sameCategory, ...otherImages.slice(0, limit - sameCategory.length)].slice(0, limit)
}