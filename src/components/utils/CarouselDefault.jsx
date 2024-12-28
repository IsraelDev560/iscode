import { Carousel } from "@material-tailwind/react";

export function CarouselDefault({ media }) {
    return (
        <Carousel autoplay loop transition={{ duration: 1 }} className="rounded-xl">
            {media.map((item, index) => (
                    <div key={index}>
                        {item.type === 'image' && (
                            <img
                                src={item.link}
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                        )}
                        {item.type === 'video' && (
                            <video
                                src={item.link}
                                className="h-full w-full object-cover"
                            />
                        )}
                    </div>
                ))}
        </Carousel>
    )
}