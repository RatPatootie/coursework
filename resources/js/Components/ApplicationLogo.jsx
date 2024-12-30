import image from '@/assets/logo.png';
export default function ApplicationLogo() {
    return (
        <>
            <img src={image} className='w-16 h-16' alt="Application Logo" />
        </>
    );
}
