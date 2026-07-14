import Container from '../../../Components/SharedComponents/Container'
import author_img from '../../../assets/images/pages/blog_details/author_img.png'
const BDHero = () => {
    const btnInfos = [
        {id: 1, title: "4 min read"},
        {id: 2, title: "Creative Agency"},
        {id: 3, title: "20 September 2025"},
    ]
    return (
        <>
            <section className='py-20 lg:py-30 mt-23'>
                <Container>
                    <div className='flex items-center justify-center gap-2.5'>
                        {
                            btnInfos.map(btnInfo => (
                                <div key={btnInfo.id}>
                                    <div className='flex items-center justify-center w-fit gap-2 border-[#D9D9D9] border rounded-full px-5 py-1'>
                                        <span className='w-1.5 h-1.5 bg-primary inline-block rounded-full'></span>
                                        <p className='text-primary'>{btnInfo.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='max-w-255 mx-auto text-center'>
                        <h1 className='text-primary text-6xl font-bold leading-17 mt-7.5'>Building a profitable and sustainable business model</h1>
                    </div>
                    {/* Author Info Here */}
                    <div className='bg-white w-56 rounded-full border border-[rgba(0,0,0,0.15)] flex items-center gap-5 mt-7.5 p-1.5 mx-auto'>
                        <div>
                            <img src={author_img} alt="author" />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <span className='text-primary'>Author</span>
                            <h3 className='text-primary text-lg font-bold leading-7'>Mark Alister</h3>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default BDHero