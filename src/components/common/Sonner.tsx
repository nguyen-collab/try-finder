'use client';

import { Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <Check className="h-[18px] w-[18px]" />,
        info: <Check className="h-[18px] w-[18px]" />,
        warning: <Check className="h-[18px] w-[18px]" />,
        error: <Check className="h-[18px] w-[18px]" />,
        loading: <Check className="h-[18px] w-[18px] animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            'rounded-xl border border-gray-100 flex items-center gap-3 py-2 px-3 text-white',
          success: '!bg-mediumseagreen',
          warning: '!bg-goldenrod',
          error: '!bg-tomato',
          title: 'tracking-[-0.02em] leading-num-16 font-semibold',
          description:
            'text-sm tracking-[-0.01em] leading-num-16 font-medium opacity-[0.75]',
          icon: 'shrink-0',
          closeButton: 'hidden',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
