const ReadMoreButton = () => {
    return (
        <a href="" className="flex justify-center items-center gap-2 ">
            <p className="text-[#d0011b]">Xem tất cả</p>
            <div className="relative w-[1.125rem] h-[1.125rem] rounded-full	bg-[#d0011b]">
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 stroke-white w-[0.5rem]" enableBackground="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" ><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
            </div>
        </a>
    )
}

export default ReadMoreButton;