"use client"
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation';
import Stairs from './ui/Stairs';

const StairEffect = () => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathname} className='h-screen w-screen fixed top-0 left-0 pointer-events-none z-40 flex'>
                <Stairs />
            </div>
        </AnimatePresence>
    )
}

export default StairEffect
