"use client"

import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/free-mode';
import StackCard from './StackCard';
import ImgSlider from './ImgSlider';
import services from '@/utils/service';
import ServiceCard from './ServiceCard';


const ServiceSlider = () => {
	return (
		<>
			<div className="scroll">
				<div className="scroll-c">
					{
						services.map((service, index) => {
							return <ServiceCard key={`1-${index}`} title={service.title} img={service.img} />
						})
					}
				</div>
				<div className="scroll-c">
					{
						services.map((service, index) => {
							return <ServiceCard key={`2-${index}`} title={service.title} img={service.img} />
						})
					}
				</div>
			</div>
			<div className="scroll">
				<div className="scroll-c" style={{
					animationDirection: 'reverse'
				}}>
					{
						services.map((service, index) => {
							return <ServiceCard key={`3-${index}`} title={service.title} img={service.img} />
						})
					}
				</div>
				<div className="scroll-c" style={{
					animationDirection: 'reverse'
				}}>
					{
						services.map((service, index) => {
							return <ServiceCard key={`4-${index}`} title={service.title} img={service.img} />
						})
					}
				</div>
			</div>
		</>
	)
}

export default ServiceSlider