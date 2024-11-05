import Link, {LinkProps} from 'next/link'

interface LinkWrapperProps extends LinkProps {
  children: React.ReactNode
}

export default function LinkWrapper({href, children}: LinkWrapperProps) {
  return (
    <Link
      href={href}
      style={{
        placeSelf: 'center',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      {children}
    </Link>
  )
}
