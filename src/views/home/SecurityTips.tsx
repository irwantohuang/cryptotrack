import { securityData } from '../../data/securityData'

const SecurityTips = () => {
    return (
        <>
            <div className="container mx-auto h-[3px] rounded-full bg-gradient-to-r from-accent via-primary to-primary-300"></div>
            <div className="w-full h-full py-20">
                <div className="container mx-auto p-4">
                    <div className="text-center max-w-screen-md mx-auto">
                        <p className="text-xl font-semibold text-primary-300">Stay Safe in the Crypto World</p>
                        <p className="text-2xl lg:text-4xl text-primary-white mt-4">
                            Learn the best practices to protect your digital assets. From
                            <span className="text-4xl md:text-5xl font-medium font-secondary capitalize bg-clip-text bg-gradient-to-br text-transparent from-primary-200  via-primary-300 to-primary-white-200 from-5% via-70%">
                                <br className="md:hidden" /> secure wallets </span>
                            to avoiding scams, we've got you covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto mt-8 gap-y-8 gap-x-4 justify-items-center">
                        {securityData.map((security) => (
                            <div key={security.id} className="px-6 py-8 group
                            [background:linear-gradient(45deg,#241b35,#342a45_50%,#241b35)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_#cb80ff_86%,_#fff_90%,_#cb80ff_94%,_theme(colors.slate.600/.48))_border-box] border border-transparent animate-border rounded-xl
                            ">
                                <div className='w-36 h-36 p-2 mx-auto overflow-hidden flex items-center justify-center bg-gradient-to-tl from-primary/75 via-primary-black-200 rounded-xl to-primary-black shadow'>
                                    <security.icons className='w-24 h-24 text-primary-white group-hover:text-accent' />
                                </div>

                                <div className='card-body mt-4 flex-1'>
                                    <p className='font-semibold text-xl font-secondary transition-all duration-150 text-primary-white text-center group-hover:text-primary-300'>{security.title}</p>
                                    <p className='text-center mt-2 text-primary-white-200 text-sm'>{security.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecurityTips