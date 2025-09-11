'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { ButtonProps } from '@/components/ui/button';

interface WhatsAppButtonProps extends ButtonProps {
  message?: string;
  phoneNumber?: string;
}

export default function WhatsAppButton({ 
  message = 'Hi, I need help with copyright registration',
  phoneNumber = '+919884056282',
  children,
  ...props 
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children || (
        <>
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp Consultation
        </>
      )}
    </Button>
  );
}