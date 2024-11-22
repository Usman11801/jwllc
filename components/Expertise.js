import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>With a proven track record in digital transformation, we excel in delivering tailored solutions across **digital marketing**, **SEO**, and **website development**. Our team combines innovative strategies, cutting-edge technologies, and industry best practices to create impactful results. Whether it's enhancing your online visibility, driving targeted traffic, or building seamless, user-friendly websites, we are committed to turning your vision into reality.</p>
            </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='learn more' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
