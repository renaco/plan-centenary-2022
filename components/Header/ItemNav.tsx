import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ItemNav = ({ item, onClick }) => {
  return (
    <Link
      href={item.slug}
      onClick={onClick}
      className="header-conteiner-link header-animate-link">
      <Image src={item.icon} alt={item.label} height={60} width={60} />
      <span className="header-description">{item.label}</span>
    </Link>
  )
}

export default ItemNav;