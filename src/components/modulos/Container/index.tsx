import { useEffect, useRef } from 'react';
import { Shell } from '../Shell';
import { useStore } from 'zustand';
import { useLayoutCreator } from '@/store/layout/use-Layout-store';
import { PiPlantLight } from 'react-icons/pi';
import { VscDashboard } from 'react-icons/vsc';

const Container = ({ children }: any) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const { isNavbarHover, setIsNavHover } = useStore(useLayoutCreator);

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsNavHover(true);
    };
    const handleMouseLeave = () => {
      setIsNavHover(false);
    };

    const navbarRefCurrent = navbarRef.current;

    if (navbarRefCurrent) {
      navbarRefCurrent.addEventListener('mouseenter', handleMouseEnter);
      navbarRefCurrent.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (navbarRefCurrent) {
        navbarRefCurrent.addEventListener('mouseenter', handleMouseEnter);
        navbarRefCurrent.addEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <Shell
      isNavHover={isNavbarHover}
      links={[
        { icon: <VscDashboard />, label: 'Dashboard', to: '/dashboard' },
        { icon: <PiPlantLight />, label: 'Produtor', to: '/produtor' },
      ]}
      navbarRef={navbarRef}
    >
      {children}{' '}
    </Shell>
  );
};

export default Container;
