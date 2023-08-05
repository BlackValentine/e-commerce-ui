import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';

export default function InnerContent() {
  const WIDTH_MD_SCREEN = 767;
  const buttonMenuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > WIDTH_MD_SCREEN) {
        const currentBtnMenu = buttonMenuRef!.current;
        if (currentBtnMenu && currentBtnMenu!.getAttribute('data-headlessui-state')) {
          (buttonMenuRef.current || { click: () => {} }).click();
        }
      }
    });
  }, []);

  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
