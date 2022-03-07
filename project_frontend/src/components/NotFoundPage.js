import React from 'react'
import { useParams } from 'react-router-dom'


const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')] before:bg-cover before:bg-center before:opacity-100 before:blur-sm`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-bold text-center`,
    description: `text-white container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem] text-center`,
}

const NotFoundPage = () => {
    const { error } = useParams();

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            404 Page Not Found
                        </div>
                        <div className={style.description}>
                            The requested URL {`'/${error}'`} was not found on this server. That's all we know :).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;