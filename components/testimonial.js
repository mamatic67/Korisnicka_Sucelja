import Image from 'next/image';

const Testimonial = ({ caption, imageSrc }) => (
    <div className="h-96 border hover:cursor-pointer">
        <div className="h-4/5 bg-gray-100 relative">
            <Image
                src={imageSrc}
                layout="fill"
                objectFit="cover"
                alt="Grow business"
            />
        </div>
        <div className="h-1/5 bg-gray-300 flex items-center justify-center relative">
            <p className="capitalize font-roboto-condensed text-xl text-hci-lila">
                {caption}
            </p>
            <div className="absolute right-4 h-full flex items-center">
                <Image
                    src={'/right.svg'}
                    layout="fixed"
                    width={15}
                    height={15}
                    alt="Right icon"
                />
            </div>
        </div>
    </div>
);

export default Testimonial;
