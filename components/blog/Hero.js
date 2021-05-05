export function BlogHero(){
    return(
        <section className="hero pt-16 pb-32 lg:py-52 bg-hair text-white relative">
          <div className="absolute inset-0 w-full h-full flex justify-center md:justify-between items-center">
              <img src="/assets/img/blog-header-left.png" className="hidden md:flex"/>
              <img src="/assets/img/blog-header-center.png" />
              <img src="/assets/img/blog-header-right.png" className="hidden md:flex" />
          </div>
          <h1 className="text-center text-2xl md:text-4xl lg:text-main-head font-bold leading-normal text-white mt-12">Welcome to Verifrica’s Blog</h1>
          <p className="mt-4 lg:mt-10 text-subtitle-3 lg:text-subtitle-1 text-white font-light text-center px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </section>
    )
}