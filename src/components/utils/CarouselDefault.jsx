import { Carousel, IconButton } from "@material-tailwind/react";
export function CarouselDefault({ media }) {
    return (
        <Carousel autoplay loop transition={{ duration: 1 }} className="rounded-xl" prevArrow={({ handlePrev }) => (
            <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute bg-black hover:bg-black top-2/4 left-4 -translate-y-2/4"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                </svg>
            </IconButton>
        )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute bg-black hover:bg-black top-2/4 !right-4 -translate-y-2/4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                    </svg>
                </IconButton>
            )}
        >
            {media.map((item, index) => (
                <div key={index}>
                    {item.type === 'image' && (
                        <img
                            src={item.link}
                            alt="image 1"
                            className="h-[30vh] lg:h-full w-full object-cover"
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