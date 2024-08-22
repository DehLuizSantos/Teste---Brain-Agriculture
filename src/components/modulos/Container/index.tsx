import React, { useCallback, useEffect, useRef } from 'react';
import { Shell } from '../Shell';
import { useLocation } from 'react-router-dom';
import { useStore } from 'zustand';
import { useLayoutCreator } from '@/store/layout/use-Layout-store';
import { PiPlantLight } from 'react-icons/pi';
import { VscDashboard } from 'react-icons/vsc';

const Container = ({ children }: any) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { isNavbarHover, setIsNavHover } = useStore(useLayoutCreator);

  const changeModulosByLocation = useCallback((path: string) => {
    const pathFormated = path.replace('/', '');
    const modulos: any = {
      dashboard: 'Dashboard',
    };
    return modulos[pathFormated];
  }, []);

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
  }, [location.pathname]);

  return (
    <Shell
      isNavHover={isNavbarHover}
      links={[
        { icon: <VscDashboard />, label: 'Dashboard' },
        { icon: <PiPlantLight />, label: 'Produtor' },
      ]}
      modulo={changeModulosByLocation(location.pathname)}
      navbarRef={navbarRef}
    >
      {children}{' '}
    </Shell>
  );
};

export default Container;
