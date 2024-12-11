
const Section2 = () => {
    return (
        <>
            <div className="flex-1 bg-slate-100 p-4">
                <div>
                    <p className="font-bold">Product Details</p>
                    <p className="pl-14">Original Price: 199.00 TRY (Turkish Lara)</p>
                    <p className="pl-14">Converted Price: 26.53 USD (US Dollars)</p>
                </div>

                <div className="mt-4">
                    <p className="font-bold">Product Images</p>
                    <img 
                        className="w-full h-auto object-contain" 
                        src="/public/bonsai-tree-on-monochrome-background.jpg" 
                        alt="Bonsai Tree" 
                    />
                </div>

            </div>
        </>
    );
};

export default Section2;
