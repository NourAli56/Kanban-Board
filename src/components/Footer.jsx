import logo from '../assets/brand/Smart_lifelogo.svg';

export default function Footer() {

    return (
        <div
            className={`mt-[10px] ml-[10px] h-[45px] rounded-[10px] flex items-center justify-center gap-3
                  bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300`}
        >
            <p className="text-[18px]">
                جميع الحقوق محفوظة لدى
            </p>
            <img src={logo} alt="Logo" className="h-6" />
        </div>
    );
}
