const Menu = () => {
    return (
        <section className="w-full h-full flex flex-col items-center">
            <h1 className="font-semibold mb-4">About Me</h1>
            <ul className="w-full space-y-3">
                <li className="border border-orange-500 bg-amber-400 px-2 py-1 hover:opacity-70 cursor-pointer">Introduction</li>
                <li className="border border-orange-500 bg-amber-400 px-2 py-1 hover:opacity-70 cursor-pointer">Working Experience</li>
                <li className="border border-orange-500 bg-amber-400 px-2 py-1 hover:opacity-70 cursor-pointer">Personal Projects</li>
            </ul>
        </section>
    )
}

export default Menu