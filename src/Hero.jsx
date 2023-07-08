import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci odit magni, incidunt velit omnis molestias quidem laboriosam deleniti ab error expedita et a, tempore magnam fugiat porro iure quisquam!
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className='img' />
            </div>
        </div>
    </section>
  )
}

export default Hero