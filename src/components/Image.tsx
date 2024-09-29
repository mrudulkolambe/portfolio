import React from 'react'
import NextImage from 'next/image'
const Image = ({ src, height, width, alt, className, size }: { src: string, height?: number, width?: number, alt: string, size?: number, className?: string }) => {
	return (
		<NextImage src={src} height={size ?? height} width={size ?? width} alt={alt} priority className={className} />
	)
}

export default Image