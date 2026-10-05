import React from 'react';
import { BRAND } from './BRAND';

/**
 * The Aurelia Estates mark: a gradient tile carrying A modern portal arch with keystone and stepped base.
 * Vector only - no raster assets - so it stays crisp at any size and
 * inherits the surrounding layout.
 */
export function BrandMark({ size = 34, className = '', title, ...rest }) {
  const uid = React.useId().replace(/[^a-zA-Z0-9]/g, '');
  const gid = `bm-{uid}`;
  const label = title || BRAND.name;
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={label}
      {...rest}
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={BRAND.primary} />
          <stop offset="100%" stopColor={BRAND.secondary} />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14.3" fill={`url(#${gid})`} />
      <g transform="translate(14.0 14.0) scale(0.5625)">
        <polygon points='16,54 16,32 23,20 32,14 41,20 48,32 48,54' fill='#ffffff'/><polygon points='27,54 27,36 32,29 37,36 37,54' fill='#414f90'/><polygon points='29,14 35,14 33,22 31,22' fill='#ffffff'/><line x1='20' y1='54' x2='44' y2='54' stroke='#ffffff' stroke-width='2.5' stroke-linecap='round'/>
      </g>
    </svg>
  );
}

export default BrandMark;
