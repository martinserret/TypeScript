import { type ReactNode } from 'react';

interface HeaderProps {
  image: {
    src: string,
    alt: string
  },
  children?: ReactNode // ReactNod is anything tant can be returned and outputted by a component, like text, elements, etc. "?" is for optional
} 

export default function Header({ image, children }: HeaderProps ) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  )
}