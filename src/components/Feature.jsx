function Feature({title, desc, icon}) {
    return(
        <div className="text-white element-center text-center max-w-full w-[300px] sm:w-[400px] mx-auto">
            <img src={`/src/assets/images/${icon}`} alt="icon"
            className="w-[80px] object-contain"
            />
            <h4 className="text-xl font-semibold my-4">
                {title}
            </h4>
            <p className="font-normal text-sm">
                {desc}
            </p>
        </div>
    )
}

export default Feature;