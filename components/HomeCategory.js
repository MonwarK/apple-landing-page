export default function HomeCategory({title, subtitle, imageUrl, light}) {
    return (
        <div
            className="min-h-[500px] p-5 m-2"
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className={`w-48 md:w-auto mx-auto text-center pt-5 ${light && "!text-white"}`}>
                <h2 className="text-3xl lg:text-4xl font-semibold">{title}</h2>
                <h3 className={`text-xl ${!light && "text-gray-500"} font-medium my-2`}>{subtitle}</h3>
                <p className={`font-medium ${!light && "text-blue-500"} text-lg cursor-pointer hover:animate-pulse`}>See the Preview</p>
            </div>
            
        </div>
    )
}