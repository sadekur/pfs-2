"use client"
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation';
import Stairs from './ui/Stairs';

const StairEffect = () => {
    const pathname = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div key={pathname} className='pointer-events-none'>
                <Stairs />
            </div>
        </AnimatePresence>
    )
}

export default StairEffect
