import logo from '../assets/brand/Smart_lifelogo.svg'

export default function Footer() {
    return (
        <div className='bg-white rounded-[10px] mt-[10px] ml-[10px] h-[45px]
        flex items-center justify-center gap-3 ' >
            <p className='text-[#536485] text-[18px]' >جميع الحقوق محفوظة لدى</p>
            <img src={logo} />
        </div>
    )
}
