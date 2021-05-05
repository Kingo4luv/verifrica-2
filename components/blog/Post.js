import LinkButton from "../button/LinkButton"
import BlogCard from "./card"

export function BlogPost({posts}){
    return(
        <section className="content mt-4 lg:mt-12 max-w-[1100px] mx-auto py-12 lg:py-32 px-4">
          <div className="flex justify-between items-center">
              <h3 className="text-2xl lg:text-[34px] text-black">Latest Stories</h3>
              <div className="md:w-1/5 lg:w-1/6 hidden md:block">
                  <LinkButton color="secondary" url="/blog/all" text="View All" />
              </div>
          </div>
          <div className="mt-6 lg:mt-12">
              <ul className="flex text-sm md:text-base space-x-4 md:space-x-12 text-black flex-nowrap overflow-x-auto whitespace-nowrap scrolling-wrapper">
                  <li className="border-b-[2px] border-blue">All</li>
                  <li>Research & Testing</li>
                  <li>Design & Product</li>
                  <li>Customer stories</li>
                  <li>Inside Verifrica</li>
              </ul>
          </div>
          <div className="mt-6 lg:mt-12">
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-10">
                  {posts.map((post) => {
                      return(
                        <BlogCard post={post} key={post.id} />
                      )
                  })}
              </ul>
              <div className="w-1/2 block md:hidden mt-12 mx-auto">
                  <LinkButton color="secondary" url="/blog/all" text="View All" />
              </div>
          </div>
      </section>
    )
}