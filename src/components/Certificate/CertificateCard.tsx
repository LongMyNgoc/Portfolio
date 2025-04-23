import Image from "next/image";

interface CertificateCardProps {
    title: string;
    imageUrl: string;
}

const CertificateCard = ({ title, imageUrl }: CertificateCardProps) => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="w-full relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                />
            </div>
            <div className="p-6 text-center w-full">
                <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
            </div>
        </div>
    );
};

export default CertificateCard;
