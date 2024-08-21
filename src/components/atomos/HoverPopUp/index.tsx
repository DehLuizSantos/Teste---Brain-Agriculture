import React from 'react';
import { HoverCard } from '@mantine/core';
import { forwardRef } from 'react';

export type HoverPopUpProps = {
  texto: string;
  children: React.ReactNode;
  className?: string;
  width?: number;
  openDelay?: number;
  closeDelay?: number;
};
const HoverPopUp = ({
  texto,
  children,
  className,
  width = 320,
  openDelay = 200,
  closeDelay = 400,
}: HoverPopUpProps) => {
  const InfoTextoRef = forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<'div'>
  >((props, ref) => (
    <div ref={ref} {...props} className={className}>
      {children}
    </div>
  ));
  return (
    <HoverCard
      width={width}
      shadow="md"
      withArrow
      openDelay={openDelay}
      closeDelay={closeDelay}
    >
      <HoverCard.Target>
        <InfoTextoRef />
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <p>{texto}</p>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default HoverPopUp;