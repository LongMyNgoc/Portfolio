import CertificateCard from "./CertificateCard";

const Certificate = () => {
    const certificates = [
        {
            title: "Basic IT Application Certificate",
            imageUrl: "/Certificates/Basic_IT.png",
        },
    ];

    return (
        <div className="w-full px-6 py-10 flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {certificates.map((cert, index) => (
                    <CertificateCard key={index} title={cert.title} imageUrl={cert.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default Certificate;
